import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import './Input.css';

function Input({ icon, placeholder, type }) {
  return (
    <div className={`input input--${type}`}>
      <Icon icon={icon} type={'input'} />
      <div className="input__separator" />
      <input placeholder={placeholder}/>
    </div>
  );
}

export default Input;