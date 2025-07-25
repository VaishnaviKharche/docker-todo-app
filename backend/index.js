app.post('/tasks', (req, res) => {
  const task = req.body.task;
  if (!task) return res.status(400).send('Task required');
  tasks.push({ task });
  res.json({ task });
});
