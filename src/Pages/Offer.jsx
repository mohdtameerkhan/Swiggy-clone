import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Offer() {
 
  return (
    <>
      <div className='max-w-[1050px] mx-auto mt-4 '>
        <div className='overlay_offer'>
        <img className='' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png" alt=""  />
        <h2 className='offer_sec'>Restaurants With Great Offers <br /> Near Me</h2>
        </div>
        
        
      <div className='border border-gray-400 rounded-lg py-4 px-3 my-7'>
        <h2 className='font-bold text-gray-400'>Get the Best Offers on Food from Top Restaurants Near You</h2>
        <p>Get ready for a delicious adventure packed with unbeatable dining offers at your favorite restaurants. Whether you’re craving a cheesy pizza, a juicy burger, or a delightful bowl of pasta, now is the perfect time to head out and indulge in your favorite meals—while saving big!</p>
      </div>
      </div>
      <Footer />
      
    </>
  );
}