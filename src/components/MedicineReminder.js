import React, { useState, useEffect, useCallback } from 'react';

const MedicineReminder = () => {
  const [reminders, setReminders] = useState([]);

  const checkReminders = useCallback(() => {
    const now = new Date();
    reminders.forEach(reminder => {
      const reminderTime = new Date(reminder.time);
      if (reminderTime > now && reminderTime - now <= 60000) {
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Medicine Reminder', {
            body: `Time to take ${reminder.medicineName}`
          });
        }
      }
    });
  }, [reminders]);

  useEffect(() => {
    const saved = localStorage.getItem('medicineReminders');
    if (saved) {
      setReminders(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('medicineReminders', JSON.stringify(reminders));
    checkReminders();
  }, [reminders, checkReminders]);

  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div className="card">
      <h2>Medicine Reminders</h2>
      <button className="btn" onClick={requestNotificationPermission}>
        Enable Notifications
      </button>
      <ul className="reminder-list">
        {reminders.map(reminder => (
          <li key={reminder.id} className="reminder-item">
            <strong>{reminder.medicineName}</strong>
            <div className="reminder-time">
              {new Date(reminder.time).toLocaleString()}
            </div>
            <div>Location: {reminder.location}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineReminder;