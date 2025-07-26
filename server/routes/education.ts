import express, { Request, Response, Router } from 'express';
import { EducationModel } from '../../common/model/education.model';
import Education from '../schema/education';
const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const educations: EducationModel[] = await Education.find();
    const formattedLinks = educations.map((education: EducationModel) => ({
      date: education.date,
      title: education.title,
      institution: education.institution,
      description: education.description,
      id: education._id?.toString(),
    }));

    res.status(200).json(formattedLinks);
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to fetch social links' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { date, title, institution, description }: EducationModel = req.body;

    if (!date || !title || !institution || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const education = new Education({ date, title, institution, description });

    await education.save();

    res.status(201).json({ message: 'Education added successfully', education });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to add social link' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { date, title, institution, description }: Partial<EducationModel> = req.body;
    const update: Partial<EducationModel> = {};

    if (date !== undefined) update.date = date;
    if (title !== undefined) update.title = title;
    if (institution !== undefined) update.institution = institution;
    if (description !== undefined) update.description = description;

    const updated = await Education.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ error: 'Education not found' });
    }

    res.status(200).json({ message: 'Education updated successfully', updated });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update education' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Education.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Education not found' });
    }

    res.status(200).json({ message: 'Education deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to delete education' });
  }
});

export default router;
