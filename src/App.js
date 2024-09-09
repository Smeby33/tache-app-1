import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Vue from './components/Vue';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Charger les tâches depuis localStorage au démarrage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Sauvegarder les tâches dans localStorage à chaque mise à jour
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompleteTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <Navbar />
      <Vue/>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask} />
    </div>
  );
}

export default App;
