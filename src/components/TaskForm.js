// TaskForm.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import './Navbar.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium'); // Default to medium priority

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, priority, id: Date.now() });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Task title"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <div className='TaskItem' >
      <TaskItem/>
      </div>
     

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
