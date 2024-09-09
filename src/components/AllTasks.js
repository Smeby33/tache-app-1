import React, { useState } from 'react';
import TaskItem from './TaskItem';
import './AllTasks.css';

const AllTasks = ({ tasks }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.priority === filter;
  });

  return (
    <div>
      <h2>All Tasks</h2>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('high')}>High Priority</button>
        <button onClick={() => setFilter('medium')}>Medium Priority</button>
        <button onClick={() => setFilter('low')}>Low Priority</button>
      </div>
      <div>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
