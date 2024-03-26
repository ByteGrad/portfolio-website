import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wisevoyage from "@/public/wisevoyage.png";
import thriftique from "@/public/thriftique.png";
import todoList from "@/public/todo-list.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "WiseVoyage",
    description:
      "I worked as a full-stack developer on this startup project for 2 weeks. It's a travel app that helps you plan your trips with AI generation.",
    tags: ["Ruby on Rails", "StumulusJS", "SQL", "Gemini", "Prompting", "Deployment"],
    imageUrl: wisevoyage,
  },
  {
    title: "Thriftique",
    description:
      "Second hand marketplace. Full-stack developer. It has features like filtering, advanced search options and use of map API.",
    tags: ["Ruby", "MVC", "Sass", "Mapbox", "Heroku", "PostgreSQL", "Cloudstorage"],
    imageUrl: thriftique,
  },
  {
    title: "ToDo List",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["JavaScript", "CSS", "HTML", "JSON", "Responsive Design", "Bootstrap"],
    imageUrl: todoList,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Ruby",
  "Rails",
  "React",
  "Next.js",
  "PHP",
  "Git",
  "Sass",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "MySQL",

] as const;
