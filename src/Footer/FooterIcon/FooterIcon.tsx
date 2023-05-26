import React from "react";
import s from "./FooterIcon.module.css"

type FooterIconType = {
    image?: string
}

export const FooterIcon:React.FC<FooterIconType> = ({image}) => {
    return (
        <div className={s.iconContainer}>
            <img src={image} alt="icon"/>
        </div>
    );
};
