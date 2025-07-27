const express = require('express');
const top_navigation = require('../schema/top-navigation');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Top Navigation
 *   description: API for managing top navigation links
 */

/**
 * @swagger
 * /api/v1/top-navigations:
 *   get:
 *     summary: Retrieve a list of top navigation links
 *     tags: [Top Navigation]
 *     responses:
 *       200:
 *         description: A list of top navigation links.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id: { type: string }
 *                   href: { type: string }
 *                   icon: { type: string }
 *                   label: { type: string }
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/top-navigations:
 *   post:
 *     summary: Create a new top navigation link
 *     tags: [Top Navigation]
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               href: { type: string }
 *               icon: { type: string }
 *               label: { type: string }
 *     responses:
 *       201:
 *         description: Top navigation link created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/top-navigations/{id}:
 *   patch:
 *     summary: Update a top navigation link
 *     tags: [Top Navigation]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The top navigation link ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               href: { type: string }
 *               icon: { type: string }
 *               label: { type: string }
 *     responses:
 *       200:
 *         description: Top navigation link updated successfully
 *       404:
 *         description: Top navigation link not found
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/top-navigations/{id}:
 *   delete:
 *     summary: Delete a top navigation link
 *     tags: [Top Navigation]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The top navigation link ID
 *     responses:
 *       200:
 *         description: Top navigation link deleted successfully
 *       404:
 *         description: Top navigation link not found
 *       500:
 *         description: Server error
 */
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
