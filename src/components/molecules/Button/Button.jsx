import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import Label from '../../atoms/Label/Label';
import './Button.css';

function Button({ icon, text, type, bold }) {
  return (
    <button className={`button button--${type}`}>
      {icon && <Icon icon={icon} type={type === 'item' ? 'item' : (type === 'transparent' ? 'item' : 'button')} />}
      {text && <span className={`button__text ${!icon && 'button__text--noicon'}`}>{
        <Label text={text} type={bold ? (type === 'dark-round' ? 'short-bold' : 'default-bold') : (type === 'dark-round' ? 'short' : 'default')} />
      }</span>}
    </button>
  );
}

export default Button;