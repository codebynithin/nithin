import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import { connectDB } from './db';
import { seed } from './scripts/add-data';
import socialLinkRouter from './routes/social-link';
import topNavigationRouter from './routes/top-navigation';
import skillRouter from './routes/skill';
import experienceRouter from './routes/experience';
import educationRouter from './routes/education';
import portfolioRouter from './routes/portfolio';

const app: Application = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB()
  .then(async () => {
    app.use('/api/v1/social-links', socialLinkRouter);
    app.use('/api/v1/top-navigations', topNavigationRouter);
    app.use('/api/v1/skills', skillRouter);
    app.use('/api/v1/experiences', experienceRouter);
    app.use('/api/v1/educations', educationRouter);
    app.use('/api/v1/portfolios', portfolioRouter);
    app.get('/api/v1', (req: Request, res: Response) => {
      res.send('Nithin backend running');
    });

    await seed();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err: any) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
