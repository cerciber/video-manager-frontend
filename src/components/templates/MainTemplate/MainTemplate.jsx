import React from 'react';
import Card from '../../atoms/Card/Card';
import './MainTemplate.css';

function MainTemplate({ leftContent, rightContent, type }) {
  return (
    <div className={`main-template main-template--${type}`}>
      <Card type={'left'}>{leftContent}</Card>
      <Card type={'right'}>{rightContent}</Card>
    </div>
  );
}

export default MainTemplate;