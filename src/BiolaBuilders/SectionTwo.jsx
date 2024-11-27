import React, { useState } from 'react';
import Form from '../BiolaBuilders/Form';

function SectionTwo() {

  const initialText = "We are the leader with 25 years of experience in the construction market! Biola.dev is a construction job recruitment agency specializing in supplying skilled, unskilled, and professional personnel to the construction industry. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam labore quo aspernatur, saepe distinctio hic vitae, voluptatem impedit in voluptatibus alias sint officia natus sit nemo fuga odit similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda, iusto saepe, a dolorum debitis adipisci ipsa atque dolor nemo eaque, sit consectetur totam esse ex est explicabo odit eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. saepe distinctio hic vitae, voluptatem impedit in voluptatibus alias sint officia natus sit nemo fuga odit similique. Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. saepe distinctio hic vitae, voluptatem impedit in voluptatibus alias sint officia natus sit nemo fuga odit similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda, iusto saepe, a dolorum debitis adipisci ipsa atque dolor nemo eaque, sit consectetur totam esse ex est explicabo odit eos! debitis adipisci ipsa atque dolor nemo eaque, sit consectetur totam esse ex est explicabo odit eos";
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = (event) => {
    event.preventDefault();
    setShowFullText(!showFullText);
  };

  return (
    <div className='flex bg-[#89A0B4] h-[50rem] p-8 justify-around text-[#15455f] pt-24'>
      <div className='w-[50%]'>
        <p className='font-bold'>WELCOME TO</p> 
        <br /> 
        <p className='text-4xl font-bold'>Biola.dev CONSTRUCTION</p>
        <br />
        <hr className='w-24 border-t-2 border-[#15455f]'/>
        <br />
        <p className='font-semibold'>
          {showFullText ? initialText : `${initialText.slice(0, 250)}...`}
        </p>
        <br />
        <a href="/" onClick={toggleTextVisibility}>
          <button className="bg-[#15455f] text-[#89A0B4] p-6 font-bold hover:bg-[#008751] transition duration-duration-75 ease-in-out border rounded-2xl">
            {showFullText ? "READ LESS" : "READ MORE"}
          </button>
        </a>
      </div>
      <div className='w-[35%]'>
        <Form />
      </div>
    </div>
  );
}

export default SectionTwo;
