import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

import './Join.css';

const Join = () => {
    
    const [room, setRoom] = useState('');

    return (
        <div className="chat-joinOuterContainer">
            <div className="chat-joinInnerContainer">
                <h1 className="chat-heading">Login</h1>
                <div><input placeholder="Sala" className="chat-joinInput chat-mt-20" type="text" onChange={(event) => setRoom(event.target.value)}/></div>
                <Link onClick={event =>(!room)?event.preventDefault():localStorage.setItem("moderador-livre", room)} to={"/chat"}>
                    <button className="chat-button chat-mt-20" type="submit">Entrar</button>
                </Link>
            </div>
        </div>
    )
};

export default Join;