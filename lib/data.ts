import React from "react";
import { TfiBookmarkAlt } from "react-icons/tfi";
import { FaCode } from "react-icons/fa6";
import { MdAnchor } from "react-icons/md";
import pomello from "@/public/Pomello.png";
import sonar from "@/public/sonar.jpeg";
import naver from "@/public/Naver.png";

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
    title: "Optimization / Deep Learning Researcher,\nadvised by Prof. Suman Jana",
    location: "New York, NY",
    description:
      "1) Calculus/Optimization over programs for automated bug finding, dataflow tracking, or exploit generation. Questions include: how to compute a derivative over a program? How can we do it efficiently? What are other applications?\n2) Deep learning models for program analysis. Questions include: how to teach neural networks to read/write/understand Program? What is a good neural architecture ? ",
    icon: React.createElement(TfiBookmarkAlt),
    date: "2021",
  },
  {
    title: "Submarine Force Command, Squad Leader",
    location: "Jinhae, Korea",
    description:
      "Served in the Submarine Force Command assisting 10+ Board of Admirals & 15+ military exercises.\nRecognized by the Commander for excellent service record and served as squad leader with 22 crew mates for 9 months.",
    icon: React.createElement(MdAnchor),
    date: "2022 - 2023",
  },
  {
    title: "Leadership Roles",
    location: "New York, NY",
    description:
      "E-board, Columbia Data Science Society: hosted Data science Hackathon, fellowships, and the poker tournament\nE-board, Application Development Initiative: hosted weekly cookies&code meeting and DevFest\nE-board, Korean International Society for Academics and Career: hosted talk shows and conferences regarding recruiting",
    icon: React.createElement(FaCode),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Pomello AI",
    description:
      "Founded a startup platform that connects seniors to neighbors ran A/B testing for optimal UI design, acquired 3K+ users.",
    tags: ["Postgres", "Redis", "Typescript", "TypeORM", "React Native"],
    imageUrl: pomello,
  },
  {
    title: "Republic of Korea Navy",
    description:
      "Built automatic cataloging system of hydroacoustic signals picked up by the submarine sonobuoys, achieved 87 % accuracy on 2K+ noise samples",
    tags: ["C++", "Python", "Tensorflow"],
    imageUrl: sonar,
  },
  {
    title: "Naver Corporation",
    description:
      "Developed stock prediction system by implementing LSTM and operated trading pots powered by Deep Reinforcement Learning.",
    tags: ["Python", "PyTorch", "Numpy", "Java"],
    imageUrl: naver,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C",
  "Rust",
  "Go.js",
  "Pytorch",
  "TensorFlow",
  "Typescript",
  "React & React Native",
  "Next.js",
  "Node.js",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Flask",
  "Amazon Web Services",
] as const;
