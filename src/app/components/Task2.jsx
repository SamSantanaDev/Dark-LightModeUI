'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Task2 = () => {
  const [size, setSize] = useState('small'); // Default size
  const { theme, setTheme, resolvedTheme } = useTheme(); // Get the resolved theme
  const [mounted, setMounted] = useState(false);

  // When the component mounts, we'll be able to determine the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only show the UI once we know which theme is being used to avoid a flash of unstyled content
  if (!mounted) return null;

  const isDark = theme === 'dark' || resolvedTheme === 'dark'; // Check if the dark theme is active

  return (
    <div id="task2" className={`flex flex-col items-center justify-center h-screen ${isDark ? 'dark' : ''}`}>
      <label htmlFor="size-select" className="mb-2 text-lg font-semibold dark:text-gray-200">Select Size</label>
      <div className="relative inline-block text-gray-700 dark:text-gray-300">
        <select
          id="size-select"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-indigo-500 dark:focus:ring-indigo-400"
          name="size"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className="flex justify-center w-full mt-20 px-6 py-4">
        <a href="#task3" className="  inline-block bg-gray-400 px-6 py-2 rounded shadow-lg hover:bg-gray-500 hover:scale-150 transition duration-300">
          Next
        </a>
      </div>
    </div>
  );
};

export default Task2;
