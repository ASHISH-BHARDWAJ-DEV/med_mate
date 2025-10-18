import React, { useState, useEffect } from 'react';

const WaterIntake = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('waterIntake');
    if (saved) {
      setWaterIntake(parseInt(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('waterIntake', waterIntake.toString());
  }, [waterIntake]);

  const addWater = () => {
    setWaterIntake(prev => prev + 250);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const resetWater = () => {
    setWaterIntake(0);
  };

  const waterPercentage = Math.min((waterIntake / 2000) * 100, 100);

  return (
    <div className="card">
      <h2>Water Intake Tracker</h2>
      <div className={`water-bottle ${isAnimating ? 'shake' : ''}`}>
        <div 
          className="water-level" 
          style={{ height: `${waterPercentage}%` }}
        ></div>
      </div>
      <div className="water-info">
        <p>Total: {waterIntake}ml / 2000ml</p>
        <div className="water-controls">
          <button className="btn" onClick={addWater}>Add 250ml</button>
          <button className="btn btn-danger" onClick={resetWater}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default WaterIntake;