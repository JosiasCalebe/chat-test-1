import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

import './ChatBox.css';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;



const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000/';

    useEffect(()=>{
        const {name, room} = {name:"id", room:localStorage.getItem("moderador-livre")};

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { room }, (error)=>{
            if(error){
                alert(error);
            };
        });

        
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            var data = Date.now();
            var date = new Date(data);
            if(messages.length > 0){
            (messages[messages.length - 1].user === message.user)?
            message = { user:message.user, text:message.text, consecutive:true, date: date.getHours()+":"+date.getMinutes()}:
            message = { user:message.user, text:message.text, consecutive:false, date: date.getHours()+":"+date.getMinutes()};
            setMessages([...messages, message])}
            ;
        });


        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [messages]);

const sendMessage = (event) => {
    event.preventDefault();

    if(message){
        socket.emit('sendMessage', message, () => setMessage(''));
    }

};

    return(
        <div className="chat-outerContainer">
            <div className="chat-container">
                <InfoBar room={room} />
                <Messages  messages={messages}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
        );
};

export default Chat;