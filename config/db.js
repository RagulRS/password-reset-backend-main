// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use the MONGO_URI from the environment variables
    await mongoose.connect('mongodb+srv://RagulRS:yellowflash@cluster0.ayal0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
