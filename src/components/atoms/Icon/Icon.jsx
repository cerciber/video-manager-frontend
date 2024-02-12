import React from 'react';
import './Icon.css';

function Icon({ icon: IconComponent, type }) {
  return (
    <IconComponent className={`icon icon--${type}`}/>
  );
}

export default Icon;