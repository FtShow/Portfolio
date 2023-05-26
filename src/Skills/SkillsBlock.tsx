import React from "react";
import styleSkills from "./Skills.module.css"
import commonStyles from "../Common/styles/styleContainer.module.css"
import {Skill} from "./Skill/Skill";

export const SkillsBlock = () => {
    return (
        <div className={styleSkills.skillsBlock}>
            <div className={`${commonStyles.container} ${styleSkills.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={styleSkills.skills}>
                    <Skill title={'123'} description={"Lorem ipsum dolor sit am ipsum dolor sit amet, consectetur adipis ipsum dolor sit amet, consectetur adipis ipsum dolor sit amet, consectetur adipis consectetur adipisicing elit. Amet, quas?"}/>
                    <Skill title={'123'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quas?"}/>
                    <Skill title={'123'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quas?"}/>
                </div>

            </div>
        </div>
    );
};
