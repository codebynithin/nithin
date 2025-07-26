const mongoose = require('mongoose');
const TopNavigationSchema = new mongoose.Schema({
  href: { type: String, required: true },
  icon: { type: String, required: true },
  label: { type: String, required: true },
});

module.exports = mongoose.model('top-navigation', TopNavigationSchema);
