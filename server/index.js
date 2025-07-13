require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./db');

app.use(cors());
app.use(express.json());

// Social Links API
app.use('/api/social-links', require('./routes/socialLinks'));

// Top Navigation API
app.use('/api/top-navigations', require('./routes/topNavigations'));

// Example route (replace with your own routes)
app.get('/', (req, res) => {
  res.send('Nithin backend running');
});

// Connect to MongoDB

connectDB()
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
