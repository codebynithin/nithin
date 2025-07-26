const express = require('express');
const top_navigation = require('../schema/top-navigation');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const links = await top_navigation.find();
    const formattedLinks = links.map((link) => ({
      href: link.href,
      icon: link.icon,
      label: link.label,
      id: link._id.toString(),
    }));

    res.status(200).json(formattedLinks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch top navigation' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { href, icon, label } = req.body;

    if (!href || !icon || !label) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const link = new top_navigation({ href, icon, label });

    await link.save();

    res.status(201).json({ message: 'Top navigation added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add top navigation' });
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

    const link = await top_navigation.findByIdAndUpdate(id, update, { new: true });

    if (!link) {
      return res.status(404).json({ error: 'Top navigation not found' });
    }

    res.status(200).json({ message: 'Top navigation updated successfully', link });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update top navigation' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await top_navigation.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Top navigation not found' });
    }

    res.status(200).json({ message: 'Top navigation deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete top navigation' });
  }
});

module.exports = router;
