import React from 'react';
import Label from '../../atoms/Label/Label';
import Button from '../../molecules/Button/Button';
import { FaArrowLeft } from "react-icons/fa6";
import './Back.css';

function Back({ path, name, type, onClick }) {
  return (
    <div className={`back back--${type}`}>
        <Button icon={FaArrowLeft} type={'back'} onClick={onClick} />
        <div className='back__space1'></div>
        <Label text={path} type={'default'} />
        <Label text={'/'} type={'default'} />
        <Label text={name} type={'default-bold'} />
    </div>
  );
}

export default Back;