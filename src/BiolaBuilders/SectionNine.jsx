import React from 'react'


const SectionNine = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Building futures in Biola.dev</h3>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Quick links</h3>
          <ul className="list-none p-0">
            <li><a href="#">Clients</a></li>
            <li><a href="#">Candidates</a></li>
            <li><a href="#">Upload your CV</a></li>
           
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Information</h3>
          <ul className="list-none p-0">
            <li><a href="#">Locations</a></li>
            <li><a href="#">Specialisms</a></li>
            <li><a href="#">Diversity & Inclusion</a></li>
            <li><a href="#">Downloads</a></li>
            
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Get Access</h3>
          <ul className="list-none p-0">
            <li><a href="#">Login now</a></li>
            <li><a href="#">Register with Biola</a></li>
            <li><a href="#">Job board</a></li>
            <li><a href="#">Online payroll</a></li>
            
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2023 - Yusuf Ridwan Abiola - Web Designer & Developer</p>
      </div>
    </footer>
  );
};

export default SectionNine;
