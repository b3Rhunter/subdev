import React from 'react';
import { auth } from '../firebase';

const ChatMessage = (props) => {
  const { text, uid, email } = props.message;
  const messageClass = uid === (auth.currentUser ? auth.currentUser.uid : null) ? 'sent' : 'received';
  
  return (
    <div className={`message ${messageClass}`}>
      <p className='email'>{email}</p>
      <hr/>
      <p className='messageText'>{text}</p>
    </div>
  );
}

export default ChatMessage;
