// Vue.js
import React from 'react';
import './Vue.css'; // Import du CSS pour Vue

const Vue = ({ children }) => {
  return (
    <div className="vue-container">
      <div className="vue-header">
        <h2>Manage Your Tasks</h2>
      </div>
      <div className="vue-buttons">
        <button>All Tasks</button>
        <button>Work</button>
        <button>Personal</button>
        <button>Settings</button>
      </div>
      <div className="vue-content">
        {children}
      </div>
    </div>
  );
};

export default Vue;
