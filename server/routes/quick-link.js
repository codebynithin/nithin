const express = require('express');
const quick_link = require('../schema/quick-link');
const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const query = req.query?.name ? { name: { $regex: req.query.name, $options: 'i' } } : {};

    const links = await quick_link.find(query);

    const formattedLinks = links.map((link) => ({
      href: link.href,
      icon: link.icon,
      name: link.name,
      target: link.target,
      id: link._id.toString(),
    }));

    res.status(200).json(formattedLinks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quick links' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { href, icon, name, target } = req.body;

    if (!href || !icon || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const link = new quick_link({ href, icon, name, target });

    await link.save();

    res.status(201).json({ message: 'Quick link added successfully', link });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add quick link' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { href, icon, name, target } = req.body;
    const update = {};

    if (href !== undefined) update.href = href;

    if (icon !== undefined) update.icon = icon;

    if (name !== undefined) update.name = name;

    if (target !== undefined) update.target = target;

    const link = await quick_link.default.findByIdAndUpdate(id, update, { new: true });

    if (!link) {
      return res.status(404).json({ error: 'Quick link not found' });
    }

    res.status(200).json({ message: 'Quick link updated successfully', link });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update quick link' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await quick_link.default.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Quick link not found' });
    }

    res.status(200).json({ message: 'Quick link deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete quick link' });
  }
});

module.exports = router;
