import React from "react";
import "../componentStyle/ChampionNumber/ChampionNumberStyle.css";

export const ChampionNumber = (props) => {
    return (
        <div className="champion-number">
            #001
            {props.idNumber}
        </div>
    );
};
