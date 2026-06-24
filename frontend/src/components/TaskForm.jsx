import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const task = {
      title: title.trim(),
      description: description.trim(),
      priority,
    };

    await onAddTask(task);

    setTitle('');
    setDescription('');
    setPriority('medium');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add new task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;