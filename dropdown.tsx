"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Select from "./select";

export default function Dropdown() {
  const { ref } = useSectionInView("Dropdown");
  const [isHidden, setIsHidden] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleSelectItem = () => {
    setIsHidden(false);
  };

  return (
    <section id='dropdown' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
      <SectionHeading>My Dropdown</SectionHeading>
      {isHidden ? (
        <div>
          <div>{selectedItem}</div>
          <button onClick={handleSelectItem} className='mt-4 border-white border-2 rounded py-1 px-2'>
            go back to select
          </button>
        </div>
      ) : (
        <Select isHidden={isHidden} setIsHidden={setIsHidden} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      )}
    </section>
  );
}
