import React from 'react';

const Button = ({ onClick, name, ...props }) => {
    return (
      <div className="button" onClick={onClick} {...props} >{name}</div>
    );
}

export default Button;
