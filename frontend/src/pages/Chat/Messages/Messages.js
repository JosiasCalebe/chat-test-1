import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';
import Message from '../Message/Message';

const Messages = ({ messages }) => (
    <ScrollToBottom className="chat-messages">
        {messages.map((message, i) => <div key={i}><Message message={message} room={localStorage.getItem("moderador-livre")}/></div> )}
    </ScrollToBottom>
);

export default Messages;