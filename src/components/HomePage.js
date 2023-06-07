import React from 'react';
import logo from '../images/svg/logo-color.svg'

function HomePage() {
  return (
    <main>
      <img src={logo} alt='logo'/>
      <h2>Welcome to SubDev!</h2>
      <h3>Developer subscriptions to scale your business.</h3>
      <p>Your one-stop shop for all your development needs.</p>
    </main>
  );
}

export default HomePage;
