"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

class HiddenFieldError extends Error {
  constructor(message: string = "You have filled out a hidden field") {
    super(message);
    this.name = "HiddenFieldError";
  }
}

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // check if this field is filled out; if so, it's probably a bot
  const hp = formData.get("fullName");

  if (hp) {
    return {
      error: new HiddenFieldError().message,
      resetForm: true
    };
  }

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: `Contact Form <${process.env.CONTACT_FORM_EMAIL}>`,
      to: `${process.env.CONTACT_FORM_EMAIL}`,
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    };
  }

  return {
    data,
    resetForm: true
  };
}
