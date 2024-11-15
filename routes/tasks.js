// const express = require('express');
// const Task = require('../models/Task');
// const router = express.Router();

// // Get tasks with pagination
// router.get('/', async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = 5;
//   const tasks = await Task.find()
//     .skip((page - 1) * limit)
//     .limit(limit)
//     .sort({ createdAt: -1 });

//   const totalTasks = await Task.countDocuments();
//   const totalPages = Math.ceil(totalTasks / limit);

//   res.json({ tasks, totalPages });
// });

// // Create a new task
// router.post('/', async (req, res) => {
//   const { title, description, startDate, endDate, status, progress, reminder } = req.body;
//   const newTask = new Task({ title, description, startDate, endDate, status, progress, reminder });
//   await newTask.save();
//   res.status(201).json(newTask);
// });

// // Update task
// router.put('/:id', async (req, res) => {
//   const { title, description, startDate, endDate, status, progress, reminder } = req.body;
//   const updatedTask = await Task.findByIdAndUpdate(req.params.id, { title, description, startDate, endDate, status, progress, reminder }, { new: true });
//   res.status(200).json(updatedTask);
// });

// // Delete task
// router.delete('/:id', async (req, res) => {
//   await Task.findByIdAndDelete(req.params.id);
//   res.status(204).send();
// });

// module.exports = router;
