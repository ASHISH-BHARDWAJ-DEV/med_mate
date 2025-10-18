const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  phone: { type: String },
  dob: { type: Date },
  emergencyContact: { type: String },
  avatarUrl: { type: String }
});

module.exports = mongoose.model('Profile', profileSchema);
