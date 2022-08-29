import React from 'react';
import './tournamentProvider.css'
import TournamentItem from "../tourtaimentItem/Tourtaimentitem";
import Spinner from "../spinner/Spinner";
import PlayerInfo from "../playerInfo/PlayerInfo";
import Loader from "../loader/Loader";
import data from "../assets/data.json"


const TournamentProvider = () => {
    return (
        <div className="wrapper">
            <h1 className="title">Poker</h1>
            <Spinner/>
           <div className="wr1">
               {data.map(item => (
               <PlayerInfo
                   id={item.id}
                   money={item.money}
                   imageUrl={item.imageUrl}
                   key={item.id}
                   stars={item.stars}
                   title={item.title}
                   loader={item.loader}
               />
               ))}
           </div>

            <Loader/>
            <TournamentItem/>

        </div>

    );
};

export default TournamentProvider;