import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/medicine">Medicine Reminder</Link></li>
        <li><Link to="/lab-reports">Lab Reports</Link></li>
        <li><Link to="/nutrition">Nutrition Plan</Link></li>
        <li><Link to="/exercise">Exercise Plan</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;