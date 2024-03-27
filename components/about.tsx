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
        After being a {"  "}
        <span className="font-medium"> Chef</span>for 8 years, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>. I{" "}
        <span className="italic">Love</span> the problem-solving aspect of{" "}
        it. The feeling of finally solving a problem.
      </p>

      <p>
        My core stack is {" "}
        <span className="font-medium">
          React, JavaScript, Ruby, and PostgreSQL. {" "}
        </span>
        I am also familiar with NextJS and StimulusJS. I am always looking to
        learn new technologies.
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy making music,
        cooking and bouldering. Nothing like{" "}
        <span className="font-medium">learning new things</span> be it {" "}
        <span className="font-medium">Philosophy, Psychology or Theology.</span>
        through books or podcasts.
      </p>
    </motion.section>
  );
}
