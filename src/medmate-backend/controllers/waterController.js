const WaterEntry = require('../models/WaterEntry');

/**
 * Add or update water intake for a date { date: 'YYYY-MM-DD', amountMl: 500 }
 */
exports.addOrUpdate = async (req, res, next) => {
  try {
    const { date, amountMl } = req.body;
    if (!date) return res.status(400).json({ message: 'date required' });

    const entry = await WaterEntry.findOneAndUpdate(
      { user: req.user.id, date },
      { $set: { amountMl } },
      { upsert: true, new: true }
    );
    res.json(entry);
  } catch (err) { next(err); }
};

exports.getByDate = async (req, res, next) => {
  try {
    const date = req.query.date;
    const q = { user: req.user.id };
    if (date) q.date = date;
    const entries = await WaterEntry.find(q).sort({ date: -1 });
    res.json(entries);
  } catch (err) { next(err); }
};
