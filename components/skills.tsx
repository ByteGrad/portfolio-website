"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { PageSections } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id={PageSections.Skills.id}
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>

      <div className="grid gap-y-10 gap-x-6 row-ga md:grid-cols-[auto_minmax(auto,_1fr)]">
        {skills.map(({ category, skills }) => {
          const listId = `${category.replace(/\s/g, "-").toLowerCase()}-skills`;

          return (
            <React.Fragment key={category}>
              <div className="flex flex-shrink">
                <span className="font-semibold capitalize">{category}</span>
              </div>

              <div>
                <ul
                  id={listId}
                  className="flex flex-wrap gap-2 text-lg text-gray-800"
                >
                  {skills.map((skill, index) => (
                    <motion.li
                      className="bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                      key={skill}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true
                      }}
                      custom={index}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
