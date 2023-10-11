import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
 try {
  const tasks = await Task.find({
    user: req.user.id,
  }).populate("user");
  res.send(tasks);
 } catch (error) {
  return res.status(500).json({message:"Something went wrong"})
 }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id,
  });
  const saveTask = await newTask.save();
  res.json(saveTask);
  } catch (error) {
    return res.status(500).json({message:"Something went wrong"})
  }
};

export const getTask = async (req, res) => {
  try {
    const taskFound = await Task.findById(req.params.id).populate("user");

    if (!taskFound) return res.status(404).json({ message: "Task not found" });
    res.json(taskFound);
  } catch (error) {
    return res.status(404).json({ message: "Task not found " });
  }
};

export const deleteTask = async (req, res) => {
  const taskFound = await Task.findByIdAndDelete(req.params.id);

  if (!taskFound) return res.status(404).json({ message: "Task not found" });
  return res.sendStatus(204);
};

export const updateTask = async (req, res) => {
 try {
  const taskFound = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!taskFound) return res.status(404).json({ message: "Task not found" });
  res.json(taskFound);
 } catch (error) {
  return res.status(404).json({message:"Task not found "})
 }
};
