"use client";

import { useState } from 'react';
import useSWR from 'swr';
import Dropdown from './dropdown';
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from './section-heading';


interface Item {
  name: string;
  message: string;
  created_at: string | number;
}

interface Response {
  rows: Item[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Selection = () => {
  const { data } = useSWR<Response>('https://generic-web-app-be.azurewebsites.net/api/generic_data/messages/?collection_name=monolith&skip=0&limit=32', fetcher);
  
  const items: Item[] = data?.rows || [];
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { ref } = useSectionInView("Selection");

  return (
    <motion.section
      id="selection"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Dropdown Selection</SectionHeading>
      {selectedItem && <div className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">Selected: {selectedItem}</div>}
      <br />
      <Dropdown items={items} onSelect={setSelectedItem} />
    </motion.section>
  );
}

export default Selection;
