import './App.css';
import { FaHome } from 'react-icons/fa';
import Icon from './components/atoms/Icon/Icon';
import Label from './components/atoms/Label/Label';
import Card from './components/atoms/Card/Card';
import CheckBox from './components/atoms/CheckBox/CheckBox';
import ProgressBar from './components/atoms/ProgressBar/ProgressBar';

function App() {
  return (
    <main>
      <Card type={'default'}>
        <Icon icon={FaHome} type={'main-logo'} />
        <br></br>
        <Label text={'Hello World!'} type={'item'} />
        <CheckBox type={'default'}></CheckBox>
        <ProgressBar percentage={50} type={'default'}></ProgressBar>
      </Card>
    </main>
  );
}

export default App;
