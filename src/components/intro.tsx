"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
// import Headshot from "@/public/headshot.jpeg";
import { PageSections, experiencesData } from "@/lib/data";

const linkedinUsername = process.env.NEXT_PUBLIC_LINKEDIN_USERNAME;
const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;

function getExperienceDuration() {
  const startDate = experiencesData
    .flatMap((item) => item.date)
    .sort((a, b) => a.getTime() - b.getTime())[0];
  const currentDate = new Date();

  const years = currentDate.getFullYear() - startDate.getFullYear();

  return years;
}

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id={PageSections.Home.id}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image
              src={"/headshot.jpeg"}
              alt={`${process.env.NEXT_PUBLIC_FULL_NAME} portrait`}
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-2 right-2 text-4xl cursor-default"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I'm{" "}
        <span className="font-bold">{process.env.NEXT_PUBLIC_FULL_NAME}</span>.{" "}
        I'm a <span className="font-bold">full-stack software engineer</span>{" "}
        with <span className="font-bold">{getExperienceDuration()} years</span>{" "}
        of experience. I specialize in front-end technologies, and I'm
        especially proficient with <span className="font-bold">React</span>{" "}
        &amp; <span className="font-bold">TypeScript</span>.
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium flex-wrap"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition whitespace-nowrap"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {Boolean(resumeUrl) && (
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 whitespace-nowrap"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV{" "}
            <HiDocumentText className="opacity-60 group-hover:translate-x-1 transition" />
          </a>
        )}

        {Boolean(linkedinUsername) && (
          <a
            aria-label="LinkedIn profile link"
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href={`https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}`}
            target="_blank"
          >
            <BsLinkedin />
          </a>
        )}

        {Boolean(githubUsername) && (
          <a
            aria-label="GitHub profile link"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        )}
      </motion.div>
    </section>
  );
}
