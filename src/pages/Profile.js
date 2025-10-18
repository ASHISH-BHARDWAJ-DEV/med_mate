import React from 'react';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <div className="card">
        <h2>Personal Information</h2>
        <form className="medicine-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" defaultValue="John Doe" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue="john@example.com" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" defaultValue="+1 (555) 123-4567" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" defaultValue="1985-01-15" />
          </div>
          <div className="form-group">
            <label>Emergency Contact</label>
            <input type="text" defaultValue="Jane Doe - +1 (555) 987-6543" />
          </div>
          <button type="submit" className="btn">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;