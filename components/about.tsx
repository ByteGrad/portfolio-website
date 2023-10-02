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
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With over two decades of extensive experience in the <span className="font-medium">global financial industry</span>, I have had the privilege of working with numerous major banks and financial
        institutions across the world. My journey began in 1998, and since then, I have held positions at BGB, HBOS, ABN, RBC, SAC, BEAR, CS, ING, SEB, TALANX, NBC, and UOB.
      </p>
      <p className="mb-3">
        My professional background has enabled me to serve Murex customers, including banks, hedge funds, asset managers, and insurance companies. I have also provided my expertise to consulting firms
        such as Accenture and Exclian/Luxoft. Over the years, I have taken on a variety of roles, including System Architecture, Design and <span className="font-medium">Environment Management</span>,
        Marketdata, Integration, Architect, EOD Refactoring, Datacenter Move, Cloud Migration, Support, <span className="font-medium">Tech Lead</span>, Scrum Master, Product Owner, Application Owner,
        and Support Manager.
      </p>
      <p className="mb-3">
        As a testament to my commitment to the Murex community, I founded the <span className="font-medium">Murex User Group</span>, which has grown into a thriving network of over 3,800 Murex
        professionals worldwide. My passion for innovation and technology led me to design and develop TradeDB, a universal interface system for Murex that streamlines exchanges, trades, and static
        data management. Additionally, I created MxENV, a system specifically designed to manage Murex environments, including development, testing, pre-production, and production stages. With a
        proven track record in the financial sector and a strong dedication to the Murex community, I am excited to continue contributing to the growth and development of innovative financial
        solutions worldwide.
      </p>

      <p>
        <span className="italic">When I'm not working</span>, I enjoy travelling, watching movies, and programming. I also enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about <span className="font-medium">full stack development</span>.
      </p>
    </motion.section>
  );
}
