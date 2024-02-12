import React from 'react';
import './Label.css';

function Label({ text, type }) {
  return (
    <label className={`label label--${type}`}>{text}</label>
  );
}

export default Label;