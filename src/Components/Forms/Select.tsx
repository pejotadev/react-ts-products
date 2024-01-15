import React, { useState } from 'react';
import { Each } from '../Utils/Each';

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
      <Each of={options} render={(option, index) => {
        return <option key={index} value={option.value}>
          {option.label}
        </option>;
      }} />
    </select>
  );
};

export default Select;
