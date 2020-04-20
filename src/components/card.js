import React from "react";
import CardStyle from "./styles/cards.module.scss"
import Loupe from "../../assets/loupe-terradia.svg"
import Commande from "../../assets/commande-terradia.svg"
import Consomme from "../../assets/consomme-terradia.svg"
import Parle from "../../assets/parlesen-terradia.svg"
import AOS from "aos";
import 'aos/dist/aos.css'

const CardInfo = () => {
    AOS.init();
  return (
      <div className={CardStyle.container} >
        <div className={CardStyle.cardsContainer}>
            <div className={CardStyle.topCards}>
            <div className={CardStyle.card} data-aos="flip-up" data-aos-duration="2000">
                <Loupe className={CardStyle.img}/>
                <h1 className={CardStyle.cardTitle}>Découvre</h1>
                <p className={CardStyle.explain}>Terradia te permet de découvrir les producteurs locaux qui se trouvent juste à côté de chez toi!</p>
            </div>
            <div className={CardStyle.card} data-aos="flip-up" data-aos-duration="2000">
                <Commande className={CardStyle.img}/>
                <h1 className={CardStyle.cardTitle}>Commande</h1>
                <p className={CardStyle.explain}>Sur Terradia, tu commandes les produits locaux de ton choix en quelques clics!</p>

            </div>
            </div>
            <div className={CardStyle.topCards}>
                <div className={CardStyle.card} data-aos="flip-up" data-aos-duration="2000">
                    <Consomme className={CardStyle.img}/>
                    <h1 className={CardStyle.cardTitle}>Consomme</h1>
                    <p className={CardStyle.explain}>Avec la livraison Terradia dans les heures qui suivent ta commande, tu consommes des produits ultra frais!</p>
                </div>
                <div className={CardStyle.card} data-aos="flip-up" data-aos-duration="2000">
                    <Parle className={CardStyle.img}/>
                    <h1 className={CardStyle.cardTitle}>Parles-en</h1>
                    <p className={CardStyle.explain}>Parce que notre objectif est de faire redécouvrir le terroire, parles de tes producteurs préférés autour de toi!</p>
                </div>
            </div>
        </div>
          <div className={CardStyle.rightContainer} data-aos="slide-left" data-aos-duration="2000">
              <p className={CardStyle.question}>ENVIE DE CONSOMMER LOCAL?</p>
              <h1 className={CardStyle.discover}>Découvre de nouveaux producteurs!</h1>
              <p className={CardStyle.carto}>Terradia offre une cartographie des producteurs aux alentours.<br/>Découvre leurs produits, leurs spécialités et<br/>mêmes leurs horaires d'ouverture.</p>
          </div>
      </div>
  )
};

export default CardInfo
