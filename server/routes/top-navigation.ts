import express, { Request, Response, Router } from 'express';
import TopNavigation from '../schema/top-navigation';
import { TopNavigationModel } from '@/model/top-navigation.model';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const links: TopNavigationModel[] = await TopNavigation.find();
    const formattedLinks = links.map((link: TopNavigationModel) => ({
      href: link.href,
      icon: link.icon,
      label: link.label,
      id: link._id?.toString(),
    }));

    res.status(200).json(formattedLinks);
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to fetch top navigation' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { href, icon, label }: { href: string; icon: string; label: string } = req.body;

    if (!href || !icon || !label) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const link = new TopNavigation({ href, icon, label });

    await link.save();

    res.status(201).json({ message: 'Top navigation added successfully' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to add top navigation' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { href, icon, label }: Partial<TopNavigationModel> = req.body;
    const update: Partial<TopNavigationModel> = {};

    if (href !== undefined) update.href = href;
    if (icon !== undefined) update.icon = icon;
    if (label !== undefined) update.label = label;

    const link = await TopNavigation.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!link) {
      return res.status(404).json({ error: 'Top navigation not found' });
    }

    res.status(200).json({ message: 'Top navigation updated successfully', link });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update top navigation' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await TopNavigation.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Top navigation not found' });
    }

    res.status(200).json({ message: 'Top navigation deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to delete top navigation' });
  }
});

export default router;
