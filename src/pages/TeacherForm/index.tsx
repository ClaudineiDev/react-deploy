import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import {Link} from "react-router-dom";
import Select from '../../components/Select';
import uploadIcon from '../../assets/images/icons/upload-icon.svg';
import api from '../../services/api';

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
        { week_day: 0, from: '', to: '' }
    ]);
    function addNewSheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
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

        api.post('classes/',{
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
            
        });
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
                        Horários disponíveis
                        <button type="button" onClick={addNewSheduleItem}>
                            + Novo horário
                        </button>
                    </legend>
                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                     <div className="data">
                                     <Input
                                        name="data-emb" 
                                        label="Data para embarque"
                                        value={scheduleItem.from}
                                        type="date"
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />
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
                                    <Textarea 
                                        name="desc" 
                                        label="Descrição"
                                        value={bio}
                                        onChange={(e) => {setBio(e.target.value)}}/>
                                    </div>
                                    <div className="up-button">
                                    <Link to="inputdados" className="input-dados">
                                        <img src={uploadIcon} alt="Upload"/>
                                    </Link>
                                    </div>
                                </div>
                        )
                    })}
                </fieldset>
                <fieldset>
                    

                </fieldset> 
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados
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