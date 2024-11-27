import React from 'react';

function Address() {
  return (
    <div className=''>
        <p className='text-4xl font-semibold'>A local office near you</p>
        <br />
        <p className='text-4xl text-[#15455f]'>With a team of industry experts based in 19 locations around Central and Southern England and South Wales, whether you are a client or candidate, you can count on your ITS representative to know your area and industry sector inside out. So give us a go, and see how much we can do for you.</p>
        <br />
        <div>
        <a href="/">
          <button className="bg-[#15455f] text-[#89A0B4] p-4 md:p-6 lg:p-8 font-bold hover:bg-[#008751] transition duration-75 ease-in-out border rounded-xl">
            OUR OFFICES
          </button>
        </a>
        </div>
    </div>
  )
}

export default Address