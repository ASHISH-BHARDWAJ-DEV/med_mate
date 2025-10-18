import React, { useState, useEffect } from 'react';

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    dosage: '',
    frequency: '',
    time: '',
    location: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('medicines');
    if (saved) {
      setMedicines(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('medicines', JSON.stringify(medicines));
  }, [medicines]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedicine = {
      id: Date.now(),
      ...formData
    };
    setMedicines(prev => [...prev, newMedicine]);
    setFormData({
      name: '',
      dosage: '',
      frequency: '',
      time: '',
      location: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Medicine Management</h1>
      <div className="card">
        <h2>Add New Medicine</h2>
        <form onSubmit={handleSubmit} className="medicine-form">
          <div className="form-group">
            <label>Medicine Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Dosage</label>
            <input
              type="text"
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Frequency</label>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              required
            >
              <option value="">Select Frequency</option>
              <option value="Once Daily">Once Daily</option>
              <option value="Twice Daily">Twice Daily</option>
              <option value="Three Times Daily">Three Times Daily</option>
              <option value="As Needed">As Needed</option>
            </select>
          </div>
          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Where to take medicine"
            />
          </div>
          <button type="submit" className="btn">Add Medicine</button>
        </form>
      </div>

      <div className="medicine-list">
        <h2>Your Medicines</h2>
        {medicines.map(medicine => (
          <div key={medicine.id} className="medicine-item">
            <h3>{medicine.name}</h3>
            <p>Dosage: {medicine.dosage}</p>
            <p>Frequency: {medicine.frequency}</p>
            <p>Time: {medicine.time}</p>
            <p>Location: {medicine.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicine;