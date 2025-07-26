import express, { Request, Response, Router } from 'express';
import { PortfolioModel } from '../../common/model/portfolio.model';
import Portfolio from '../schema/portfolio';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const portfolios: PortfolioModel[] = await Portfolio.find();
    const formattedPortfolios = portfolios.map((portfolio: PortfolioModel) => ({
      title: portfolio.title,
      category: portfolio.category,
      imageUrl: portfolio.imageUrl,
      thumbnailUrl: portfolio.thumbnailUrl,
      id: portfolio._id?.toString(),
    }));

    res.status(200).json(formattedPortfolios);
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to fetch portfolios' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, category, imageUrl, thumbnailUrl }: PortfolioModel = req.body;

    if (!title || !category || !imageUrl || !thumbnailUrl) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const portfolio = new Portfolio({ title, category, imageUrl, thumbnailUrl });

    await portfolio.save();

    res.status(201).json({ message: 'Portfolio added successfully', portfolio });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to add portfolio' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, category, imageUrl, thumbnailUrl }: Partial<PortfolioModel> = req.body;
    const update: Partial<PortfolioModel> = {};

    if (title !== undefined) update.title = title;
    if (category !== undefined) update.category = category;
    if (imageUrl !== undefined) update.imageUrl = imageUrl;
    if (thumbnailUrl !== undefined) update.thumbnailUrl = thumbnailUrl;

    const updated = await Portfolio.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    res.status(200).json({ message: 'Portfolio updated successfully', updated });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update portfolio' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Portfolio.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    res.status(200).json({ message: 'Portfolio deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to delete portfolio' });
  }
});

export default router;
