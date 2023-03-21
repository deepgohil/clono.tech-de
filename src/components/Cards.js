import React from 'react';
import cardImage1 from './card1.jpg';
import cardImage2 from './card1.jpg';
import cardImage3 from './card1.jpg';
import cardImage4 from './card1.jpg';

function Cards() {
  return (
    <div className="flex bg-[#000000] flex-wrap justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden   mx-4 my-8">
        <img className="w-full" src={cardImage1} alt="Card Image 1" />
        <div className="px-6 py-4">
          <div className="font-bold text-[#F6F1F1] text-xl mb-2">Card Title 1</div>
          <p className=" text-[#F6F1F1] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden   mx-4 my-8">
        <img className="w-full" src={cardImage2} alt="Card Image 2" />
        <div className="px-6 py-4">
          <div className="font-bold text-[#F6F1F1] text-xl mb-2">Card Title 1</div>
          <p className=" text-[#F6F1F1] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden   mx-4 my-8">
        <img className="w-full" src={cardImage3} alt="Card Image 3" />
        <div className="px-6 py-4">
          <div className="font-bold text-[#F6F1F1] text-xl mb-2">Card Title 1</div>
          <p className=" text-[#F6F1F1] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;