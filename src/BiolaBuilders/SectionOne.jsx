import React from 'react';
import Header from '../BiolaBuilders/Header';
import Engineer from '../BiolaBuilders/assets/engineer.jpg';
import '../index.css';

const SectionOne = () => {
  return (
    <div className='relative overflow-hidden'>
      <div>
        <Header />
      </div>
      <div>
        <img src={Engineer} alt="Engineer" className='w-full h-auto object-cover brightness-50' />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 text-center text-[#89A0B4] mt-10 lg:mt-20 px-4">
        <p className="text-4xl md:text-6xl lg:text-9xl font-bold mb-4 leading-tight">BUILDING FUTURES IN CONSTRUCTION</p>
        <br />
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold leading-tight">"WE WILL BUILD YOUR DREAM"</p>
        <br />
        <a href="/">
          <button className="bg-[#15455f] text-[#89A0B4] p-4 md:p-6 lg:p-8 font-bold hover:bg-[#008751] transition duration-75 ease-in-out border rounded-xl">
            GET IN TOUCH
          </button>
        </a>
      </div>
    </div>
  );
};

export default SectionOne;
