const express = require('express');
const education = require('../schema/education');
const router = express.Router();

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
