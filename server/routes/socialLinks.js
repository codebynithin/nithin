const express = require('express');
const router = express.Router();
const SocialLink = require('../models/SocialLink');

// GET /api/social-links
router.get('/', async (req, res) => {
  try {
    const links = await SocialLink.find();
    const formattedLinks = links.map((link) => ({
      href: link.href,
      icon: link.icon,
      label: link.label,
      id: link._id,
    }));

    res.status(200).json(formattedLinks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch social links' });
  }
});

// POST /api/social-links
router.post('/', async (req, res) => {
  try {
    const { href, icon, label } = req.body;

    if (!href || !icon || !label) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const link = new SocialLink({ href, icon, label });

    await link.save();

    res.status(201).json({ message: 'Social link added successfully', link });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add social link' });
  }
});

// PATCH /api/social-links/:id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { href, icon, label } = req.body;
    const update = {};

    if (href !== undefined) update.href = href;
    if (icon !== undefined) update.icon = icon;
    if (label !== undefined) update.label = label;

    const updated = await SocialLink.findByIdAndUpdate(id, update, { new: true });

    if (!updated) {
      return res.status(404).json({ error: 'Social link not found' });
    }

    res.status(200).json({ message: 'Social link updated successfully', link: updated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update social link' });
  }
});

// DELETE /api/social-links/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SocialLink.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Social link not found' });
    }

    res.status(200).json({ message: 'Social link deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete social link' });
  }
});

module.exports = router;
