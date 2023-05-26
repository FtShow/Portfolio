import React from "react";
import myWorksStyle from "./MyWorks.module.css"
import commonStyle from "../Common/styles/styleContainer.module.css"
import {MyWork} from "./MyWork/MyWork";

export const MyWorks = () => {
    return (
        <div className={myWorksStyle.myWorks}>
            <div className={`${myWorksStyle.myWorksContainer} ${commonStyle.container}`}>
                <h2>My works</h2>
                <div className={myWorksStyle.worksContainer}>
                    <MyWork projectTitle={"Project1"} projectDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolorum explicabo incidunt, nostrum perspiciatis praesentium quis rem sunt tempora vitae."}/>
                    <MyWork projectTitle={"Project2"} projectDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolorum explicabo incidunt, nostrum perspiciatis praesentium quis rem sunt tempora vitae."}/>

                </div>
            </div>

        </div>
    );
};
