import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <ul className="nav-links">
        <li><a href="#all">All Tasks</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#personal">Personal</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
