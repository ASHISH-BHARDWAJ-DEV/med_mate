import React, { useState } from 'react';

const LabReports = () => {
  const [reports, setReports] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newReports = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      date: new Date().toLocaleDateString(),
      type: file.type,
      size: file.size
    }));
    setReports(prev => [...prev, ...newReports]);
  };

  return (
    <div>
      <h1>Lab Reports</h1>
      <div className="card">
        <h2>Upload New Report</h2>
        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileUpload}
        />
      </div>

      <div className="card">
        <h2>Your Lab Reports</h2>
        <div className="reports-list">
          {reports.map(report => (
            <div key={report.id} className="medicine-item">
              <h3>{report.name}</h3>
              <p>Uploaded: {report.date}</p>
              <p>Type: {report.type}</p>
              <p>Size: {(report.size / 1024 / 1024).toFixed(2)} MB</p>
              <button className="btn">View</button>
              <button className="btn">Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabReports;