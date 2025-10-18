const Medicine = require('../models/Medicine');

exports.create = async (req, res, next) => {
  try {
    const doc = new Medicine({ user: req.user.id, ...req.body });
    await doc.save();
    res.status(201).json(doc);
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const docs = await Medicine.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const doc = await Medicine.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, { $set: req.body }, { new: true });
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const doc = await Medicine.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
