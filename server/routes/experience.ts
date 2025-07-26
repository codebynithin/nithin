import express, { Request, Response, Router } from 'express';
import { ExperienceModel } from '../../common/model/experience.model';
import Experience from '../schema/experience';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const experiences: ExperienceModel[] = await Experience.find();
    const formattedLinks = experiences.map((experience: ExperienceModel) => ({
      date: experience.date,
      title: experience.title,
      company: experience.company,
      description: experience.description,
      id: experience._id?.toString(),
    }));

    res.status(200).json(formattedLinks);
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to fetch social links' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { date, title, company, description }: ExperienceModel = req.body;

    if (!date || !title || !company || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const experience = new Experience({ date, title, company, description });

    await experience.save();

    res.status(201).json({ message: 'Experience added successfully', experience });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to add social link' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { date, title, company, description }: Partial<ExperienceModel> = req.body;
    const update: Partial<ExperienceModel> = {};

    if (date !== undefined) update.date = date;
    if (title !== undefined) update.title = title;
    if (company !== undefined) update.company = company;
    if (description !== undefined) update.description = description;

    const updated = await Experience.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ error: 'Experience not found' });
    }

    res.status(200).json({ message: 'Experience updated successfully', updated });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update experience' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Experience.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Experience not found' });
    }

    res.status(200).json({ message: 'Experience deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to delete experience' });
  }
});

export default router;
