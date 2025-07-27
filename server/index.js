const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const cors = require('cors');
const db = require('./db');
const add_data = require('./scripts/add-data');
const social_link = require('./routes/social-link');
const top_navigation = require('./routes/top-navigation');
const skill = require('./routes/skill');
const experience = require('./routes/experience');
const education = require('./routes/education');
const portfolio = require('./routes/portfolio');
const quick_link = require('./routes/quick-link');
const auth = require('./middleware/auth');
const app = express();
const PORT = process.env.SERVER_PORT;
const { swaggerUi, swaggerSpec } = require('./swagger');

app.use(cors());
app.use(express.json());

db.connectDB()
  .then(async () => {
    app.use(
      '/api/v1/social-links',
      (req, res, next) => {
        if (req.method === 'GET') {
          return next();
        }
        auth(req, res, next);
      },
      social_link,
    );
    app.use(
      '/api/v1/top-navigations',
      (req, res, next) => {
        if (req.method === 'GET') {
          return next();
        }
        auth(req, res, next);
      },
      top_navigation,
    );
    app.use(
      '/api/v1/skills',
      (req, res, next) => {
        if (req.method === 'GET') {
          return next();
        }
        auth(req, res, next);
      },
      skill,
    );
    app.use(
      '/api/v1/experiences',
      (req, res, next) => {
        if (req.method === 'GET') {
          return next();
        }
        auth(req, res, next);
      },
      experience,
    );
    app.use(
      '/api/v1/educations',
      (req, res, next) => {
        if (req.method === 'GET') {
          return next();
        }
        auth(req, res, next);
      },
      education,
    );
    app.use(
      '/api/v1/portfolios',
      (req, res, next) => {
        if (req.method === 'GET') {
          return next();
        }
        auth(req, res, next);
      },
      portfolio,
    );
    app.use(
      '/api/v1/quick-links',
      (req, res, next) => {
        if (req.method === 'GET') {
          return next();
        }
        auth(req, res, next);
      },
      quick_link,
    );
    app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    await add_data.seed();

    app.listen(PORT, () => console.log('Server started successfully 😊'));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
