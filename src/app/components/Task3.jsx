"use client";
import React, { useState } from "react";

const IceAndStrawSelector = () => {
  const [ice, setIce] = useState("regular"); // default to 'regular' ice
  const [straw, setStraw] = useState(true); // default to 'yes' for straw

  const getButtonClass = (type) => {
    if (ice === type.toLowerCase()) {
      return type === "Light Ice" ? "bg-green-400" : "bg-red-400";
    }
    return "bg-gray-400";
  };

  return (
    <div
      id="task3"
      className="flex flex-col items-center justify-center h-screen"
    >
      {/* Ice selection */}
      <div className="flex flex-col items-center mb-4">
        <p className="text-lg font-semibold mb-2">Ice</p>
        {["Regular Ice", "Light Ice", "No Ice"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded my-1 focus:outline-none focus:ring-2 focus:ring-gray-500 ${getButtonClass(
              type
            )}`}
            onClick={() => setIce(type.toLowerCase())}
          >
            {type}
          </button>
        ))}
      </div>
      {/* Straw selection */}
      <div className="flex items-center">
        <p className="text-lg font-semibold mr-2">Would you like a straw?</p>
        <div className="flex items-center">
          <label
            htmlFor="straw-yes"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <input
                type="radio"
                id="straw-yes"
                name="straw"
                className="sr-only"
                checked={straw}
                onChange={() => setStraw(true)}
              />
              <div
                className={`w-10 h-4 ${
                  straw ? "bg-red-400" : "bg-gray-200"
                } rounded-full shadow-inner`}
              ></div>
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
                  straw ? "transform translate-x-full" : ""
                }`}
              ></div>
            </div>
            <span className="ml-3 font-semibold">No</span>
          </label>

          <label
            htmlFor="straw-no"
            className="flex items-center cursor-pointer ml-4"
          >
            <div className="relative">
              <input
                type="radio"
                id="straw-no"
                name="straw"
                className="sr-only"
                checked={!straw}
                onChange={() => setStraw(false)}
              />
              <div
                className={`w-10 h-4 ${
                  !straw ? "bg-green-400" : "bg-gray-200"
                } rounded-full shadow-inner`}
              ></div>
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
                  !straw ? "transform translate-x-full" : ""
                }`}
              ></div>
            </div>
            <span className="ml-3 font-semibold">Yes</span>
          </label>
        </div>
      </div>
      <div className="flex justify-center w-full mt-20 px-6 py-4">
        <a
          href="#task4"
          className="  inline-block bg-gray-400 px-6 py-2 rounded shadow-lg hover:bg-gray-500 hover:scale-150 transition duration-300"
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default IceAndStrawSelector;
