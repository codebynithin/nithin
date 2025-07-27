const express = require('express');
const social_link = require('../schema/social-link');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Social Links
 *   description: API for managing social links
 */

/**
 * @swagger
 * /api/v1/social-links:
 *   get:
 *     summary: Retrieve a list of social links
 *     tags: [Social Links]
 *     responses:
 *       200:
 *         description: A list of social links.
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

/**
 * @swagger
 * /api/v1/social-links:
 *   post:
 *     summary: Create a new social link
 *     tags: [Social Links]
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               href:
 *                 type: string
 *               icon:
 *                 type: string
 *               label:
 *                 type: string
 *     responses:
 *       201:
 *         description: Social link created successfully
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

    const link = new social_link({ href, icon, label });

    await link.save();

    res.status(201).json({ message: 'Social link added successfully', link });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add social link' });
  }
});

/**
 * @swagger
 * /api/v1/social-links/{id}:
 *   patch:
 *     summary: Update a social link
 *     tags: [Social Links]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The social link ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               href:
 *                 type: string
 *               icon:
 *                 type: string
 *               label:
 *                 type: string
 *     responses:
 *       200:
 *         description: Social link updated successfully
 *       404:
 *         description: Social link not found
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

    const link = await social_link.findByIdAndUpdate(id, update, { new: true });

    if (!link) {
      return res.status(404).json({ error: 'Social link not found' });
    }

    res.status(200).json({ message: 'Social link updated successfully', link });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update social link' });
  }
});

/**
 * @swagger
 * /api/v1/social-links/{id}:
 *   delete:
 *     summary: Delete a social link
 *     tags: [Social Links]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The social link ID
 *     responses:
 *       200:
 *         description: Social link deleted successfully
 *       404:
 *         description: Social link not found
 *       500:
 *         description: Server error
 */
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
