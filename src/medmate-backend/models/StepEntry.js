const mongoose = require('mongoose');

const stepEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true }, // format YYYY-MM-DD for easy grouping
  steps: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

stepEntrySchema.index({ user: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('StepEntry', stepEntrySchema);
