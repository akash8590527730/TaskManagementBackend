// const express = require('express');
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const router = express.Router();

// router.post('/register', async (req, res) => {
//   const { email, password } = req.body;
//   const existingUser = await User.findOne({ email });
  
//   if (existingUser) return res.status(400).json({ message: 'User already exists' });
  
//   const user = new User({ email, password });
//   await user.save();

//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//   res.status(201).json({ token });
// });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
  
//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ message: 'Invalid credentials' });
  
//   const isMatch = await user.comparePassword(password);
//   if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//   res.status(200).json({ token });
// });

// module.exports = router;
