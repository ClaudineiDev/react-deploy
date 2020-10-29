import React from 'react'; //, { useState, useEffect }
import {Link} from "react-router-dom";
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import barcodeIcon from '../../assets/images/icons/barcode.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import scanIcon from '../../assets/images/icons/scan.svg'; 

import './styles.css';
import api from '../../services/api';

function Landing(){

/*     const [totalConnections, setTotalConnections] = useState(0);
    useEffect(() => {
        api.get('connections').then(response => {
            //console.log(response);
            const { total } = response.data;
            setTotalConnections(total);
        })
    }, []);  */
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sistema avançado para conferência de cargas.</h2>
                </div>
                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />
                <div className="buttons-container">

                    <Link to="/login" className="login">
                        <img src={barcodeIcon} alt="Login"/>
                        Entrar
                    </Link>

                    <Link to="inputdados" className="input-dados">
                        <img src={giveClassesIcon} alt="Dashboard"/>
                        DashBoards
                    </Link>
                </div>
                <span className="total-connections"> 
                    Total de 22 volumes planejados para carregar. 
                    <img src={scanIcon} alt="Coração roxo"/>
                </span>
            </div>

        </div>
    )
}

export default Landing;