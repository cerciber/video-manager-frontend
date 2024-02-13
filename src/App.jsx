import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './components/pages/Home/Home';
import FolderDescription from './components/pages/FolderDescription/FolderDescription';
import AtomicDesignStructuring from './components/pages/AtomicDesignStructuring/AtomicDesignStructuring';
import MainTemplate from './components/templates/MainTemplate/MainTemplate';

function App() {
  return (
    <main>
      <MainTemplate type={'default'} >
        <Routes>
            <Route path="/home" element={ <Home /> } />
            <Route path="/folder-description" element={ <FolderDescription /> } />
            <Route path="/atomic-design-structuring" element={ <AtomicDesignStructuring /> } />
            <Route path="*" element={<Navigate replace to="/home"/>} />
        </Routes>
      </MainTemplate>
    </main>
  );
}

export default App;
