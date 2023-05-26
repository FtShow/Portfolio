import React from "react";
import workSearchingStyle from "./WorkSearching.module.css"
import commonStyle from "../Common/styles/styleContainer.module.css";

export const WorkSearching = () => {
    return (
        <div className={workSearchingStyle.WorkSearching}>
            <div className={`${commonStyle.container} ${workSearchingStyle.WorkSearchingContainer}`}>
                <h2>looking for a job</h2>
                <button>hire me</button>
            </div>
        </div>
    );
};
