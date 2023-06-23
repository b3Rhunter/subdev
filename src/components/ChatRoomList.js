import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ChatRoomList = ({ onRoomSelect, user }) => {
  const [rooms, setRooms] = useState([]);
  const { uid } = user;

  useEffect(() => {
    const getRooms = async () => {
      const roomsCollection = collection(firestore, 'rooms');
      const q = query(roomsCollection, where('email', '!=', ''));
      const querySnapshot = await getDocs(q);
      setRooms(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    getRooms();
  }, []);

  const showRoom = (room) => {
    if (uid === '0kzEQ0yoICealshU3lUx5bqARsD3' || room.id === uid) {
      return (
        <div className='roomCont'>
        <button className='roomBtn' key={room.id} onClick={() => onRoomSelect(room.id)}>
          {room.email}
        </button>
        </div>
      );
    }
  };

  return (
    <div>
      {rooms.map(room => showRoom(room))}
    </div>
  );
};

export default ChatRoomList;
