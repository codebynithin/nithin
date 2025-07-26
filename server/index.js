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
const app = express();
const PORT = process.env.SERVER_PORT || 5000;
app.use(cors());
app.use(express.json());
db.connectDB()
  .then(async () => {
    app.use('/api/v1/social-links', social_link);
    app.use('/api/v1/top-navigations', top_navigation);
    app.use('/api/v1/skills', skill);
    app.use('/api/v1/experiences', experience);
    app.use('/api/v1/educations', education);
    app.use('/api/v1/portfolios', portfolio);
    app.use('/api/v1/quick-links', quick_link);
    app.get('/api/v1', (req, res) => {
      res.send('Nithin backend running');
    });

    await add_data.seed();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
