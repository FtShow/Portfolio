import React from "react";
import myWorkStyle from "./MyWork.module.css"

type MyWorkType = {
    projectTitle: string,
    projectDescription: string
}

export const MyWork: React.FC<MyWorkType> = ({projectTitle, projectDescription}) => {
    return (
        <div className={myWorkStyle.container}>
            <div className={myWorkStyle.imageContainer}>
                <button>VIEW</button>
            </div>
            <h3>{projectTitle}</h3>
            <div className={myWorkStyle.spanWrapper}>
                <span>{projectDescription}</span>
            </div>

        </div>
    );
};
