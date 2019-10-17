import React from 'react';

import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
      <input 
      className="chat-input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
      />

      <button className="chat-sendButton" onClick={(event) => sendMessage(event)}>Enviar</button>
  </form>  
);

export default Input;