import React from "react";
import headerStyle from "./Header.module.css"
import {Navigate} from "./Navigate/Navigate";
import commonStyle from "../Common/styles/styleContainer.module.css";

export const Header = () => {
    return (
        <div className={headerStyle.header}>
            <div className={`${commonStyle.container} ${headerStyle.headerContainer}`}>
                <Navigate/>
            </div>
        </div>
    );
};


