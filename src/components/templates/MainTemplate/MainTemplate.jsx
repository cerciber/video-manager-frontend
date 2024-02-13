import React from 'react';
import { FaViadeoSquare } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa6";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
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
          <div className='main-template__left__button'>
            <Button icon={IoIosArrowBack} type={'transparent'} bold={true} />
          </div>
          <Icon icon={FaViadeoSquare} type={'main-logo'} />
          <div className={`main-template__left__space1`}></div>
          <Button icon={MdOutlineDashboard} text={'Dashboard'} type={'item'} bold={true} />
          <div className={`main-template__left__space2`}></div>
          <Button icon={FaRegFolder} text={'Videos'} type={'item'} />
          <div className={`main-template__left__space2`}></div>
          <Button icon={AiOutlinePlayCircle} text={'Player'} type={'item'} />
          <div className={`main-template__left__space2`}></div>
          <Button icon={IoBarChartOutline} text={'Analytics'} type={'item'} />
          <div className={`main-template__left__space2`}></div>
          <Button icon={IoSettingsOutline} text={'Configuraciones'} type={'item'} />
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