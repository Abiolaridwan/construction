import React, { useState, useEffect } from 'react';
import Asbestos from '../BiolaBuilders/assets/asbestos.jpg';
import Civil from '../BiolaBuilders/assets/civil.jpg';
import Construction from '../BiolaBuilders/assets/construction.png';
import Design from '../BiolaBuilders/assets/design.jpg';
import Property from '../BiolaBuilders/assets/property.jpeg';

function SectionFour() {
  const services = [
    { title: 'ASBESTOS', image: Asbestos },
    { title: 'CIVIL', image: Civil },
    { title: 'CONSTRUCTION', image: Construction },
    { title: 'DESIGN', image: Design },
    { title: 'PROPERTY', image: Property },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, services.length]);

  return (
    <div className='bg-[#89A0B4] p-12'>
      <div className='text-4xl md:text-6xl lg:text-8xl font-bold text-center text-[#15455f]'>
        <p>OUR BEST SERVICES</p>
      </div>
      <div className='flex mt-8'>
        {renderService(services[currentIndex])}
      </div>
    </div>
  );
}

function renderService({ title, image }) {
  return (
    <div className='flex mt-8'>
      <div className='md:w-1/5 lg:w-1/5'>
        <img src={image} alt={title} className='w-full h-auto object-cover rounded-md' />
      </div>
      <div className='md:ml-4 lg:ml-4 mt-4 md:mt-0 lg:mt-0 pl-12'>
        <p className='text-4xl font-bold text-[#15455f]'>{title}</p>
        <br />
        <p className='text-4xl text-[#15455f]'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam fuga labore doloremque nemo odio, obcaecati
          neque! Nam hic repellendus excepturi eligendi autem eum iure, facere natus quas architecto, ab perspiciatis
          reiciendis obcaecati sunt odio quae eius fugit, debitis quibusdam officia! 
        </p>
        <br />
        <a href='' className='text-[#15455f] mt-2 hover:underline text-2xl font-bold'>
          Read More
        </a>
      </div>
    </div>
  );
}

export default SectionFour;
