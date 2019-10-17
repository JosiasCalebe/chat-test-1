import React from 'react';

import closeIcon from '../../../icons/closeIcon.png';
import onlineIcon from '../../../icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({room}) => (
    <div className="chat-infoBar">
        <div className="chat-leftInnerContainer">
            <img className="chat-onlineIcon" src={onlineIcon} alt="online"/>
            <h3>{room}</h3>
        </div>
        <div className="chat-rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close"/></a>
        </div>
    </div>
);

export default InfoBar;