import React, { useState } from 'react';

const Select = ({ options, label, onChange }: 
  { 
    label: string,
    onChange: (value: string) => void,
    options: {
      value: string;
      label: string;
    }[] }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="">{label}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
