interface DropdownProps {
  label: string;
  isSelected: boolean | undefined;
  onSelect: () => void;
}

export default function Dropdown({
  label,
  isSelected,
  onSelect,
}: DropdownProps) {
  const classNames = `w-full py-3 px-4 whitespace-nowrap hover:bg-amber-500 transition-colors cursor-pointer rounded ${
    isSelected && "bg-amber-200"
  }`;

  return (
    <div className={classNames} onClick={onSelect}>
      {label}
    </div>
  );
}
