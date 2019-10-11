import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index';

// ChatModal
import Chat from '../../components/ChatModal/index';

// Footer
import Footer from '../../components/Footer/index';

// Imagens
import SecImage from '../../components/SVG/svgHome';
import YouTubeLogo from '../../components/SVG/youtube.png';

import {Link} from 'react-router-dom';


import './style.css'

export default function App() {

  const styleSVG = {
    width: '550',
    height: '400'
  }

  return (
    <div id="home" className="container">
      <Header />
      <section className="sec1">
        <div className="boxContent">
          <div className="slogan">De jovem pra jovem <br /> <span>Conta Pra Gente</span></div>
          <div className="subSlogan">A plataforma que junta jovens para conversar e se ajudarem</div>
          <div className="chatbtn"><Link className="a" to="/chat">Entre no Chat</Link></div>
        </div>
        <div className="imageBox">
          <SecImage width={styleSVG.width} height={styleSVG.height} />
        </div>
      </section>
      <section className="sec2" id="chat">
        <div className="cont">
          <h2>Chat</h2>
          <div className="pCont">
            O Chat junta jovens para conversarem e se ajudarem
          </div>
          <button className="btn"><Link className="a" to="/chat">Entre no Chat</Link></button>
        </div>
        <Chat />
      </section>
      <section id="mural" className="sec3">
        <div className="mural">
          <div className="muralCont">
            <div className="postit"><p>Tati Bernardi</p></div>
            <div className="phrase">Aquele abraço era o lado bom da vida, mas para valorizá-lo eu precisava viver. E que irônico: pra viver eu precisava perdê-lo...</div>
          </div>
          <div className="muralCont">
            <div className="postit"><p>Chorão</p></div>
            <div className="phrase">Não menospreze o dever que a consciência te impõe, valorize a vida!</div>
          </div>
        </div>
        <div className="cont">
          <h2>Mural</h2>
          <div className="pCont">
            O Mural tem depoimentos e frases motivacionais
          </div>
          <button className="btn"><Link className="a" to="/mural">Acesse o Mural</Link></button>
        </div>
      </section>
      <section id="videos" className="sec4">
        <div className="cont">
          <h2>Vídeos</h2>
          <div className="pCont">
            Os Vídeos falaram sobre assuntos cotidianos
          </div>
          <button className="btn"><Link className="a" to="/videos">Veja os Vídeos</Link></button>
        </div>
        <div className="video">
          <img src={YouTubeLogo} alt="Logo do Youtube" />
        </div>
      </section>
      <Footer />
    </div >
  );
}