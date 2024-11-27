import React from 'react';
import NigIcon from '../BiolaBuilders/assets/nigeria.png';

const Logo = () => {
  return (
    <div className='flex items-center space-x-3'>
      <img src={NigIcon} className='h-10 w-10' alt='Biola Icon' />
      <h1 className='font-extrabold text-4xl text-[#15455f]'>Biola.dev</h1>
    </div>
  );
};

export default Logo;