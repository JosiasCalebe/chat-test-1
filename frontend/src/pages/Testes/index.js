import React, { useState } from 'react';
import SecImage from '../../components/SVG/svgHome';

// Teste Header
import Header from '../../components/Header/index';

export default function App() {
  const [color, setColor] = useState("");

  const onClick = () => {
    applyTheme(color);
  };

  const applyTheme = (color) => {
      const value = color;
      document.documentElement.style.setProperty('--main-color', value);
  };

  return (
    <div className="container">
      <Header />
      <SecImage />
      <input type="text" onChange={event => setColor(event.target.value)}/>
      <input type="button" value="Trocar Cor" onClick={onClick}/>
    </div>
  );
}