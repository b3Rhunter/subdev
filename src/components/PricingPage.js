import React from 'react';
import { Link } from 'react-router-dom';

function PricingPage() {
  return (
    <main>
      
      <div className='pricingCont'>
      <div className='pricingCat'>
      <p>$5000 per month</p>
      <button className='sub'><Link to="https://buy.stripe.com/00gdRp9hf1BTg9icMM">subscribe</Link></button>
      </div>

      <div className='pricingCat'>
      <p>$4500 per quarter</p>
      <button className='sub'><Link to="https://buy.stripe.com/00g00zeBz2FX0akeUV">subscribe</Link></button>
      </div>

      <div className='pricingCat'>
      <p>$4000 per year</p>
      <button className='sub'><Link to="https://buy.stripe.com/4gwcNl1ON94lf5e4gi">subscribe</Link></button>
      </div>

      </div>
    </main>
  );
}

export default PricingPage;
