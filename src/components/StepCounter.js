import React, { useState, useEffect } from 'react';

const StepCounter = () => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('stepCount');
    if (saved) {
      setSteps(parseInt(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('stepCount', steps.toString());
  }, [steps]);

  const addSteps = () => {
    setSteps(prev => prev + 100);
  };

  const resetSteps = () => {
    setSteps(0);
  };

  const progress = Math.min((steps / 10000) * 100, 100);

  return (
    <div className="card step-counter">
      <h2>Step Counter</h2>
      <div 
        className="step-circle" 
        style={{ '--progress': `${progress}%` }}
      >
        <div className="step-count">{steps}</div>
      </div>
      <p>Goal: 10,000 steps</p>
      <div className="water-controls">
        <button className="btn" onClick={addSteps}>Add 100 Steps</button>
        <button className="btn" onClick={resetSteps}>Reset</button>
      </div>
    </div>
  );
};

export default StepCounter;