import React from 'react';

const HealthAnalytics = () => {
  return (
    <div className="card">
      <h2>Health Analytics</h2>
      <div className="analytics-grid">
        <div className="metric">
          <h3>Heart Rate</h3>
          <p>72 bpm</p>
        </div>
        <div className="metric">
          <h3>Blood Pressure</h3>
          <p>120/80 mmHg</p>
        </div>
        <div className="metric">
          <h3>Sleep</h3>
          <p>7.5 hours</p>
        </div>
        <div className="metric">
          <h3>Calories</h3>
          <p>2,100 kcal</p>
        </div>
      </div>
    </div>
  );
};

export default HealthAnalytics;