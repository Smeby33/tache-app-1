import React from 'react';
import './TaskItem.css'


function TaskItem({ task, deleteTask, toggleCompleteTask }) {
        if (!task) {
          return <div></div>;
        }
       
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <input type="checkbox" checked={task.completed} />
      <span>{task.name}</span>
      <button onClick={() => toggleCompleteTask(task.id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;

