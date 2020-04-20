import React from "react";
import RectangleStyle from "./styles/rectangle.module.scss"
import Divider from "../../assets/divider.svg"

const Rectangle = () => {
    return (
        <div className={RectangleStyle.rectangle}>
            <h1 className={RectangleStyle.bottomPhrase} data-aos="slide-left" data-aos-duration="2000">Terradia te permet de<br/>consommer local sans le<br/>moindre effort.</h1>
            <Divider className={RectangleStyle.divider}/>
        </div>
    )
}


export default Rectangle
