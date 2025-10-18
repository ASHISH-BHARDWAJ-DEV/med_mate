const mongoose = require('mongoose');

const waterEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true }, // YYYY-MM-DD
  amountMl: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

waterEntrySchema.index({ user: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('WaterEntry', waterEntrySchema);
