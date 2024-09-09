import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, deleteTask, toggleCompleteTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleCompleteTask={toggleCompleteTask} 
        />
      ))}
    </div>
  );
}

export default TaskList;
