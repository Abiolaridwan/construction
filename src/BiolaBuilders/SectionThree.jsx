import React, { useState, useEffect } from 'react';
import '../BiolaBuilders/Images.css';
import Bam from '../BiolaBuilders/assets/bam-construct.png.png';
import Bewley from '../BiolaBuilders/assets/bewley-homes.png.png';
import Cala from '../BiolaBuilders/assets/cala-homes.png';
import Crest from '../BiolaBuilders/assets/Crest-Nicholson.png';
import Highwood from '../BiolaBuilders/assets/highwood-group.png';
import Redrow from '../BiolaBuilders/assets/Redrow-Homes.png';
import Taylor from '../BiolaBuilders/assets/taylor-wimpey.png';
import Balfour from '../BiolaBuilders/assets/Balfour.png';

function SectionThree() {
  const images = [Bam, Bewley, Cala, Crest, Highwood, Redrow, Taylor, Balfour];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="container">
      <div className='text-4xl md:text-6xl lg:text-8xl font-bold text-center text-[#15455f] pt-6'>
        <p>OUR CLIENTS</p>
      </div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {images.map((_, index) => (
            <li
              key={index}
              data-target="#myCarousel"
              data-slide-to={index}
              className={index === currentIndex ? 'active' : ''}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
              <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%' }} />
            </div>
          ))}
        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev" onClick={handlePrev}>
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next" onClick={handleNext}>
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default SectionThree;
