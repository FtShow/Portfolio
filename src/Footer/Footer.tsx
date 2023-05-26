import React from "react";
import footerStyle from "./Footer.module.css"
import commonStyle from "../Common/styles/styleContainer.module.css"
import {FooterIcon} from "./FooterIcon/FooterIcon";

export const Footer = () => {
    return (
        <footer className={footerStyle.footer}>
            <div className={`${footerStyle.footerContainer} ${commonStyle.container}`}>
                <span>ANATOLIY</span>
                <div className={footerStyle.iconsContainer}>
                    <FooterIcon/>
                    <FooterIcon/>
                    <FooterIcon/>
                    <FooterIcon/>
                </div>
                <span>All rights reserved</span>
            </div>
        </footer>
    );
};
