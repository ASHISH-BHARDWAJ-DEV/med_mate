import React, { useState } from 'react';

const Exercise = () => {
  const [userType, setUserType] = useState('normal');
  
  const workoutPlans = {
    normal: [
      { day: 'Monday', exercises: ['Walking - 30 mins', 'Stretching - 15 mins'] },
      { day: 'Tuesday', exercises: ['Cycling - 30 mins', 'Light weights'] }
    ],
    senior: [
      { day: 'Monday', exercises: ['Chair exercises - 20 mins', 'Balance training'] },
      { day: 'Tuesday', exercises: ['Walking - 15 mins', 'Light stretching'] }
    ],
    weightLoss: [
      { day: 'Monday', exercises: ['Cardio - 45 mins', 'Strength training'] },
      { day: 'Tuesday', exercises: ['HIIT - 30 mins', 'Core exercises'] }
    ]
  };

  return (
    <div>
      <h1>Exercise & Workout Plans</h1>
      <div className="card">
        <h2>Select Your Plan</h2>
        <div className="form-group">
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="normal">Normal / Healthy</option>
            <option value="senior">Senior Citizen</option>
            <option value="weightLoss">Weight Loss</option>
            <option value="muscleGain">Muscle Gain</option>
          </select>
        </div>
      </div>

      <div className="card">
        <h2>Weekly Workout Plan</h2>
        {workoutPlans[userType]?.map((dayPlan, index) => (
          <div key={index} className="medicine-item">
            <h3>{dayPlan.day}</h3>
            <ul>
              {dayPlan.exercises.map((exercise, exIndex) => (
                <li key={exIndex}>{exercise}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;