"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is Jinhong, currently pursuing a degree in{" "}
        <span className="font-medium">Computer Science</span> and{" "}
        <span className="font-medium">Business</span> in Columbia University.
        My general interests lie in Machine Learning and Software Development, 
        although I have recently developed a strong interest in Operating Systems and compilers.
        Right now, I'm working on an LLM project and studying the implementation of language
        tranlsations tools including compilers and interprerters.
      </p>

      <p>
        When I'm not coding, I enjoy playing video games, watching movies, and cooking with
        my friends. My favorite dishes are Korean ramen, spicy hot pot, and tuna salad.  I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
