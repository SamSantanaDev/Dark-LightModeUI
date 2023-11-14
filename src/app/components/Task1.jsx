'use client';
import React, { useState } from 'react';

const Task1 = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const getItemClass = (item) => {
    if (item === 'Iced Coffee' && selectedItem === item) {
      return "mb-2 bg-green-500 cursor-pointer";
    } else if (selectedItem === item) {
      return "mb-2 bg-red-500 cursor-pointer";
    }
    return "mb-2 hover:bg-gray-100 cursor-pointer";
  };

  return (
    <div id="task1" className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold my-8">Welcome to HCI Cafe</h1>
      <h3 className="text-lg mt-5 font-bold mb-4">Select menu item to order</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
        {/* ----------- Coffee ----------- */}
        <div className=" rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Coffee</h3>
          <div className={getItemClass("Hot Coffee")} onClick={() => handleItemClick("Hot Coffee")}>Hot Coffee</div>
          <div className={getItemClass("Iced Coffee")} onClick={() => handleItemClick("Iced Coffee")}>Iced Coffee</div>
          <div className={getItemClass("Latte")} onClick={() => handleItemClick("Latte")}>Latte</div>
          <div className={getItemClass("Americano")} onClick={() => handleItemClick("Americano")}>Americano</div>
          <div className={getItemClass("Cappuccino")} onClick={() => handleItemClick("Cappuccino")}>Cappuccino</div>
          <div className={getItemClass("Espresso")} onClick={() => handleItemClick("Espresso")}>Espresso</div>
          <div className={getItemClass("Mocha")} onClick={() => handleItemClick("Mocha")}>Mocha</div>

        </div>
        {/* ----------- Tea ----------- */}
        <div className=" rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Tea</h3>
          <div className={getItemClass("Black Tea")} onClick={() => handleItemClick("Black Tea")}>Black Tea</div>
          <div className={getItemClass("Green Tea")} onClick={() => handleItemClick("Green Tea")}>Green Tea</div>
          <div className={getItemClass("Herbal Tea")} onClick={() => handleItemClick("Herbal Tea")}>Herbal Tea</div>
     
          <div className={getItemClass(" Matcha Latte")} onClick={() => handleItemClick("Matcha Latte")}>Matcha Latte</div>
          <div className={getItemClass("Iced Matcha Latte")} onClick={() => handleItemClick("Iced Matcha Latte")}>Iced Matcha Latte</div>
          <div className={getItemClass("Chai")} onClick={() => handleItemClick("Chai")}>Chai</div>
        </div>
        {/* ----------- Pastries ----------- */}
        <div className=" rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Pastries</h3>
          <div className={getItemClass("Croissant")} onClick={() => handleItemClick("Croissant")}>Croissant</div>
          <div className={getItemClass("Chocolate Croissant")} onClick={() => handleItemClick("Chocolate Croissant")}> ChocolateCroissant</div>

          <div className={getItemClass("Muffin")} onClick={() => handleItemClick("Muffin")}>Muffin</div>
          <div className={getItemClass("Scone")} onClick={() => handleItemClick("Scone")}>Scone</div>
          <div className={getItemClass("Danish")} onClick={() => handleItemClick("Danish")}>Danish</div>
          <div className={getItemClass("Cinnamon Roll")} onClick={() => handleItemClick("Cinnamon Roll")}>Cinnamon Roll</div>
        </div>

        {/* ----------- Smoothies ----------- */}
        <div className=" rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Smoothies</h3>
          <div className={getItemClass("Strawberry Banana")} onClick={() => handleItemClick("Strawberry Banana")}>Strawberry Banana</div>
          <div className={getItemClass("Blueberry Bliss")} onClick={() => handleItemClick("Blueberry Bliss")}>Blueberry Bliss</div>
          <div className={getItemClass("Mango Madness")} onClick={() => handleItemClick("Mango Madness")}>Mango Madness</div>
          <div className={getItemClass("Green Goodness")} onClick={() => handleItemClick("Green Goodness")}>Green Goodness</div>
          <div className={getItemClass("Protein Power")} onClick={() => handleItemClick("Chocolate Protein")}>Protein Power</div>
        </div>

        {/* Additional categories can be added here following the same pattern */}
      </div>
      <div className="flex justify-center m-10 w-full px-6 py-4">
        <a href="#task2" className="inline-block bg-gray-400 px-6 py-2 rounded shadow-lg hover:bg-gray-500 hover:scale-150 transition duration-300">
          Next
        </a>
      </div>
    </div>
  );
};

export default Task1;
