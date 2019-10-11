import React from 'react';

import Online from '../../components/SVG/online.png';

import './style.css';

export default function Chat() {
    return (
        <div className="chatCont">
            <div className="infoBar">
                <h3>Mediador <img src={Online} alt="Online icon" /></h3>
                <div className="quit">
                    <div className="x"></div>
                    <div className="x"></div>
                </div>
            </div>
            <div className="messages">
                <div className="welcomeChat">
                    <h3>Bem Vindo ao <span><a href="/#home">Conta Pra Gente</a></span>!</h3>
                </div>
                <div className="chatMessages">
                    <div className="myMessages">
                        <div className="mainMessages">
                            <div className="author">Aluno</div>
                            <div className="msg">Oii</div>
                        </div>
                    </div>
                    <div className="userMessages">
                        <div className="mainMessages">
                            <div className="author">Mediador</div>
                            <div className="msg">Oi</div>
                            <div className="msg">Tudo bem com vc?</div>
                        </div>
                    </div>
                    <div className="myMessages">
                        <div className="mainMessages">
                            <div className="author">Aluno</div>
                            <div className="msg">To bem, sim e vc?</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chatInput">
                <div className="textChat">Escreva sua mensagem...</div>
                <div className="btnChat">Enviar</div>
            </div>
        </div>
    );
}