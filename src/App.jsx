import './App.css';
import { FaHome } from 'react-icons/fa';
import Icon from './components/atoms/Icon/Icon';
import Label from './components/atoms/Label/Label';
import Card from './components/atoms/Card/Card';
import CheckBox from './components/atoms/CheckBox/CheckBox';
import ProgressBar from './components/atoms/ProgressBar/ProgressBar';
import Tabbed from './components/molecules/Tabbed/Tabbed';
import Input from './components/molecules/Input/Input';
import Button from './components/molecules/Button/Button';

function App() {
  return (
    <main>
      <Card type={'default'}>
        <Label text={'Atoms!'} type={'default-bold'} />
        <br></br>
        <br></br>
        <Label text={'Icon!'} type={'default'} />
        <br></br>
        <Icon icon={FaHome} type={'main-logo'} />
        <br></br>
        <Label text={'CheckBox!'} type={'default'} />
        <br></br>
        <CheckBox type={'default'}></CheckBox>
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
              label: "Pestaña 1",
              content: <div>Contenido de la pestaña 1</div>
            },
            {
              icon: FaHome,
              label: "Pestaña 2",
              content: <div>Contenido de la pestaña 2</div>
            },
          ]
        } />
        <Label text={'Input!'} type={'default'} />
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
      </Card>
    </main>
  );
}

export default App;
