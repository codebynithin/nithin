const express = require('express');
const skill_schema = require('../schema/skill.schema');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const skills = await skill_schema.find();
    const formattedSkills = skills.map((skill) => ({
      name: skill.name,
      category: skill.category,
      percentage: skill.percentage,
      subSkills: skill.subSkills,
      type: skill.type,
      id: skill._id.toString(),
    }));

    res.status(200).json(formattedSkills);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, category, percentage, subSkills, type } = req.body;

    if (!name || !category || !type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const skill = new skill_schema({ name, category, percentage, subSkills, type });

    await skill.save();

    res.status(201).json({ message: 'Skill added successfully', skill });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add skill' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, percentage, subSkills, type } = req.body;
    const update = {};

    if (name !== undefined) update.name = name;

    if (category !== undefined) update.category = category;

    if (percentage !== undefined) update.percentage = percentage;

    if (subSkills !== undefined) update.subSkills = subSkills;

    if (type !== undefined) update.type = type;

    const skill = await skill_schema.findByIdAndUpdate(id, update, { new: true });

    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    res.status(200).json({ message: 'Skill updated successfully', skill });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update skill' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await skill_schema.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete skill' });
  }
});

module.exports = router;
