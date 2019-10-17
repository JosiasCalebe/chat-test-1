import React from 'react';


import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text, consecutive, date }, room}) => {
    let isSentByCurrentUser = false;

    if(user !== room){
            isSentByCurrentUser = true;
        }

    return(
        isSentByCurrentUser?(
            <div className={consecutive ? "chat-messageContainer chat-justifyEnd" : "chat-messageContainer chat-justifyEnd chat-firstMessageContainer"}>
                <div className="chat-time">
                    <p className="chat-sentText chat-colorDarkGray chat-pr-10">{date}</p>
                </div>
                <div className={consecutive ? "chat-messageBox chat-backgroundBlue chat-currentUser" : "chat-messageBox chat-backgroundBlue chat-currentUser chat-firstMessageBox"}>
                    <p className="chat-messageText chat-colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ):(
            <div className={(user === 'admin') ?  'chat-messageContainer chat-justifyCenter chat-firstMessageContainer': (consecutive) ? "chat-messageContainer chat-justifyStart" : "chat-messageContainer chat-justifyStart chat-firstMessageContainer"}>
                <div className={consecutive ? "chat-messageBox chat-backgroundLight chat-outsideUser" : "chat-messageBox chat-backgroundLight chat-outsideUser chat-firstMessageBox"}>
                    <p className="chat-messageText chat-colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <div className="chat-time">
                    <p className="chat-sentText chat-colorDark chat-pl-10" style={{display:( user === 'admin')?'none':'block'}}>{date}</p>
                </div>
                
            </div>
        )
    )

};

export default Message;