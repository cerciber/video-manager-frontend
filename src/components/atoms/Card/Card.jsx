import React from 'react';
import './Card.css';

function Card({ children, type }) {
  return (
    <div className={`card card--${type}`}>
        {children}
    </div>
  );
}

export default Card;