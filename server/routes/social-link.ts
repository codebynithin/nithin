import express, { Request, Response, Router } from 'express';
import SocialLink from '../schema/social-link';
import { SocialLinkModel } from '@/model/social-link.model';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const links: SocialLinkModel[] = await SocialLink.find();
    const formattedLinks = links.map((link: SocialLinkModel) => ({
      href: link.href,
      icon: link.icon,
      label: link.label,
      id: link._id?.toString(),
    }));

    res.status(200).json(formattedLinks);
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to fetch social links' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { href, icon, label }: { href: string; icon: string; label: string } = req.body;

    if (!href || !icon || !label) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const link = new SocialLink({ href, icon, label });

    await link.save();

    res.status(201).json({ message: 'Social link added successfully', link });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to add social link' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { href, icon, label }: Partial<SocialLinkModel> = req.body;
    const update: Partial<SocialLinkModel> = {};

    if (href !== undefined) update.href = href;
    if (icon !== undefined) update.icon = icon;
    if (label !== undefined) update.label = label;

    const link = await SocialLink.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!link) {
      return res.status(404).json({ error: 'Social link not found' });
    }

    res.status(200).json({ message: 'Social link updated successfully', link });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update social link' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted: SocialLinkModel | null = await SocialLink.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Social link not found' });
    }

    res.status(200).json({ message: 'Social link deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to delete social link' });
  }
});

export default router;
