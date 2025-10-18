import React from 'react';
import WaterIntake from '../components/WaterIntake';
import StepCounter from '../components/StepCounter';
import MedicineReminder from '../components/MedicineReminder';
import HealthAnalytics from '../components/HealthAnalytics';

const Home = () => {
  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      <div className="dashboard">
        <MedicineReminder />
        <WaterIntake />
        <StepCounter />
        <HealthAnalytics />
      </div>
    </div>
  );
};

export default Home;