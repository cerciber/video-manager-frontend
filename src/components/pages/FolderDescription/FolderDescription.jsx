import React from 'react';
import  { FaRegFolder } from "react-icons/fa6";
import Label from '../../atoms/Label/Label';
import CheckBoxIconInformation from '../../molecules/CheckBoxIconInformation/CheckBoxIconInformation';
import Back from '../../molecules/Back/Back';
import Table from '../../organisms/Table/Table';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import './FolderDescription.css'

function FolderDescription() {
  return (
    <MainTemplate type={'default'} >
      <div className='folder-description__container'>
        <div className='folder-description__layer'>
          <div className={`folder-description__space1`}></div>
          <Table headers={[
            { field: 'name', component: <CheckBoxIconInformation text={'Nombre'} type={'default-bold'}></CheckBoxIconInformation>, flexGrow: 4 },
            { field: 'size', component: <Label text="Videos" type={'default-bold'} />, center: true},
            { field: 'duration', component: <Label text="Tamaño" type={'default-bold'} />, center: true},
            { field: 'lastModification', component: <Label text="Última modificación" type={'default-bold'} />, center: true},
          ]} data={[
            { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Entrenamiento.mp4'} type={'default'}></CheckBoxIconInformation>, size: <Label text='7.3 GB' />, duration: <Label text='04:11:37' />, lastModification: <Label text='30/may/2023' /> },
            { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Salida-al-mercado-versión nueva.mp4'} type={'default'}></CheckBoxIconInformation>, size: <Label text='1.4 GB' />, duration: <Label text='47:55' />, lastModification: <Label text='22/jun/2022' /> },
            { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Como-cerrar-una-venta.mp4'} type={'default'}></CheckBoxIconInformation>, size: <Label text='284 MB' />, duration: <Label text='10:12' />, lastModification: <Label text='11/sep/2021' /> },
            { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Crea-un-ticket-valioso.mp4'} type={'default'}></CheckBoxIconInformation>, size: <Label text='4.3 GB' />, duration: <Label text='03:50:22' />, lastModification: <Label text='21/jun/2023' /> },
            { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Conquista-el-mercado-digital.mp4'} type={'default'}></CheckBoxIconInformation>, size: <Label text='500 MB' />, duration: <Label text='5:00' />, lastModification: <Label text='5/abr/2023' /> },
            { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Entrenamiento.mp4'} type={'default'}></CheckBoxIconInformation>, size: <Label text='7.3 GB' />, duration: <Label text='04:11:37' />, lastModification: <Label text='30/may/2023' /> },
            { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Salida-al-mercado-versión nueva.mp4'} type={'default'}></CheckBoxIconInformation>, size: <Label text='1.4 GB' />, duration: <Label text='47:55' />, lastModification: <Label text='22/jun/2022' /> },
            { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Como-cerrar-una-venta.mp4'} type={'default'}></CheckBoxIconInformation>, size: <Label text='284 MB' />, duration: <Label text='10:12' />, lastModification: <Label text='11/sep/2021' /> },
            { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Crea-un-ticket-valioso.mp4'} type={'default'}></CheckBoxIconInformation>, size: <Label text='4.3 GB' />, duration: <Label text='03:50:22' />, lastModification: <Label text='21/jun/2023' /> },
            { name: <CheckBoxIconInformation icon={FaRegFolder} text={'Conquista-el-mercado-digital.mp4'} type={'default'}></CheckBoxIconInformation>, size: <Label text='500 MB' />, duration: <Label text='5:00' />, lastModification: <Label text='5/abr/2023' /> },
          ]} />
        </div>
        <div className='folder-description__layer folder-description__back-layer'>
          <Back path={'Path'} name={'Name'} type={'default'}></Back>
        </div>
      </div>
        
    </MainTemplate>
  );
}

export default FolderDescription;