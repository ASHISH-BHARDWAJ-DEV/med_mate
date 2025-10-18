const Profile = require('../models/Profile');

exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    res.json(profile || {});
  } catch (err) { next(err); }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.avatarUrl = `/uploads/${req.file.filename}`;
    }
    const profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: data, user: req.user.id },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) { next(err); }
};
