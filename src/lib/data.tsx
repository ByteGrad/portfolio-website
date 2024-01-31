import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { StaticImageData } from "next/image";

export const PageSections = {
  Home: {
    name: "Home",
    id: "home"
  },
  About: {
    name: "About",
    id: "about"
  },
  // Projects: {
  //   name: "Projects",
  //   id: "projects"
  // },
  Skills: {
    name: "Skills",
    id: "skills"
  },
  Experience: {
    name: "Experience",
    id: "experience"
  },
  Contact: {
    name: "Contact",
    id: "contact"
  }
} as const;

export type SectionName =
  (typeof PageSections)[keyof typeof PageSections]["name"];

export interface Experience {
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: Date | [Date, Date];
}

function getMonthYearDate({ month, year }: { month: number; year: number }) {
  return new Date(year, month - 1, 15, 0, 0, 0, 0);
}

export const experiencesData: Experience[] = [
  {
    title: "Started consulting",
    location: "Frostburg, MD",
    description:
      "I started consulting for local small businesses and non-profits, building and maintaining websites and web apps.",
    icon: <CgWorkAlt />,
    date: getMonthYearDate({ month: 2, year: 2015 })
  },
  {
    title: "Software Developer",
    location: "Cumberland, MD",
    description:
      "I was hired at a local software company as a full-stack developer. I worked on a variety of projects for clients, including a HIPAA-compliant electronic medical record.",
    icon: <CgWorkAlt />,
    // date: "Mar 2016"
    date: getMonthYearDate({ month: 3, year: 2016 })
  },
  {
    title: "Full-Stack Developer",
    location: "Cumberland, MD",
    description:
      "I found a new job, increasing my experience and technical expertise.",
    icon: <CgWorkAlt />,
    date: getMonthYearDate({ month: 11, year: 2017 })
    // date: "November 2017"
  },

  {
    title: "Software Engineer",
    location: "New York, NY",
    description:
      "I moved to NYC and started working at a startup, working on a SAAS product and learning skills to be a more well rounded software engineer.",
    // date: "December 2018",
    date: getMonthYearDate({ month: 12, year: 2018 }),
    icon: <CgWorkAlt />
  },

  {
    title: "Senior Software Engineer",
    location: "New York, NY",
    description:
      "I was promoted to Senior Software Engineer, leading projects and influencing technical decisions; this responsibility made me start thinking more critically about all aspects of the SDLC.",
    // date: "Feb 2021 - Jan 2024",
    date: [
      getMonthYearDate({ month: 2, year: 2021 }),
      getMonthYearDate({ month: 1, year: 2024 })
    ],
    icon: <CgWorkAlt />
  }
];

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
}

export const projectsData: ProjectData[] = [
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg
  // }
];

interface Skill {
  category: string;
  skills: string[];
}

export const skills: Skill[] = [
  {
    category: "Technology",
    skills: [
      "TypeScript",
      "React",
      "Node.js",
      "Redux",
      "PostgreSQL",
      "Tailwind CSS",
      "CSS",
      "HTML5",
      "Front-End Development",
      "Apollo",
      "GraphQL",
      "React Native",
      "AWS",
      "Kubernetes",
      "MongoDB",
      "Git",
      "Express"
    ]
  },

  {
    category: "Methodology",
    skills: [
      "Agile",
      "Feature Planning",
      "Sprint Planning",
      "Feature Spikes",
      "Candidate Interviewing & Technical Screening",
      "Mentoring",
      "Code Reviews"
    ]
  }
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion"
] as const;
