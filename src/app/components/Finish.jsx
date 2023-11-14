import React from 'react';

const Finish = ({ onStop, duration }) => {
  return (
    <div id='finish' className="outline-dotted flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Thank You! Your order has been placed</h1>
      <h3 className="text-lg mt-5 font-bold mb-4">Select complete to finish tasks</h3>
      <div className="flex justify-center w-full mt-20 px-6 py-4">
        <a
          href="#start"
          className="  inline-block bg-gray-400 px-6 py-2 rounded shadow-lg hover:bg-gray-500 hover:scale-150 transition duration-300"
        >
          Complete
        </a>
      </div>
    </div>
  );
};

export default Finish;
