import React from "react";
import style from "./Navigate.module.css"

export const Navigate = () => {
    return (
        <div className={style.navigator}>
            <a href="">Главная</a>
            <a href="">Навыки</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
};
