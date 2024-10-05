import React from 'react';
import './Button.css';

function Button({ label, onClick, color = 'blue', size = 'medium' }) {
  return (
    <button className={`btn btn-${color} btn-${size}`} onClick={onClick}>
      {label}
    </button>
  );
}
export default Button;
