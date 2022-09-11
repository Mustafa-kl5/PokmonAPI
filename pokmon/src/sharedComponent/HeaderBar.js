import React from "react";
import "../componentStyle/HeaderStyle/header.css";
import Arrow from "../Image/down-arrow.png";

export const HeaderBar = () => {
    return (
        <div className="nav-holder">
            <div>
                <input className="search-section" placeholder="Search" />
            </div>
            <div className="filter-section">
                Filter
                <img src={Arrow} className="down-arrow" />
            </div>
        </div>
    );
};
