import React from 'react';
import { FaHome } from 'react-icons/fa';
import Icon from '../../atoms/Icon/Icon';
import Label from '../../atoms/Label/Label';
import Card from '../..//atoms/Card/Card';
import CheckBox from '../../atoms/CheckBox/CheckBox';
import ProgressBar from '../..//atoms/ProgressBar/ProgressBar';
import Tabbed from '../../molecules/Tabbed/Tabbed';
import Input from '../../molecules/Input/Input';
import Button from '../../molecules/Button/Button';
import CheckBoxIconInformation from '../../molecules/CheckBoxIconInformation/CheckBoxIconInformation';
import ProgressInformation from '../../molecules/ProgressInformation/ProgressInformation';
import Table from '../../organisms/Table/Table';
import PlusPlanBoard from '../../organisms/PlusPlanBoard/PlusPlanBoard';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Back from '../../molecules/Back/Back';

function AtomicDesignStructuring() {
  return (
    <React.Fragment>
        <br></br>
      <br></br>
      <Card type={'default'}>
        <Label text={'Atoms!'} type={'default-bold'} />
        <br></br>
        <br></br>
        <Label text={'Label!'} type={'default'} />
        <br></br>
        <Label text={'Text 1'} type={'default'} />
        <br></br>
        <Label text={'Text 2'} type={'default-bold'} />
        <br></br>
        <br></br>
        <Label text={'Icon!'} type={'default'} />
        <br></br>
        <Icon icon={FaHome} type={'main-logo'} />
        <br></br>
        <Label text={'CheckBox!'} type={'default'} />
        <br></br>
        <CheckBox type={'default'}></CheckBox>
        <br></br>
        <Label text={'ProgressBar!'} type={'default'} />
        <br></br>
        <ProgressBar percentage={50} type={'default'}></ProgressBar>
      </Card>
      <br></br>
      <Card type={'default'}>
        <Label text={'Molecules!'} type={'default-bold'} />
        <br></br>
        <br></br>
        <Label text={'Tabbed!'} type={'default'} />
        <Tabbed tabs={
          [
            {
              icon: FaHome,
              label: "Tab 1",
              content: <div>Tab content 1</div>
            },
            {
              icon: FaHome,
              label: "Tab 2",
              content: <div>Tab content 2</div>
            },
          ]
        } />
        <Label text={'Input!'} type={'default'} />
        <br></br>
        <br></br>
        <Input icon={FaHome} placeholder={'Insert your text'} type={'default'} />
        <br></br>
        <br></br>
        <Label text={'Button!'} type={'default'} />
        <br></br>
        <br></br>
        <Button icon={FaHome} text={'Click here!'} type={'light'} />
        <br></br>
        <br></br>
        <Button icon={FaHome} text={'Click here!'} type={'dark'} />
        <br></br>
        <br></br>
        <Label text={'ProgressInformation!'} type={'default'} />
        <br></br>
        <br></br>
        <ProgressInformation message={'Text'} currentValue={23.5} totalValue={100} unit={'GB'} type={'default'}></ProgressInformation>
        <Label text={'Back!'} type={'default'} />
        <br></br>
        <br></br>
        <Back path={'Path'} name={'Name'} type={'default'}></Back>
      </Card>
      <br></br>
      <Card type={'default'}>
        <Label text={'Organisms!'} type={'default-bold'} />
        <br></br>
        <br></br>
        <Label text={'Table!'} type={'default'} />
        <br></br>
        <Table headers={[
            { field: 'checkbox', component: <CheckBoxIconInformation text={'Name'} type={'default-bold'}></CheckBoxIconInformation>, flexGrow: 3 },
            { field: 'age', component: <Label text="Age" type={'default-bold'} />, center: true},
            { field: 'email', component: <Label text="Email" type={'default-bold'} />, center: true},
          ]} data={[
            { checkbox: <CheckBoxIconInformation icon={FaHome} text={'Jhon'} type={'default'}></CheckBoxIconInformation> , name: <Label text='John Doe' />, age: <Label text='30' />, email: <Label text='john@example.com' /> },
            { checkbox: <CheckBoxIconInformation icon={FaHome} text={'Jane'} type={'default'}></CheckBoxIconInformation> , name: <Label text='Jane Smith' />, age: <Label text='25' />, email: <Label text='jane@example.com' /> },
          ]} />
        <br></br>
        <Label text={'PlusPlanBoard!'} type={'default'} />
        <br></br>
        <br></br>
        <PlusPlanBoard type={'default'} ></PlusPlanBoard>
        <br></br>
      </Card>
      <br></br>
      <div>
        <Label text={'Main Template!'} type={'default-bold'} />
        <br></br>
        <br></br>
        <br></br>
      </div>
      <MainTemplate type={'default'} >
        <Label text="Content" type={'default-bold'} />
      </MainTemplate>
    </React.Fragment>
  );
}

export default AtomicDesignStructuring;