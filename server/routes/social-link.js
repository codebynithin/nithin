const express = require('express');
const social_link = require('../schema/social-link');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const links = await social_link.find();
    const formattedLinks = links.map((link) => ({
      href: link.href,
      icon: link.icon,
      label: link.label,
      id: link._id.toString(),
    }));

    res.status(200).json(formattedLinks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch social links' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { href, icon, label } = req.body;

    if (!href || !icon || !label) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const link = new social_link({ href, icon, label });

    await link.save();

    res.status(201).json({ message: 'Social link added successfully', link });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add social link' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { href, icon, label } = req.body;
    const update = {};

    if (href !== undefined) update.href = href;

    if (icon !== undefined) update.icon = icon;

    if (label !== undefined) update.label = label;

    const link = await social_link.findByIdAndUpdate(id, update, { new: true });

    if (!link) {
      return res.status(404).json({ error: 'Social link not found' });
    }

    res.status(200).json({ message: 'Social link updated successfully', link });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update social link' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await social_link.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Social link not found' });
    }

    res.status(200).json({ message: 'Social link deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete social link' });
  }
});

module.exports = router;
