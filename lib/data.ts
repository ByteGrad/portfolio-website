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
    title: "Self Taught Developer",
    location: "Leiria, Portugal",
    description:
      "Began the habit of carving out time everyday to code. This is where I learned the basics of web development. I started with HTML, CSS and JavaScript in a JavaScript online course.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "React Front-End Course",
    location: "Amsterdam, Netherlands",
    description:
      "Spent 6 months learning React. I built a few projects and did a lot of Kata's on Codewars. I learned about state management, hooks, context, and more. I also learned about Next.js.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Bootcamp Graduate",
    location: "Amsterdam, Netherlands",
    description:
      "I graduated from a coding bootcamp in Amsterdam. I learned Ruby, Ruby on Rails, JavaScript, SQL, API use and more. I built a few projects and learned about TDD, Agile, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

//  React.createElement(CgWorkAlt)
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
  "Docker",
  "PHP",
  "Symfony",
  "PostgreSQL",
  "MySQL",
] as const;
