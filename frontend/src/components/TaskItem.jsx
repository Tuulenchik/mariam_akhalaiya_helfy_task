import { useState } from 'react';

function TaskItem({ task, onDeleteTask, onToggleTask, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  function handleDelete() {
    const confirmed = window.confirm('Are you sure you want to delete this task?');

    if (confirmed) {
      onDeleteTask(task.id);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    await onUpdateTask(task.id, {
      title: title.trim(),
      description: description.trim(),
      priority,
    });

    setIsEditing(false);
  }

  function handleCancel() {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <article>
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <textarea
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

          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </article>
    );
  }

  return (
    <article className={`task-card ${task.completed ? 'task-card-completed' : ''}`}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <p>
        Priority:{' '}
        <span className={`priority-badge priority-${task.priority}`}>
            {task.priority}
        </span>
      </p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
    <div className="task-actions">
        <button type="button" onClick={() => onToggleTask(task.id)}>
        {task.completed ? 'Mark as pending' : 'Mark as completed'}
      </button>

      <button type="button" onClick={() => setIsEditing(true)}>
        Edit
      </button>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
      
    </article>
  );
}

export default TaskItem;