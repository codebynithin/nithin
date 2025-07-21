require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const { connectDB } = require('./db');
const { seed } = require('./scripts/add-data');

app.use(cors());
app.use(express.json());

connectDB()
  .then(async () => {
    app.use('/api/v1/social-links', require('./routes/social-link'));
    app.use('/api/v1/top-navigations', require('./routes/top-navigation'));

    app.get('/api/v1', (req, res) => {
      res.send('Nithin backend running');
    });

    await seed();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
