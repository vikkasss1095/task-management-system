import { useEffect, useState } from "react";

export default function TaskForm({ tasks, setTasks, editTask, setEditTask, user }) {
  const [form, setForm] = useState({ title: "" ,description: "", date: "",priority: "High" });


  useEffect(() => {
    if (editTask) {
      setForm({
        title: editTask.title,
        description: editTask.description,
        date: editTask.date,
        priority: editTask.priority
      });
    }
  }, [editTask]);

  const submitHandler = (e) => { e.preventDefault();

    let updated;
    if (editTask) {
      updated = tasks.map(t =>
        t.id === editTask.id
          ? { ...t, ...form }
          : t
      );
      setEditTask(null);
    } else {
      updated = [
        ...tasks,
        {
          ...form,
          id: Date.now(),
          status: "pending",
          userEmail: user.email
        }
      ];
    }

    setTasks(updated);
    setForm({ title: "", description: "", date: "", priority: "High" });
  };

  return (
    <form className="task-form-card" onSubmit={submitHandler}>
      <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Task Title"
        required />

      <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}placeholder="Task Description"/>

      <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required/>

      <select value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value })}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button className="btn btn-success">
        {editTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
