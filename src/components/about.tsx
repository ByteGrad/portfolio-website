"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { PageSections } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id={PageSections.About.id}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Around 2014, I was burned out at my job in the healthcare field and I
        needed a change. I found myself hacking on my Android phone, compiling
        custom ROMs and writing basic apps in my spare time. I decided to go
        back to school for software. In my first semester, I got an internship
        which soon led to a full-time job offer: I took it. I quickly developed
        a love for web technologies, and I'm especially passionate about
        front-end development and building apps that focus on great user
        experience.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy strategy
        games, film, live music, hiking, and working with my hands.
      </p>
    </motion.section>
  );
}
