const express = require('express');
const portfolio = require('../schema/portfolio');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Portfolio
 *   description: API for managing portfolio items
 */

/**
 * @swagger
 * /api/v1/portfolios:
 *   get:
 *     summary: Retrieve a list of portfolio items
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: A list of portfolio items.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id: { type: string }
 *                   title: { type: string }
 *                   category: { type: string }
 *                   imageUrl: { type: string }
 *                   thumbnailUrl: { type: string }
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/portfolios:
 *   post:
 *     summary: Create a new portfolio item
 *     tags: [Portfolio]
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               category: { type: string }
 *               imageUrl: { type: string }
 *               thumbnailUrl: { type: string }
 *     responses:
 *       201:
 *         description: Portfolio item created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/portfolios/{id}:
 *   patch:
 *     summary: Update a portfolio item
 *     tags: [Portfolio]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The portfolio item ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               category: { type: string }
 *               imageUrl: { type: string }
 *               thumbnailUrl: { type: string }
 *     responses:
 *       200:
 *         description: Portfolio item updated successfully
 *       404:
 *         description: Portfolio item not found
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/portfolios/{id}:
 *   delete:
 *     summary: Delete a portfolio item
 *     tags: [Portfolio]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The portfolio item ID
 *     responses:
 *       200:
 *         description: Portfolio item deleted successfully
 *       404:
 *         description: Portfolio item not found
 *       500:
 *         description: Server error
 */
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
