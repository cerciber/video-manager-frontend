import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import './Button.css';

function Button({ icon, text, type }) {
  return (
    <button className={`button button--${type}`}>
      <Icon icon={icon} type={'button'} />
      <span className="button__text">{text}</span>
    </button>
  );
}

export default Button;