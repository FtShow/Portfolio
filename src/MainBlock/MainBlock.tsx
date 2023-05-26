import React from "react";
import mainBlockStyle from "./MainBlock.module.css"
import commonStyle from "../Common/styles/styleContainer.module.css"


export const MainBlock = () => {
    return (
        <div className={mainBlockStyle.mainBlock}>
            <div className={`${commonStyle.container} ${mainBlockStyle.container}`}>
                <div className={mainBlockStyle.greetings}>
                    <span>Hi There</span>
                    <h1>ANATOLIY</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className={mainBlockStyle.photo}></div>
            </div>
        </div>
    );
};
