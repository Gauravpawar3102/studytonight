import React from 'react';

function HeroSection() {
  return (
    <div className="hero-section-container bg-red-200 h-1/2 w-screen flex flex-col  items-center p-5">
      <div className="hero-top h-1/2 w-full bg-green-200 flex justify-center ">
        <div className="inside flex  flex-row text-4xl font-medium   items-center ">
          Get access to wide range of handmade notes
        </div>
      </div>
      <div className="hero-bottom  h-1/2">
        <div className="hero-cta  text-white font-semibold px-2 py-1 rounded-sm   bg-black m-5">
          Explore Now
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
