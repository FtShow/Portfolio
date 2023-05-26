import React from "react";
import styleSkill from "./Skill.module.css"

type SkillType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillType> = ({title, description}) => {
    return (
        <div className={styleSkill.skill}>
            <div className={styleSkill.icon}></div>
            <h3>{title}</h3>
            <div className={styleSkill.spanWrapper} >
                <span className={styleSkill.description}>
                {description}
            </span>
            </div>
        </div>
    );
};
