import React from "react";

const Task4 = () => {

    
  return (
    <div
      id="task4"
      className="flex flex-col items-center justify-center h-screen"
    >
      <h3 className="text-lg mt-5 font-bold mb-4">Enter Name</h3>
      <div className="flex flex-col items-center justify-center">
      <form className="flex flex-col space-evenly">
      <input className=" rounded-md bg-transparent mb-10" type="text" name="Name" placeholder="Your Name" required />
      <h3 className="text-lg mt-5 font-bold mb-4">Enter Special Instructions</h3>
      <textarea  className=" bg-transparent" name="Message" rows="6" placeholder="Special Intructions" required ></textarea>
      <div className="flex justify-center w-full mt-20 px-6 py-4">
        <a
          href="#finish" type="submit"
          className="  inline-block bg-gray-400 px-6 py-2 rounded shadow-lg hover:bg-gray-500 hover:scale-150 transition duration-300"
        >
          Place Order
        </a>
      </div>


      </form>
      </div>
      
    </div>
    
    
  );
};

export default Task4;
