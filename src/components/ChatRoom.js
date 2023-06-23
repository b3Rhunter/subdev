import React, { useRef, useState } from 'react';
import { firestore, auth } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, doc, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import ChatMessage from './ChatMessage';

const ChatRoom = ({ user, roomId }) => {
  const dummy = useRef();

  // Create a reference to this user's chat room
  const roomRef = doc(firestore, 'rooms', roomId);

  const messagesRef = collection(roomRef, 'messages');

  const [formValue, setFormValue] = useState('');
  
  const sendMessage = async (e) => {
    e.preventDefault();
  
    const { uid, email } = user;
  
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      email
    });
  
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  const messagesQuery = query(messagesRef, orderBy('createdAt'));
  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });
  
  return (
    <>
<main className='chatMessages'>
  {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
  <div ref={dummy}></div>
</main>
      <form className='messageForm' onSubmit={sendMessage}>
        <input className='messageInput' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="type message..." />
        <button className='messageBtn' type="submit" disabled={!formValue}>Send</button>
      </form>
    </>
  );
}

export default ChatRoom;
