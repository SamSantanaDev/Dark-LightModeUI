
'use client';
import React, { useState, useEffect } from 'react';

const Start = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timerDuration, setTimerDuration] = useState(null);

  const startTimer = () => {
    setStartTime(Date.now());
    setEndTime(null);
    setShowResult(false);
  };

  const stopTimer = () => {
    const endTime = Date.now();
    setEndTime(endTime);
    setTimerDuration((endTime - startTime) / 1000); // duration in seconds
    setShowResult(true);
  };

  useEffect(() => {
    let timer;
    if (showResult) {
      timer = setTimeout(() => {
        setShowResult(false);
        setStartTime(null);
        setEndTime(null);
      }, 10000); // Reset after 10 seconds
    }

    return () => clearTimeout(timer);
  }, [showResult]);

  return (
    <div id='start' className="outline-dotted flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome, ready to start?</h1>

      <button onClick={startTimer} className="inline-block bg-gray-400 px-6 py-2 rounded shadow-lg hover:bg-gray-500 hover:scale-150 transition duration-300">
       <a href='#task1'>Start</a> 
      </button>
      <h3 className="text-lg mt-60 font-bold mb-4">Press Finish when tasks are completed</h3>
      <button onClick={stopTimer} className=" inline-block bg-gray-400 px-6 py-2 rounded shadow-lg hover:bg-gray-500 hover:scale-150 transition duration-300">
        Finish
      </button>

      {showResult && (
        <div className="mt-4">
          <p>Time Elapsed: {timerDuration} seconds</p>
        </div>
      )}
    </div>
  );
}

export default Start;
