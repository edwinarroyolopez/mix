import React from 'react';

const Input = ({ handleChange, name,label, ...props }) => {
  return (
    <div className="TextInput">
      <input
        type="text"
        name={name}
        tabIndex="1"
        onChange={text =>{
          handleChange(text, name);
        }}
        />
      <label className="pop-label" htmlFor={name}>{label}</label>
    </div>
  );
}

export default Input;
