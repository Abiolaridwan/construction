import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../index.css';
import Menu from '../BiolaBuilders/assets/menu.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative z-10'>
    <div className='items-center p-4 md:p-6 lg:p-8 bg-[#15455f]'>
      {/* Header for desktop view */}
    <div className='hidden lg:block relative z-10'>
        {/* Navbar */}
        <nav className="bg-[#89A0B4] p-2 text-[#15455f] flex justify-between">
        <div className='p-2'>
              <Logo />
        </div>
          <div className="flex justify-between items-center pr-6">
            <div className="hidden lg:flex space-x-4 font-bold gap-6">
            <a href="#" className="my-2 relative group">About Us
            <div className="hidden group-hover:block absolute top-full left-0 bg-[#0f78a8] p-12">
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Accreditations</a>
            <br />
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Location</a>
            <br />
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Work With Us</a>
                  </div>
                  </a>
            <a href="#" className="my-2">Job Search</a>
            <a href="#" className="my-2 relative group">Clients
            <div className="hidden group-hover:block absolute top-full left-0 bg-[#0f78a8] p-12">
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Accreditations</a>
            <br />
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Location</a>
            <br />
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Work With Us</a>
                  </div>
                  </a>
            <a href="#" className="my-2 relative group">Candidates
            <div className="hidden group-hover:block absolute top-full left-0 bg-[#0f78a8] p-12">
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Accreditations</a>
            <br />
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Location</a>
            <br />
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Work With Us</a>
                  </div>
                  </a>
            <a href="#" className="my-2 relative group">Our Portfolio
            <div className="hidden group-hover:block absolute top-full left-0 bg-[#0f78a8] p-12">
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Accreditations</a>
            <br />
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Location</a>
            <br />
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Work With Us</a>
                  </div>
                  </a>
            <a href="#" className="my-2 relative group">Diversity & Inclusion
            <div className="hidden group-hover:block absolute top-full left-0 bg-[#1C8ABD] p-12">
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Accreditations</a>
            <br />
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Location</a>
            <br />
            <a href="#" className="text-[#89A0B4] py-2 px-4 hover:text-[#15455f]">Work With Us</a>
                  </div>
                  </a>
            <a href="#" className="my-2">Resources</a>
            <a href="#" className="my-2">Contact Us</a>
            </div>

          </div>
        </nav>
        </div>
        

      </div>

      {/* Header for mobile view */}
      
      <div className="flex justify-between lg:hidden bg-[#89A0B4]">
        <div>
          <Logo />
          {isOpen && (
            <div className="flex flex-col mr-auto items-start py-2 px-4 h-auto">
              <a href="#" className="text-[#15455f] my-2 font-bold">About Us</a>
            <a href="#" className="text-[#15455f] my-2 font-bold">Job Search</a>
            <a href="#" className="text-[#15455f] my-2 font-bold">Clients</a>
            <a href="#" className="text-[#15455f] my-2 font-bold">Candidates</a>
            <a href="#" className="text-[#15455f] my-2 font-bold">Our Portfolio</a>
            <a href="#" className="text-[#15455f] my-2 font-bold">Diversity & Inclusion</a>
            <a href="#" className="text-[#15455f] my-2 font-bold">Resources</a>
            <a href="#" className="text-[#15455f] my-2 font-bold">Contact Us</a>
            </div>
            )}
        </div>

        <nav className=''>
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-[#1C8ABD] focus:outline-none"
            >
              <img src={Menu} className='h-8 w-8' alt="Biola Icon" />
            </button>
          </div>
        </nav>
      </div>
      </div>
     
    
  );
};

export default Header;
