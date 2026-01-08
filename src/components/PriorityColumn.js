import TaskCard from "./TaskCard";

export default function PriorityColumn({title, type, color, tasks, setTasks, setEditTask}) {
  const filtered = tasks.filter(t => t.priority === type);

  
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    setTasks(tasks.filter(t => t.id !== id));
  };


  const handleStatusChange = (id) => {
    setTasks(
      tasks.map(t =>
        t.id === id ? { ...t, status: "completed" } : t
      )
    );
  };

  return (
    <div className={`priority-card ${color}`}>
      <h3>{title}</h3>

      {filtered.length === 0 ? (
        <p className="empty-text">No tasks</p>
      ) : (
        filtered.map(task => (
          <TaskCard key={task.id} task={task} onEdit={setEditTask} onDelete={handleDelete} onViewComplete={handleStatusChange}/>
        ))
      )}
    </div>
  );
}
