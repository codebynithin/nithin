const express = require('express');
const portfolio = require('../schema/portfolio');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const portfolios = await portfolio.find();
    const formattedPortfolios = portfolios.map((portfolio) => ({
      title: portfolio.title,
      category: portfolio.category,
      imageUrl: portfolio.imageUrl,
      thumbnailUrl: portfolio.thumbnailUrl,
      id: portfolio._id.toString(),
    }));

    res.status(200).json(formattedPortfolios);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch portfolios' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, category, imageUrl, thumbnailUrl } = req.body;

    if (!title || !category || !imageUrl || !thumbnailUrl) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const portfolio = new portfolio({ title, category, imageUrl, thumbnailUrl });

    await portfolio.save();

    res.status(201).json({ message: 'Portfolio added successfully', portfolio });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add portfolio' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, imageUrl, thumbnailUrl } = req.body;
    const update = {};

    if (title !== undefined) update.title = title;

    if (category !== undefined) update.category = category;

    if (imageUrl !== undefined) update.imageUrl = imageUrl;

    if (thumbnailUrl !== undefined) update.thumbnailUrl = thumbnailUrl;

    const updated = await portfolio.findByIdAndUpdate(id, update, { new: true });

    if (!updated) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    res.status(200).json({ message: 'Portfolio updated successfully', updated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update portfolio' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await portfolio.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    res.status(200).json({ message: 'Portfolio deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete portfolio' });
  }
});

module.exports = router;
