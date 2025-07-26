import express, { Request, Response, Router } from 'express';
import QuickLink from '../schema/quick-link';
import { QuickLinkModel } from '@/model/quick-link.model';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const query = req.query?.name ? { name: { $regex: req.query.name, $options: 'i' } } : {};
    const links: QuickLinkModel[] = await QuickLink.find(query);
    const formattedLinks = links.map((link: QuickLinkModel) => ({
      href: link.href,
      icon: link.icon,
      name: link.name,
      target: link.target,
      id: link._id?.toString(),
    }));

    res.status(200).json(formattedLinks);
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to fetch quick links' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { href, icon, name, target }: QuickLinkModel = req.body;

    if (!href || !icon || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const link = new QuickLink({ href, icon, name, target });

    await link.save();

    res.status(201).json({ message: 'Quick link added successfully', link });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to add quick link' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { href, icon, name, target }: Partial<QuickLinkModel> = req.body;
    const update: Partial<QuickLinkModel> = {};

    if (href !== undefined) update.href = href;
    if (icon !== undefined) update.icon = icon;
    if (name !== undefined) update.name = name;
    if (target !== undefined) update.target = target;

    const link = await QuickLink.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!link) {
      return res.status(404).json({ error: 'Quick link not found' });
    }

    res.status(200).json({ message: 'Quick link updated successfully', link });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update quick link' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted: QuickLinkModel | null = await QuickLink.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Quick link not found' });
    }

    res.status(200).json({ message: 'Quick link deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to delete quick link' });
  }
});

export default router;
