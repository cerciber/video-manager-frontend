import React from 'react';
import { VscLibrary } from "react-icons/vsc";
import { BsTrash3 } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa6";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import Label from '../../atoms/Label/Label';
import Tabbed from '../../molecules/Tabbed/Tabbed';
import Input from '../../molecules/Input/Input';
import Button from '../../molecules/Button/Button';
import CheckBoxIconInformation from '../../molecules/CheckBoxIconInformation/CheckBoxIconInformation';
import Table from '../../organisms/Table/Table';
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/folder-description');
  };

  return (
      <div className='home__container'>
        <div className='home__layer'>
          <Tabbed tabs={
            [
              {
                icon: VscLibrary,
                label: "Biblioteca",
                content: 
                <div>
                  <div className={`home__space1`}></div>
                  <Input icon={IoSearch} placeholder={'Buscar video'} type={'default'} />
                  <div className={`home__space2`}></div>
                  <Table headers={[
                    { field: 'name', component: <CheckBoxIconInformation text={'Nombre'} type={'default-bold'}></CheckBoxIconInformation>, flexGrow: 4 },
                    { field: 'videos', component: <Label text="Videos" type={'default-bold'} />, center: true},
                    { field: 'size', component: <Label text="Tamaño" type={'default-bold'} />, center: true},
                    { field: 'lastModification', component: <Label text="Última modificación" type={'default-bold'} />, center: true},
                  ]} data={[
                    { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Afiliado Master'} type={'default'}></CheckBoxIconInformation> , videos: <Label text='8' />, size: <Label text='7.3 GB' />, lastModification: <Label text='30/may/2023' /> },
                    { name: <CheckBoxIconInformation icon={FaRegFolder} text={'BeMaster'} type={'default'}></CheckBoxIconInformation> , videos: <Label text='21' />, size: <Label text='1.4 GB' />, lastModification: <Label text='30/may/2023' /> },
                    { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Comizzión'} type={'default'}></CheckBoxIconInformation> , videos: <Label text='10' />, size: <Label text='284 MB' />, lastModification: <Label text='30/may/2023' /> },
                    { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Creador de contenido'} type={'default'}></CheckBoxIconInformation> , videos: <Label text='2' />, size: <Label text='4.3 GB' />, lastModification: <Label text='30/may/2023' /> },
                    { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Exportados Wil'} type={'default'}></CheckBoxIconInformation> , videos: <Label text='14' />, size: <Label text='500 MB' />, lastModification: <Label text='30/may/2023' /> },
                    { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Afiliado Master'} type={'default'}></CheckBoxIconInformation> , videos: <Label text='6' />, size: <Label text='7.3 GB' />, lastModification: <Label text='30/may/2023' /> },
                    { name: <CheckBoxIconInformation icon={FaRegFolder} text={'BeMaster'} type={'default'}></CheckBoxIconInformation> , videos: <Label text='30' />, size: <Label text='1.4 GB' />, lastModification: <Label text='30/may/2023' /> },
                    { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Comizzión'} type={'default'}></CheckBoxIconInformation> , videos: <Label text='2' />, size: <Label text='284 MB' />, lastModification: <Label text='30/may/2023' /> },
                    { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Creador de contenido'} type={'default'}></CheckBoxIconInformation> , videos: <Label text='8' />, size: <Label text='4.3 GB' />, lastModification: <Label text='30/may/2023' /> },
                    { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Exportados Wil'} type={'default'}></CheckBoxIconInformation> , videos: <Label text='14' />, size: <Label text='500 MB' />, lastModification: <Label text='30/may/2023' /> },
                  ]} onClickRow={handleRowClick} />
                </div>
              },
              {
                icon: BsTrash3,
                label: "Papelera",
                content: <div></div>
              },
            ]
          } />
        </div>
        <div className='home__layer'>
          <div className='home__float-buttons'>
            <Button icon={FaRegFolder} text={'Nueva carpeta'} type={'light'} />
            <Button icon={AiOutlinePlayCircle} text={'Nuevo video'} type={'dark'} />
          </div>
        </div>
      </div>
  );
}

export default Home;