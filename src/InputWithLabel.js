import React, { useRef, useEffect } from 'react';

const InputWithLabel = (props) => {
  const { children, name, value, onChange } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input 
        type="text" 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChange} 
        ref={inputRef} 
      />
    </>
  );
};

export default InputWithLabel;
