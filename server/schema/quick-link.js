const mongoose = require('mongoose');
const QuickLinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  href: { type: String, required: true },
  target: { type: String },
});

module.exports = mongoose.model('quick-link', QuickLinkSchema);
