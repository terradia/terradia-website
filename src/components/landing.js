import React from "react";
import LandingStyle from './styles/landing.module.scss';
//import {Link} from "gatsby";

import AppIphone from "../../assets/iphone-app.svg"
import AppStore from "../images/store-apple.png"
import GoogleStore from "../images/store-google.png"

const Landing = () => {
    return (
        <div className={LandingStyle.container}>
            <div className={LandingStyle.leftSection}>
                <h1>L'application qui facilite<br/>l'accès aux produits<br/>locaux.</h1>
                <div className={LandingStyle.stores}>
                    <img src={AppStore} className={LandingStyle.storeImg}/>
                    <img src={GoogleStore} className={LandingStyle.storeImg}/>
                </div>
                <h2>Parce que nous ne sommes jamais assez<br/>proche de notre terroire.</h2>
            </div>
            <div className={LandingStyle.rightSection}>
                <AppIphone id={3}/>
            </div>
        </div>
    )
};


export default Landing
