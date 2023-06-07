import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import SignupPage from './components/SignupPage';

function App() {
  return (
<Router>
  <div className='wrapper'>
    <Header />
    <div className='content'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
    <Footer />
  </div>
</Router>


  );
}

export default App;
