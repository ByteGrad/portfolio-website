import React from 'react';

export interface DropdownItem  {
    language: string;
    type: string;
    created_at: string;
  }

interface DropdownProps {
    toggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    data: DropdownItem[]
}

export const Dropdown: React.FC<DropdownProps> = ({toggleDropdown, data}) => {
    return (
        <>
        {
            data.map((item, index: number) => 
            <div key={index} onClick={toggleDropdown}>{JSON.stringify(item)}</div>
          )
        }
        </>
    )
}