const express = require('express');
const router = express.Router();
const TopNavigation = require('../models/top-navigation');

router.get('/', async (req, res) => {
  try {
    console.log('Fetching top navigation');
    const links = await TopNavigation.find();
    console.log('Fetched top navigation', links);
    const formattedLinks = links.map((link) => ({
      href: link.href,
      icon: link.icon,
      label: link.label,
      id: link._id,
    }));
    console.log('Formatted top navigation', formattedLinks);

    res.status(200).json(formattedLinks);
  } catch (err) {
    console.log('Failed to fetch top navigation', err);
    res.status(500).json({ error: 'Failed to fetch top navigation' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { href, icon, label } = req.body;

    if (!href || !icon || !label) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const link = new TopNavigation({ href, icon, label });

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

    const updated = await TopNavigation.findByIdAndUpdate(id, update, { new: true });

    if (!updated) {
      return res.status(404).json({ error: 'Top navigation not found' });
    }

    res.status(200).json({ message: 'Top navigation updated successfully', link: updated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update top navigation' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TopNavigation.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Top navigation not found' });
    }

    res.status(200).json({ message: 'Top navigation deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete top navigation' });
  }
});

module.exports = router;
