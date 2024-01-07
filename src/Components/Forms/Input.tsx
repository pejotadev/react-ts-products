import React from 'react';

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  labelId: string;
};

const Input = ({ label, labelId, ...props }: InputProps) => {
  return (
    <>
      <label style={labelStyle} htmlFor={labelId}>{label}</label>
      <input 
        style={inputStyle}
        id={labelId} 
        name={labelId} 
        type="text" 
        {...props}
      />
    </>
  );
};

export default Input;