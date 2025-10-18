import React, { useState } from 'react';

const Nutrition = () => {
  const [weeklyPlan] = useState([
    {
      day: 'Monday',
      meals: [
        { time: '8:00 AM', food: 'Oatmeal with fruits', nutrients: { carbs: 45, protein: 12, fat: 8 } },
        { time: '1:00 PM', food: 'Grilled chicken salad', nutrients: { carbs: 20, protein: 35, fat: 15 } }
      ]
    }
  ]);

  return (
    <div>
      <h1>Nutrition & Diet Plan</h1>
      <div className="card">
        <h2>Weekly Meal Plan</h2>
        {weeklyPlan.map(dayPlan => (
          <div key={dayPlan.day} className="medicine-item">
            <h3>{dayPlan.day}</h3>
            {dayPlan.meals.map((meal, index) => (
              <div key={index}>
                <p><strong>{meal.time}:</strong> {meal.food}</p>
                <p>Carbs: {meal.nutrients.carbs}g | Protein: {meal.nutrients.protein}g | Fat: {meal.nutrients.fat}g</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Nutrient Intake</h2>
        <div className="nutrient-chart">
          <div className="nutrient-bar">
            <label>Carbohydrates</label>
            <div className="bar-container">
              <div className="bar" style={{width: '60%', background: '#e74c3c'}}></div>
            </div>
            <span>210g / 300g</span>
          </div>
          <div className="nutrient-bar">
            <label>Protein</label>
            <div className="bar-container">
              <div className="bar" style={{width: '75%', background: '#3498db'}}></div>
            </div>
            <span>90g / 120g</span>
          </div>
          <div className="nutrient-bar">
            <label>Fat</label>
            <div className="bar-container">
              <div className="bar" style={{width: '50%', background: '#f39c12'}}></div>
            </div>
            <span>45g / 90g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;