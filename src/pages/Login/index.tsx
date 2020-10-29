import React, { useState, FormEvent } from 'react';

import {Link} from "react-router-dom";
import Input from '../../components/Input';
import api from '../../services/api';
import './styles.css'
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

/* import barcodeIcon from '../../assets/images/icons/barcode.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import scanIcon from '../../assets/images/icons/scan.svg';  */

function Login(){
    
    return(
        
        <div id="login" className="container">
            <PageHeader>
            <div className="logo-container">    
                <img src={logoImg} alt="Conffer" />
                <h2>Bem Vindo! <br/>Faça o login para acessar o Sistema</h2>
            </div>
            </PageHeader>
            <div className="container2">    
                
                <div className="login-zone-container">                    
                    <form id="zone-users" >
                    <Select 
                        name="type_user" 
                        value=""
                        onChange={(e) => {}}
                        label="Tipo de Usuário"
                        options={[
                            { value: 'adminCpd', label: 'Admin CPD' },
                            { value: 'adminTrp', label: 'Admin Transporte' },
                            { value: 'relatorios', label: 'Relatórios' },
                            { value: 'super', label: 'Super User' },

                        ]} />
                    
                    <Input 
                        type="text" 
                        name="user_name" 
                        value="usuario"
                        onChange={(e) => {}}
                        label="Usuário" />
                    <Input 
                        type="password" 
                        name="password" 
                        value="password"
                        onChange={(e) => {}}
                        label="Senha" />
                    <Link to="/" className="esqueceu">Esqueceu a senha&#63;</Link>
                    <Link to="" className="entrar">Entrar</Link>
                    </form>
                    
                </div>
      
                        
                    
            </div>
            
        </div>
        
    )
}

export default Login;