import React from 'react';
import './playerInfo.css'
import img from '../assets/img.png'
import Loader from "../loader/Loader";

export default function PlayerInfo({
                                       stars,
                                       loader,
                                       title,
                                       money
                                   }) {

    return (
        <div className="player-container">
            <div className="user-container">
                <div className="player-content">
                    <div className="player-title">
                        {`${title} ${stars}`}
                    </div>
                </div>

                <div className="icons">
                    <img src="img" alt=""/>
                </div>
                <div className="starsIdentity">
                    {money}
                </div>
                <div className="loadIdentity">
                    <Loader done={loader}/>
                </div>
            </div>
        </div>
    )
}