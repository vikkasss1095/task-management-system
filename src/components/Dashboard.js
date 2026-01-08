import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import PriorityColumn from "./PriorityColumn";

export default function Dashboard({ user }) {

  
  const [allTasks, setAllTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );


  const [tasks, setTasks] = useState([]);


  const [editTask, setEditTask] = useState(null);


  useEffect(() => {
    const userTasks = allTasks.filter(
      task => task.userEmail === user.email
    );
    setTasks(userTasks);
  }, [allTasks, user.email]);


  const updateTasks = (updatedUserTasks) => {
    const otherUsersTasks = allTasks.filter(
      task => task.userEmail !== user.email
    );

    const finalTasks = [...otherUsersTasks, ...updatedUserTasks];
    setAllTasks(finalTasks);
    localStorage.setItem("tasks", JSON.stringify(finalTasks));
  };

  return (
    <div className="dashboard-page">

      <TaskForm tasks={tasks} setTasks={updateTasks} editTask={editTask} setEditTask={setEditTask}
        user={user}/>

      <div className="priority-grid">
        <PriorityColumn title="High Priority" type="High" tasks={tasks} setTasks={updateTasks}
          setEditTask={setEditTask} />

        <PriorityColumn title="Medium Priority" type="Medium" tasks={tasks} setTasks={updateTasks}
          setEditTask={setEditTask}/>

        <PriorityColumn title="Low Priority" type="Low" tasks={tasks} setTasks={updateTasks} setEditTask={setEditTask} />
      </div>
    </div>
  );
}
