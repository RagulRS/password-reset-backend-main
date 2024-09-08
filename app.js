const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is working well!');
});

app.use('/api/auth', authRoutes);

app.use(errorMiddleware);

module.exports = app;
