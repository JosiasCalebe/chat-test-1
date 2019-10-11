import React, { useState } from 'react';
import './App.css';

// Rotas
import Routes from './routes';

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
      <Routes />
    </div>
  );
}