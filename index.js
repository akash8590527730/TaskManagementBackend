const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/auth.js')
const taskRoutes = require('./routes/tasks.js')


const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

console.log('Database URI:', DB_URI);  // Log for debugging

// Connect to MongoDB without deprecated options
mongoose.connect(DB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

  app.use('/api/auth', authRoutes);
  app.use('/api/tasks', taskRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));