import React, { useState, useEffect, useRef } from 'react';

const Q10 = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

  
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Timer: {seconds} sec</h2>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>{' '}
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
};

export default Q10;