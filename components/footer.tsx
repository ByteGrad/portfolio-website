import React from "react";

function getYearRange() {
  const beginYear = 2024;
  const currentYear = new Date().getFullYear();

  if (beginYear === currentYear) {
    return beginYear;
  }
  return `${beginYear} - ${currentYear}`;
}

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy;
        {" "}
        {`${getYearRange()} ${process.env.NEXT_PUBLIC_FULL_NAME}. All rights reserved.`}
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email, and Resend.
      </p>
    </footer>
  );
}
