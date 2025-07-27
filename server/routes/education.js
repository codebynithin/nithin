const express = require('express');
const education = require('../schema/education');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Education
 *   description: API for managing education entries
 */

/**
 * @swagger
 * /api/v1/educations:
 *   get:
 *     summary: Retrieve a list of education entries
 *     tags: [Education]
 *     responses:
 *       200:
 *         description: A list of education entries.
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
 *                   institution: { type: string }
 *                   description: { type: string }
 *       500:
 *         description: Server error
 */
router.get('/', async (req, res) => {
  try {
    const educations = await education.find();

    const formattedLinks = educations.map((education) => ({
      date: education.date,
      title: education.title,
      institution: education.institution,
      description: education.description,
      id: education._id.toString(),
    }));

    res.status(200).json(formattedLinks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch social links' });
  }
});

/**
 * @swagger
 * /api/v1/educations:
 *   post:
 *     summary: Create a new education entry
 *     tags: [Education]
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
 *               institution: { type: string }
 *               description: { type: string }
 *     responses:
 *       201:
 *         description: Education entry created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post('/', async (req, res) => {
  try {
    const { date, title, institution, description } = req.body;

    if (!date || !title || !institution || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const education = new education({ date, title, institution, description });

    await education.save();

    res.status(201).json({ message: 'Education added successfully', education });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add social link' });
  }
});

/**
 * @swagger
 * /api/v1/educations/{id}:
 *   patch:
 *     summary: Update an education entry
 *     tags: [Education]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The education entry ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date: { type: string }
 *               title: { type: string }
 *               institution: { type: string }
 *               description: { type: string }
 *     responses:
 *       200:
 *         description: Education entry updated successfully
 *       404:
 *         description: Education entry not found
 *       500:
 *         description: Server error
 */
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { date, title, institution, description } = req.body;
    const update = {};

    if (date !== undefined) update.date = date;

    if (title !== undefined) update.title = title;

    if (institution !== undefined) update.institution = institution;

    if (description !== undefined) update.description = description;

    const updated = await education.findByIdAndUpdate(id, update, { new: true });

    if (!updated) {
      return res.status(404).json({ error: 'Education not found' });
    }

    res.status(200).json({ message: 'Education updated successfully', updated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update education' });
  }
});

/**
 * @swagger
 * /api/v1/educations/{id}:
 *   delete:
 *     summary: Delete an education entry
 *     tags: [Education]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The education entry ID
 *     responses:
 *       200:
 *         description: Education entry deleted successfully
 *       404:
 *         description: Education entry not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await education.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Education not found' });
    }

    res.status(200).json({ message: 'Education deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete education' });
  }
});

module.exports = router;
