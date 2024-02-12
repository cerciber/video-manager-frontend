import './App.css';
import { FaHome } from 'react-icons/fa';
import Icon from './components/atoms/Icon/Icon';
import Label from './components/atoms/Label/Label';
import Card from './components/atoms/Card/Card';
import CheckBox from './components/atoms/CheckBox/CheckBox';

function App() {
  return (
    <main>
      <Card type={'default'}>
        <Icon icon={FaHome} type={'main-logo'} />
        <br></br>
        <Label text={'Hello World!'} type={'item'} />
        <br></br>
        <CheckBox type={'default'}></CheckBox>
      </Card>
    </main>
  );
}

export default App;
