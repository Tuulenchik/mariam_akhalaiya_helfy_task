import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask, onToggleTask, onUpdateTask }) {
  if (tasks.length === 0) {
    return <p>No tasks yet</p>;
  }

  const shouldAnimate = tasks.length > 1;
  const carouselTasks = shouldAnimate ? [...tasks, ...tasks] : tasks;

  return (
    <section className="carousel-section">
      <h2>Tasks</h2>

      <div className="carousel-viewport">
        <div
          className={
            shouldAnimate
              ? 'carousel-track carousel-track-animated'
              : 'carousel-track carousel-track-static'
          }
        >
          {carouselTasks.map((task, index) => (
            <div className="carousel-slide" key={`${task.id}-${index}`}>
              <TaskItem
                task={task}
                onDeleteTask={onDeleteTask}
                onToggleTask={onToggleTask}
                onUpdateTask={onUpdateTask}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TaskList;