import React, { useEffect, useState } from 'react';
import Engineerr from '../BiolaBuilders/assets/Engineerr.jpg'
import EngineerOne from '../BiolaBuilders/assets/EngineerOne.jpg'
import Engineerss from '../BiolaBuilders/assets/Engineerss.jpg'
import EngineerNight from '../BiolaBuilders/assets/EngineerNight.jpg'
import EngineersPlan from '../BiolaBuilders/assets/EngineersPlan.jpg'

const SectionFive = () => {
  const images = [
    Engineerr, EngineerOne, Engineerss, EngineerNight, EngineersPlan,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []); // Removed currentImageIndex from dependency array to prevent re-rendering

  const backgroundStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="bg-cover p-8 md:p-12 lg:p-16 h-[25rem] brightness-50" style={backgroundStyle}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#89A0B4] mb-8'>
          Let’s Work Together
        </h2>
        <p className='text-4xl text-[#89A0B4] mb-6 text-center'>
          Whether you are a client or a candidate, our services help you find what you’re looking for and bring the best recruitment solutions possible.
        </p>
        <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center'>
          <button className='bg-[#15455f] text-[#89A0B4] py-3 px-6 mb-4 md:mb-0 lg:mb-0 md:mr-4 lg:mr-4 rounded-md font-bold hover:bg-[#008751] transition duration-75 ease-in-out'>
            I'M LOOKING FOR A JOB
          </button>
          <button className='bg-[#15455f] text-[#89A0B4] py-3 px-6 rounded-md font-bold hover:bg-[#008751] transition duration-75 ease-in-out'>
            I'M LOOKING FOR A CANDIDATE
          </button>
        </div>
      </div>

      {/* Media Queries for Mobile Responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .bg-cover {
            height: 25rem; /* Adjust height for smaller screens */
            background-image: url(${images[currentImageIndex]});
          }
          .text-4xl {
            font-size: 2.5rem; /* Adjust font size for smaller screens */
          }
          /* Add other necessary adjustments for smaller screens */
        }
      `}</style>
    </section>
  );
};

export default SectionFive;
