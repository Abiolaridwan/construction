import React from 'react';

function Form() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#15455f] p-8 text-[#89A0B4]">
      <h2 className="text-3xl font-bold mb-4">Get Started</h2>
      <p className="text-lg mb-4">
        Search for our latest jobs today and get started with the career you deserve.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="jobKeywords" className="text-lg mb-2">
          Job Keywords
        </label>
        <input
          type="text"
          id="jobKeywords"
          name="jobKeywords"
          className="border rounded-md p-2 mb-4"
          placeholder="Enter job keywords"
        />

        <label htmlFor="location" className="text-lg mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="border rounded-md p-2 mb-4"
          placeholder="Enter location"
        />

        <button
          type="submit"
          className="bg-[#89A0B4] text-[#15455f] py-2 px-4 rounded-md hover:bg-[#008751] font-bold"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};


export default Form