"use client";

import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { PageSections } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id={PageSections.Contact.id}
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href={process.env.NEXT_PUBLIC_EMAIL}>
          {process.env.NEXT_PUBLIC_EMAIL}
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error, resetForm } = await sendEmail(formData);

          if (resetForm) {
            formRef.current?.reset();
          }

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none opacity-0 absolute bottom-0 left-0 h-0 w-0 z-[-1]"
          name="fullName"
          type="text"
          maxLength={500}
          placeholder="Your name"
        />

        <label
          htmlFor="email"
          className="text-left mb-1 text-gray-700 dark:text-white/80"
        >
          Email:
        </label>
        <input
          id="email"
          className="mb-4 h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />

        <label
          htmlFor="message"
          className="text-left mb-1 text-gray-700 dark:text-white/80"
        >
          Message:
        </label>
        <textarea
          id="message"
          className="mb-4 h-52 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
