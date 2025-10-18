const StepEntry = require('../models/StepEntry');

/**
 * Add or update steps for a date (YYYY-MM-DD)
 * body: { date: '2025-10-18', steps: 500 }
 */
exports.addOrUpdate = async (req, res, next) => {
  try {
    const { date, steps } = req.body;
    if (!date) return res.status(400).json({ message: 'date required (YYYY-MM-DD)' });

    const entry = await StepEntry.findOneAndUpdate(
      { user: req.user.id, date },
      { $set: { steps } },
      { upsert: true, new: true }
    );
    res.json(entry);
  } catch (err) { next(err); }
};

exports.getByDate = async (req, res, next) => {
  try {
    const date = req.query.date; // optional
    const q = { user: req.user.id };
    if (date) q.date = date;
    const entries = await StepEntry.find(q).sort({ date: -1 });
    res.json(entries);
  } catch (err) { next(err); }
};
