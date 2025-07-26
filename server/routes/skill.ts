import express, { Request, Response, Router } from 'express';
import Skill from '../schema/skill.schema';
import { SkillModel } from '@/model/skill.model';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const skills: SkillModel[] = await Skill.find();
    const formattedSkills = skills.map((skill: SkillModel) => ({
      name: skill.name,
      category: skill.category,
      percentage: skill.percentage,
      subSkills: skill.subSkills,
      type: skill.type,
      id: skill._id?.toString(),
    }));

    res.status(200).json(formattedSkills);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, category, percentage, subSkills, type }: SkillModel = req.body;

    if (!name || !category || !type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const skill = new Skill({ name, category, percentage, subSkills, type });

    await skill.save();

    res.status(201).json({ message: 'Skill added successfully', skill });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to add skill' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, category, percentage, subSkills, type }: Partial<SkillModel> = req.body;
    const update: Partial<SkillModel> = {};

    if (name !== undefined) update.name = name;
    if (category !== undefined) update.category = category;
    if (percentage !== undefined) update.percentage = percentage;
    if (subSkills !== undefined) update.subSkills = subSkills;
    if (type !== undefined) update.type = type;

    const skill = await Skill.findByIdAndUpdate(id, update, { new: true });

    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    res.status(200).json({ message: 'Skill updated successfully', skill });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update skill' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Skill.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to delete skill' });
  }
});

export default router;
