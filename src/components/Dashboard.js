// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => (
  <div className="dashboard container">
    <h1>CMS Dashboard</h1>
    
    <div className="summary">
      <div className="summary-item">
        <h2>Total Articles</h2>
        <p>150</p>
      </div>
      <div className="summary-item">
        <h2>Published</h2>
        <p>120</p>
      </div>
      <div className="summary-item">
        <h2>Drafts</h2>
        <p>30</p>
      </div>
    </div>

    <div className="recent-activities">
      <h2>Recent Activities</h2>
      <ul>
        <li>Edited "Understanding React Hooks" - 2 hours ago</li>
        <li>Published "Introduction to CSS Grid" - 1 day ago</li>
        <li>Created "JavaScript ES2023 Features" - 3 days ago</li>
      </ul>
    </div>

    <div className="quick-actions">
      <button>New Article</button>
      <button>Manage Categories</button>
    </div>
  </div>
);

export default Dashboard;
