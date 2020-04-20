import React from 'react';
import FooterStyle from './styles/footer.module.scss';
import { Link } from 'gatsby';
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'

const Footer = () => {
    return(
        <section className={FooterStyle.container}>
        <div className={FooterStyle.wave}>
            <div className={FooterStyle.infos}>
                <span>Rejoins-nous sur les réseaux sociaux.</span>
                <div className={FooterStyle.social}>
                    <div>
                    <a href="https://www.facebook.com/TerradiaApp" target="_blank">
                        <Facebook className={FooterStyle.img}/>
                    </a>
                    </div>
                    <div>
                    <a href="https://www.instagram.com/terradiaapp/" target="_blank">
                <Instagram className={FooterStyle.img}/>
                    </a>
                    </div>
                </div>
                <br/>
                <a href="mailto:contact@terradia.eu?Subject=Contactez-nous" className={FooterStyle.mailto}>contact@terradia.eu</a>
                <span>© Terradia 2020</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="url(#colorlinear)" fill-opacity="1" d="M0,160L30,138.7C60,117,120,75,180,96C240,117,300,203,360,224C420,245,480,203,540,170.7C600,139,660,117,720,106.7C780,96,840,96,900,85.3C960,75,1020,53,1080,74.7C1140,96,1200,160,1260,181.3C1320,203,1380,181,1410,170.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                <defs>
                    <linearGradient id="colorlinear" x1="1440" y1="255" x2="2.29027e-05" y2="255" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8EDD3D"/>
                        <stop offset="1" stop-color="#5DC14A"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        </section>
    )
}

export default Footer
