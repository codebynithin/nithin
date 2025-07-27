const express = require('express');
const quick_link = require('../schema/quick-link');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Quick Links
 *   description: API for managing quick links
 */
/**
 * @swagger
 * /api/v1/quick-links:
 *   get:
 *     summary: Retrieve a list of quick links
 *     tags: [Quick Links]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filter quick links by name (case-insensitive)
 *     responses:
 *       200:
 *         description: A list of quick links.
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
 *                   name: { type: string }
 *                   target: { type: string }
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/quick-links:
 *   post:
 *     summary: Create a new quick link
 *     tags: [Quick Links]
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
 *               name: { type: string }
 *               target: { type: string }
 *     responses:
 *       201:
 *         description: Quick link created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/quick-links/{id}:
 *   patch:
 *     summary: Update a quick link
 *     tags: [Quick Links]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quick link ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               href: { type: string }
 *               icon: { type: string }
 *               name: { type: string }
 *               target: { type: string }
 *     responses:
 *       200:
 *         description: Quick link updated successfully
 *       404:
 *         description: Quick link not found
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /api/v1/quick-links/{id}:
 *   delete:
 *     summary: Delete a quick link
 *     tags: [Quick Links]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quick link ID
 *     responses:
 *       200:
 *         description: Quick link deleted successfully
 *       404:
 *         description: Quick link not found
 *       500:
 *         description: Server error
 */
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
