import React, { useState } from 'react';
import { auth, firestore } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


const SignIn = ({onRoomSelect}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = credential.user.uid;
      // create a room for the user
      const roomRef = doc(firestore, 'rooms', userId);
      await setDoc(roomRef, { message: "Welcome to your room!", email: email });
      onRoomSelect(userId); // Direct the user to their room
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      onRoomSelect(credential.user.uid); // Direct the user to their room
    } catch (error) {
      console.error('Error signing in', error);
    }
  };
  
  function openSignIn() {
    setShowSignIn(true)
  }

  return (
    <div className='signInCont'>
        <a href='#signIn'>
        <button className='signInBtn' onClick={openSignIn}>Sign In</button>
        </a>
      {showSignIn && (
      <form className='signInForm' onSubmit={signIn}>
      <input
        className='signInInput'
        name="email"
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
      className='signInInput'
        name="password"
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button className='signUpBtn' type="submit">Sign In</button>
      <button className='signUpBtn' onClick={signUp}>Sign Up</button>
    </form>
      )}
    </div>
  );
};

export default SignIn;
