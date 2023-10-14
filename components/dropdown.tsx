import DropdownItem from "@/components/dropdownItem";
import { useEffect, useRef, useState } from "react";

interface DropdownProps<T> {
  items: T[];
  initialValue?: T;
  keyName?: keyof T;
  keyValue?: keyof T;
  loading?: boolean;
  placeholder?: string;
  onChange: (item: T) => void;
}

export default function Dropdown<T>({
  items,
  keyName,
  keyValue,
  initialValue,
  loading,
  placeholder,
  onChange,
}: DropdownProps<T>) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [showDropdown, toggleDropdown] = useState(false);
  const [selected, setSelected] = useState<T | undefined>(initialValue);

  const handleChange = (item: T) => {
    if (!item) return;
    onChange(item);
    setSelected(item);
    toggleDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        toggleDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="w-full rounded-lg border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 relative"
      ref={dropdownRef}
    >
      {keyName && (
        <div
          className="w-full py-3 px-4 whitespace-nowrap flex items-center justify-items-center cursor-pointer"
          onClick={() => toggleDropdown(!showDropdown)}
        >
          {loading
            ? "Loading..."
            : selected
            ? String(selected[keyName])
            : placeholder || ""}
          <div className="flex-grow" />
          <span className="w-0 h-0 ml-4 border-l-[6px] border-l-transparent border-t-[8px] border-t-black dark:border-t-white border-r-[6px] border-r-transparent" />
        </div>
      )}
      {showDropdown && (
        <div className="absolute top-[48px] left-0 max-h-[15rem] mt-1 overflow-auto rounded-lg p-1 w-full bg-white dark:bg-gray-950 shadow-lg shadow-black/[0.1] transition-opacity">
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              label={keyName ? String(item[keyName]) : ""}
              isSelected={
                selected && keyValue && selected[keyValue] === item[keyValue]
              }
              onSelect={() => handleChange(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
