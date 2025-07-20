require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./db');
const { seed } = require('./scripts/add-social-links');

app.use(cors());
app.use(express.json());
app.use('/api/social-links', require('./routes/socialLinks'));
app.use('/api/top-navigations', require('./routes/topNavigations'));
app.get('/', (req, res) => {
  res.send('Nithin backend running');
});

connectDB()
  .then(async () => {
    console.log('MongoDB connected');

    await seed();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
