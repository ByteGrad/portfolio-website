import React from "react";
import { dropdownData } from "@/lib/data";

interface SelectProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function Select({ isHidden, setIsHidden, selectedItem, setSelectedItem }: SelectProps) {
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setIsHidden(true);
  };

  return (
    <div>
      <select value={selectedItem} onChange={(e) => handleSelect(e.target.value)} placeholder='select' className='text-white bg-gray-900 border-white border-2 rounded py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 '>
        {dropdownData.rows.map((item, index) => (
          <option key={index} value={item.name + "-" + item.message}>
            {item.name + "-" + item.message}
          </option>
        ))}
      </select>
    </div>
  );
}
