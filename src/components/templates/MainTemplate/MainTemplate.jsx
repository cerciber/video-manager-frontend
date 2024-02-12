import React from 'react';
import { FaHome } from 'react-icons/fa';
import Card from '../../atoms/Card/Card';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../molecules/Button/Button';
import PlusPlanBoard from '../../organisms/PlusPlanBoard/PlusPlanBoard';
import './MainTemplate.css';

function MainTemplate({ children, type }) {
  return (
    <div className={`main-template main-template--${type}`}>
      <Card type={'left'}>
        <div className={`main-template__left`}>
            <div className={`main-template__left__space1`}></div>
            <Icon icon={FaHome} type={'main-logo'} />
            <div className={`main-template__left__space1`}></div>
            <Button icon={FaHome} text={'Dashboard'} type={'item'} bold={true} />
            <div className={`main-template__left__space2`}></div>
            <Button icon={FaHome} text={'Videos'} type={'item'} />
            <div className={`main-template__left__space2`}></div>
            <Button icon={FaHome} text={'Player'} type={'item'} />
            <div className={`main-template__left__space2`}></div>
            <Button icon={FaHome} text={'Analytics'} type={'item'} />
            <div className={`main-template__left__space2`}></div>
            <Button icon={FaHome} text={'Configuraciones'} type={'item'} />
            <div className={`main-template__left__space1`}></div>
            <div className={`main-template__left__space1`}></div>
            <PlusPlanBoard type={'default'} ></PlusPlanBoard>
        </div>
      </Card>
      <Card type={'right'}>{children}</Card>
    </div>
  );
}

export default MainTemplate;