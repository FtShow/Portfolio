import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Header} from "./Header/Header";
import {MainBlock} from "./MainBlock/MainBlock";
import {SkillsBlock} from "./Skills/SkillsBlock";
import {MyWorks} from "./MyWorks/MyWorks";
import {WorkSearching} from "./WorkSearching/WorkSearching";
import {Contacts} from "./Сontacts/Contacts";
import {Footer} from "./Footer/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <MainBlock/>
            <SkillsBlock/>1
            <MyWorks/>
            <WorkSearching/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;
