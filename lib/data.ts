import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import perlCodeImg from "@/public/perl-code.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Murex Developer",
    location: "Berlin, Germany",
    description:
      "I have worked at this client for nearly 5 years, initially I was hired to build the technical infrastructure for the EWU/Y2K test center which mirrored all financial markets applications for this German bank. I was part of the team to select Murex MxG2000 v2.10 and was part of the core team to implement it. I have developed a universal interface system for trade and static data to connect Murex to Xetra, Eurex and a large number of inhouse systems.",
    icon: React.createElement(CgWorkAlt),
    date: "1998 - 2004",
  },
  {
    title: "Murex Environment Manager",
    location: "London, United Kingdom",
    description:
      "In London I was responsible for the environment management of 32 Murex environments. In order to do this, I have developed an environment management system (MxENV) which allowed me to do this single-handed.",
    icon: React.createElement(CgWorkAlt),
    date: "2004 - 2005",
  },
  {
    title: "Murex MxML and Market Data Developer",
    location: "Paris, France",
    description:
      "When joining Murex (vendor) in Paris I was taking care of one of the first Murex Mx.3 implementations for a large Dutch bank. As the online on-site resource I was the link between the on-location team and the vendor. After completion I worked on several other projects, mainly as an MxML and Market Data Developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2005 - 2008",
  },
  {
    title: "Murex Developer",
    location: "Zürich, Switzerland",
    description:
      "This was with the same team, which implemented Murex Mx.3 for the Dutch bank. I was hired to build some of the needed MxML interfaces and ended up designing, implementing and rewriting all of them.",
    icon: React.createElement(CgWorkAlt),
    date: "2008 - 2010",
  },
  {
    title: "Murex Technical Lead",
    location: "Amsterdam, Netherlands",
    description:
      "Intially I was implementing new MxML-interfaces but then was asked to implement the move of the Mx.3 application from the datacenter in Singapore to Amsterdam. Part of this was a lot of refactoring, including a full rewrite of the EOD processes. After successfully completing this I became technical lead and moved from Development to Support.",
    icon: React.createElement(CgWorkAlt),
    date: "2010 - 2015",
  },
  {
    title: "Murex Environment Manager",
    location: "Köln, Deutschland",
    description:
      "For personal reasons I returned to Germany to work on this small project. I was responsible for managing the test environments, production support and advising on MxML interfaces.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "Murex Technical Lead",
    location: "Amsterdam, Netherlands",
    description:
      "Returning to my Dutch client of 2005 I supported the in-sourcing of the Murex support (from an offshore team in India back to Amsterdam). I have implemented AppDynamics for Murex and later joined the team to implement Application Management for various applications in the bank.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Technical Lead Murex Practise",
    location: "Stockholm, Sweden",
    description:
      "We visited all Murex clients in the Nordic region and talked about common challanges and how to solve them. This was an interesting role, but after a year I decided to move to Asia.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Markets, Wealth and Corporate Lead",
    location: "Bangkok, Thailand",
    description:
      "At NBC, I took on the responsibility of leading four diverse DevOps Squads, each focusing on a different aspect of the bank's technological landscape. These teams included: Financial Markets - Murex MX.3, Market Risk IT, ETL/BI - DataStage and Cyber Crime / AML / Online Fraud / AWS Cloud Migration.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Senior Murex Consultant",
    location: "Singapore",
    description:
      "Catching up with old colleagues from my time at Murex, I joined the team at this bank in Singapore. Im involved with technological improvements like high performance computing (grid computing), database virtualization and similar initiatives.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "TradeDB",
    description:
      "TradeDB is a high-performance, high-availability interface system to feed trade and static data from exchanges into Murex MxG2000.",
    tags: ["Perl", "Sybase", "Murfi", "MxML", "Solaris", "Unix"],
    imageUrl: perlCodeImg, //corpcommentImg,
  },
  {
    title: "MxENV",
    description:
      "System to easily manage and monitor Murex Mx.3 systems.",
    tags: ["Perl", "RHEL", "XmlRequestScript", "Automation", "Jenkins"],
    imageUrl: perlCodeImg, //rmtdevImg,
  },
] as const;

export const skillsData = [
  "Murex",
  "Mx.3",
  "MxML Exchange",
  "Environment Management",
  "EOD",
  "Control-M",
  "Autosys",
  "Tivoli Workload Scheduler",
  "MPC",
  "HPC",
  "Grid Computing",
  "Agile Scrum",
  "DevOps",
  "CI/CD",
  "Automation",
  "Monitoring",
  "Jenkins",
  "ITIL",
  "Perl",
  "SQL",
  "(Python)",
  "(React)",
  "(Next.js)",
  "(TailwindCSS)",

] as const;
