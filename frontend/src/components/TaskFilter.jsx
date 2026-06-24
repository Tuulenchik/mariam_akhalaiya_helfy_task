function TaskFilter({ currentFilter, onChangeFilter }) {
  return (
    <div className="task-filter">
      <button
        type="button"
        onClick={() => onChangeFilter('all')}
        disabled={currentFilter === 'all'}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => onChangeFilter('completed')}
        disabled={currentFilter === 'completed'}
      >
        Completed
      </button>

      <button
        type="button"
        onClick={() => onChangeFilter('pending')}
        disabled={currentFilter === 'pending'}
      >
        Pending
      </button>
    </div>
  );
}

export default TaskFilter;