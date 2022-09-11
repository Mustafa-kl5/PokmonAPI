import React from "react";
import "../pageStyle/mainpage.css";
import { HeaderBar } from "../sharedComponent/HeaderBar";
import { ChampionName } from "../sharedComponent/ChampionName";
import { ChampionNumber } from "../sharedComponent/ChampionNumber";
import { PokmonCard } from "../sharedComponent/PokmonCard";

export const MainPage = () => {
    return (
        <>
            <div className="hole-Holder">
                <HeaderBar />
                <ChampionName />
                <div className="middle-section">
                    <ChampionNumber />
                    <PokmonCard />
                </div>
            </div>
        </>
    );
};
