import { useState } from "react";

export default function TaskCard({task, onViewComplete, onEdit, onDelete }) {
  const [show, setShow] = useState(false);

  const priorityClass =
    task.priority === "High"
      ? "task-high"
      : task.priority === "Medium"
      ? "task-medium"
      : "task-low";

  return (
    <>
      <div className={`task-card ${priorityClass}`}>
        <h6 className="fw-bold mb-1">{task.title}</h6>
        <p className="task-desc">{task.description}</p>

        <div className="task-meta mb-2">📅 {task.date}</div>

        <span className={`badge ${task.status === "pending" ? "bg-warning text-dark"  : "bg-success"  }`} >
          {task.status}
        </span>

        <div className="task-actions mt-2 d-flex gap-2 flex-wrap">

          <button className="btn btn-primary btn-sm" onClick={() => setShow(true)} >View</button>


          <button className="btn btn-info btn-sm text-white"onClick={() => onEdit(task)}>Edit </button>

          <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id)}>Delete </button>
        </div>
      </div>

    
         {show && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h5>{task.title}</h5>

            <p><b>Description:</b> {task.description}</p>
            <p><b>Due Date:</b> {task.date}</p>
            <p><b>Priority:</b> {task.priority}</p>

            <p><b>Status:</b>{" "}
              <span className={`badge ${  task.status === "pending"? "bg-warning text-dark": "bg-success"}`}>
                {task.status}
              </span>
            </p>

            <div className="modal-actions mt-3 d-flex justify-content-end gap-2">
              
              {task.status === "pending" && (
                <button className="btn btn-success btn-sm" onClick={() => { onViewComplete(task.id);setShow(false); }}>
                  Mark as Completed
                </button>
              )}

              <button className="btn btn-secondary btn-sm" onClick={() => setShow(false)} >
             Close </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
