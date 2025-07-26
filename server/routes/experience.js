const express = require('express');
const experience = require('../schema/experience');
const router = express.Router();

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
