const LabReport = require('../models/LabReport');
const fs = require('fs');
const path = require('path');

exports.upload = async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'File required' });
    const doc = new LabReport({
      user: req.user.id,
      originalName: req.file.originalname,
      filename: req.file.filename,
      path: req.file.path,
      mimeType: req.file.mimetype,
      size: req.file.size
    });
    await doc.save();
    res.status(201).json(doc);
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const docs = await LabReport.find({ user: req.user.id }).sort({ uploadedAt: -1 });
    res.json(docs);
  } catch (err) { next(err); }
};

exports.download = async (req, res, next) => {
  try {
    const doc = await LabReport.findOne({ _id: req.params.id, user: req.user.id });
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.download(path.resolve(doc.path), doc.originalName);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const doc = await LabReport.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!doc) return res.status(404).json({ message: 'Not found' });
    // delete file from disk
    fs.unlink(doc.path, (err) => { if (err) console.warn('unlink error', err); });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
