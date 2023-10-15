"use client";

import { useState } from 'react';

interface DropdownProps {
  items: { name: string, message: string, created_at: string | number }[];
  onSelect: (item: any) => void;
}

function Dropdown({ items, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const maxHeight = Math.min(items.length, 5)*3;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[2.5rem] w-[9rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open Dropdown'}
      </button>
      <br />
      {isOpen && (
        <ul className="justify-center gap-2 text-lg text-gray-800" style={{ maxHeight: `${maxHeight}rem`, overflowY: 'scroll', width: '100%'}}>
          {items.map((item, idx) => {
            const date = String(new Date(item.created_at)).split('(')[0];
            const parse = `${item.name} "${item.message}" ${date}`;
            return (
            <li key={idx} onClick={() => { onSelect(parse); setIsOpen(false) }} className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 cursor-pointer">
              {parse}
            </li>
          )
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
