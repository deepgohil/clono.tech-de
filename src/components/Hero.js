import React from 'react';
import '../index.css';
import bgImage from './bgimage.jpg';

function Hero() {
  return (
    <div className="bg-cover bg-center bg-fixed h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">The Future is Here.</h1>
      <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8">We are OpenAI, an artificial intelligence research laboratory consisting of the world's brightest minds.</p>
      {/* <a href="#" className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">Learn More</a>
       */}
       <button className="border border-[#F6F1F1] text-[#F6F1F1] font-medium py-4 px-8 transition duration-300 ease-in-out hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
      Click Me
    </button>
    </div>
  );
}

export default Hero;