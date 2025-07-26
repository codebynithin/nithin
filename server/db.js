const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in the environment variables');
    }
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    throw error;
  }
};
module.exports.connectDB = connectDB;
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
