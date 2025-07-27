const express = require('express');
const experience = require('../schema/experience');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Experience
 *   description: API for managing experience entries
 */

/**
 * @swagger
 * /api/v1/experiences:
 *   get:
 *     summary: Retrieve a list of experience entries
 *     tags: [Experience]
 *     responses:
 *       200:
 *         description: A list of experience entries.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id: { type: string }
 *                   date: { type: string }
 *                   title: { type: string }
 *                   company: { type: string }
 *                   description: { type: string }
 *       500:
 *         description: Server error
 */
router.get('/', async (req, res) => {
  try {
    const experiences = await experience.find();

    const formattedLinks = experiences.map((experience) => ({
      date: experience.date,
      title: experience.title,
      company: experience.company,
      description: experience.description,
      id: experience._id.toString(),
    }));

    res.status(200).json(formattedLinks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch social links' });
  }
});

/**
 * @swagger
 * /api/v1/experiences:
 *   post:
 *     summary: Create a new experience entry
 *     tags: [Experience]
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date: { type: string }
 *               title: { type: string }
 *               company: { type: string }
 *               description: { type: string }
 *     responses:
 *       201:
 *         description: Experience entry created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post('/', async (req, res) => {
  try {
    const { date, title, company, description } = req.body;

    if (!date || !title || !company || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const experience = new experience({ date, title, company, description });

    await experience.save();

    res.status(201).json({ message: 'Experience added successfully', experience });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add social link' });
  }
});

/**
 * @swagger
 * /api/v1/experiences/{id}:
 *   patch:
 *     summary: Update an experience entry
 *     tags: [Experience]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The experience entry ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date: { type: string }
 *               title: { type: string }
 *               company: { type: string }
 *               description: { type: string }
 *     responses:
 *       200:
 *         description: Experience entry updated successfully
 *       404:
 *         description: Experience entry not found
 *       500:
 *         description: Server error
 */
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { date, title, company, description } = req.body;
    const update = {};

    if (date !== undefined) update.date = date;

    if (title !== undefined) update.title = title;

    if (company !== undefined) update.company = company;

    if (description !== undefined) update.description = description;

    const updated = await experience.findByIdAndUpdate(id, update, { new: true });

    if (!updated) {
      return res.status(404).json({ error: 'Experience not found' });
    }

    res.status(200).json({ message: 'Experience updated successfully', updated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update experience' });
  }
});

/**
 * @swagger
 * /api/v1/experiences/{id}:
 *   delete:
 *     summary: Delete an experience entry
 *     tags: [Experience]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The experience entry ID
 *     responses:
 *       200:
 *         description: Experience entry deleted successfully
 *       404:
 *         description: Experience entry not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await experience.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Experience not found' });
    }

    res.status(200).json({ message: 'Experience deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete experience' });
  }
});

module.exports = router;
