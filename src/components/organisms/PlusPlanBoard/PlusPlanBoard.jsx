import React from 'react';
import Label from '../../atoms/Label/Label';
import Card from '../../atoms/Card/Card';
import ProgressInformation from '../../molecules/ProgressInformation/ProgressInformation';
import Button from '../../molecules/Button/Button';
import './PlusPlanBoard.css';

function PlusPlanBoard({ type }) {
  return (
    <div className={`plus-plan-board plus-plan-board--${type}`}>
        <Card type={'board'}>
            <Label text={'Mi plan - Plus'} type={'default-bold'} />
            <br></br>
            <Label text={'El uso se renueva el: 3-may-23'} type={'default-italic'} />
            <br></br>
            <br></br>
            <ProgressInformation message={'Almacenamiento'} currentValue={23.5} totalValue={100} unit={'GB'} type={'default'}></ProgressInformation>
            <ProgressInformation message={'Banda mensual'} currentValue={3.4} totalValue={5} unit={'TB'} type={'default'}></ProgressInformation>
            <br></br>
            <Button text={'Adminsitrar Plan'} type={'dark-round'} />
        </Card>
    </div>
    
  );
}

export default PlusPlanBoard;