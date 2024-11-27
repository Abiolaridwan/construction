import React from 'react';
import Tom from '../BiolaBuilders/assets/tom-ritson-DBYV_V5spes-unsplash.jpg';

const SectionSeven = () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Building Futures in Trades & Labour</h1>
        <p className="mb-8 p-8">Construction, Engineering, Asbestos, Mechanical & Electrical, Property & Real Estate.</p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="p-6 rounded-md">
              <h1 className="text-4xl font-bold text-center text-[#15455f] mb-8">Engineering Industries eXcellence</h1>
              <p className="text-lg text-[#15455f] mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat doloribus libero ducimus laudantium autem temporibus repudiandae fugit incidunt unde. Est iure commodi et repudiandae deleniti nulla earum aspernatur nostrum unde qui voluptatem maiores aperiam, repellat sequi optio dignissimos eveniet delectus eius quos? Eveniet molestiae eligendi quibusdam optio ratione maxime dolores in, sit inventore eaque dignissimos atque qui pariatur minus molestias nam nesciunt amet cumque ipsa quis fugiat, aperiam accusamus consequuntur! Molestiae voluptates commodi qui sit! Eius, cum maiores. Soluta rerum reiciendis voluptate consectetur dolorem officiis, in, voluptates excepturi accusantium, assumenda debitis deleniti qui autem accusamus quod. Vitae neque placeat sunt.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-around">
            <img src={Tom} alt="Engineer" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
