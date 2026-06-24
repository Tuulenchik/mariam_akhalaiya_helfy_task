import { useEffect, useState } from 'react';
import { httpGetTasks, httpPostTask, httpDeleteTask, httpPatchTask, httpPutTask } from './services/tasksApi';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  async function loadTasks() {
    try {
      setLoading(true);
      setError('');

      const loadedTasks = await httpGetTasks();
      setTasks(loadedTasks);
    } catch (err) {
      console.error(err);
      setError('Could not load tasks');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTask(task) {
  try {
    setError('');

    const newTask = await httpPostTask(task);

    setTasks((prevTasks) => [...prevTasks, newTask]);
  } catch (err) {
    console.error(err);
    setError('Could not add task');
    }
  } 

  async function deleteTask(id) {
  try {
    setError('');

    await httpDeleteTask(id);

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  } catch (err) {
    console.error(err);
    setError('Could not delete task');
  }
  }

  async function toggleTask(id) {
  try {
    setError('');

    const updatedTask = await httpPatchTask(id);

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? updatedTask : task
      )
    );
  } catch (err) {
    console.error(err);
    setError('Could not update task status');
  }
  }

  async function updateTask(id, updatedTaskData) {
  try {
    setError('');

    const updatedTask = await httpPutTask(id, updatedTaskData);

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? updatedTask : task
      )
    );
  } catch (err) {
    console.error(err);
    setError('Could not update task');
  }
  }

  const filteredTasks = tasks.filter((task) => {
  if (filter === 'completed') {
    return task.completed;
  }

  if (filter === 'pending') {
    return !task.completed;
  }

  return true;
  });
  
  return (
    <main>
      <h1>Task Manager</h1>

      <TaskForm onAddTask={addTask} />
      <TaskFilter
        currentFilter={filter}
        onChangeFilter={setFilter}
      />
      {loading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
          onUpdateTask={updateTask}
        />
      )}
    </main>
  );
}

export default App;