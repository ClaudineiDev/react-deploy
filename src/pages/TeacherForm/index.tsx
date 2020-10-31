import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import {Link} from "react-router-dom";

import uploadIcon from '../../assets/images/icons/upload-icon.svg';
import iconCSV from '../../assets/images/icons/icon-csv.svg';
import iconDown from '../../assets/images/icons/icon-download.svg';
import api from '../../services/api';

import axios from 'axios';

import './styles.css';


function TeacherForm(){
    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [scheduleItems, setScheduleItems] = useState([
        { dataEmb: 0, from: '', to: '', desc: '' }
    ]);
    const [uploadItem, setUploadItem] = useState([
        { dataEmb: 0, from: '', to: '', desc: '' }
    ]);
    function addNewSheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { dataEmb: 0, from: '', to: '', desc: '' }
        ]);
    }

 
    function setScheduleItemValue(position: number, field: string, value: string){
        const updateScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return {...scheduleItem, [field]: value};
            }
            return scheduleItem;
        })
        setScheduleItems(updateScheduleItem);
    }
    function handleCreateClass(e: FormEvent){
        e.preventDefault();
        axios.post('../../services/subscribe', { name });
/*         api.post('classes/',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!');
        })
        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
            
        }); */
    }
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title= "Carregamento de NF's para o transporte"
            description="O primeiro passo é subir o arquivo CSV"
            ></PageHeader>
            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>
                        Carregamento
{/*                         <button type="button" onClick={addNewSheduleItem}>
                            + Uploads
                        </button> */}
                    </legend>
                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                                <div key={scheduleItem.dataEmb} className="schedule-item">
                                     <div className="data">
                                     <Input
                                        name="data-emb" 
                                        label="Data para embarque"
                                        value={scheduleItem.dataEmb}
                                        type="date"
                                        onChange={e => setScheduleItemValue(index, 'dataEmb', e.target.value)} />
                                    </div>
                                    <div className="from">
                                    <Input 
                                        name="from" 
                                        label="Das"
                                        value={scheduleItem.from}
                                        type="time"
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />
                                    </div>
                                    <div className="to">
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        value={scheduleItem.to}
                                        type="time"
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
                                    </div>
                                    <div className="area">
                                    <Input
                                        name="desc" 
                                        label="Descrição"
                                        value={scheduleItem.desc}
                                        type="text"
                                        onChange={(e) => {setScheduleItemValue(index, 'desc', e.target.value)}}/>
                                    </div>
                                    <div className="up-button">
                                    <Link to='' className="input-dados">
                                        <img src={uploadIcon} alt="Upload"/>
                                    </Link>
                                    </div>
                                </div>
                        )
                    })}
                </fieldset>
                <fieldset>
                    <legend>
                        Uploads
                        <Input 
                            name="to" 
                            label="Filtrar uploads por data" 
                            value={name}
                            type="date"
                            onChange={(e) => {setName(e.target.value)}}/>
                        
                    </legend>
                    <div key='' className="field-header">
                            <div className="icon-file-header">
                                <label>Icon</label>
                            </div> 
                            <div className="desc-header">
                                <label>Descrição</label>
                            </div> 
                            <div className="emb-header">
                                <label>Embarque</label>
                            </div>
                            <div className="up-header">
                                <label>Upload</label>
                            </div>   
                            <div className="user-header">
                                <label>Usuário</label>
                            </div>   
                            <div className="icon-dow-header">
                                <label>Download</label>
                            </div>  
                    </div>
                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                                <div key='' className="upload-item">
                                    <div className="icon-file-header">
                                    <Link to='' className="input-dados">
                                        <img src={iconCSV} alt="Upload"/>
                                    </Link>
                                    </div> 
                                    <div className="desc-header">
                                        <label>1 Onda Cliente P</label>
                                    </div> 
                                    <div className="emb-header">
                                        <label>10/10/2020</label>
                                    </div>
                                    <div className="up-header">
                                        <label>11/10/2020</label>
                                    </div>   
                                    <div className="user-header">
                                        <label>José Santos</label>
                                    </div>   
                                    <div className="icon-dow-header">
                                    <Link to='' className="input-dados">
                                        <img src={iconDown} alt="Upload"/>
                                    </Link>
                                    </div> 
                                </div>
                        )
                    })}
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Mostrar Uploads do dia
                    </p>
                    <button type="submit">
                        Salvar cadastro
                    </button> 
                </footer>
                </form>
            </main>
        </div>
    )
}
export default TeacherForm;