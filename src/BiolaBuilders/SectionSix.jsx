import React from 'react';

const SectionSix = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#0C1518]">
      <div className="text-center bg-[#0C1518]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
          <div className="p-8 bg-[#F3F4F6] rounded-md">
            <p className="text-8xl font-bold text-[#15455f] mb-4">8,000+</p>
            <p className="text-lg text-[#15455f] font-bold">Satisfied Customers</p>
          </div>

          <div className="p-8 bg-[#F3F4F6] rounded-md">
            <p className="text-8xl font-bold text-[#15455f] mb-4">2,500+</p>
            <p className="text-lg text-[#15455f] font-bold">Completed Projects</p>
          </div>

          <div className="p-8 bg-[#F3F4F6] rounded-md">
            <p className="text-8xl font-bold text-[#15455f] mb-4">1,500+</p>
            <p className="text-lg text-[#15455f] font-bold">Signed Contracts</p>
          </div>

          <div className="p-8 bg-[#F3F4F6] rounded-md">
            <p className="text-8xl font-bold text-[#15455f] mb-4">9,000+</p>
            <p className="text-lg text-[#15455f] font-bold">Leads In Social Media</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
