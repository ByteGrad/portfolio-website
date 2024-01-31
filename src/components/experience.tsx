"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData, Experience as ExperienceItem } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme, Theme } from "@/context/theme-context";
import SectionHeading from "./section-heading";
import { PageSections } from "@/lib/data";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric"
  }).format(date);
}

function ExperienceElement({
  experience,
  theme
}: {
  experience: ExperienceItem;
  theme: Theme;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem"
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.5)"
        }}
        date={
          Array.isArray(experience.date)
            ? experience.date.map(formatDate).join(" - ")
            : formatDate(experience.date)
        }
        icon={experience.icon}
        iconStyle={{
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem"
        }}
      >
        <h3 className="font-semibold capitalize">{experience.title}</h3>
        <p className="font-normal !mt-0">{experience.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {experience.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience", { threshold: 0.5 });
  const { theme } = useTheme();

  return (
    <section
      id={PageSections.Experience.id}
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <ExperienceElement key={index} experience={item} theme={theme} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
