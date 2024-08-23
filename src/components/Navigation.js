// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="container">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/contents">Content List</Link></li>
        <li><Link to="/new">New Content</Link></li>
      </ul>

      <div className="user-profile">
        <span>Welcome, Admin</span>
        <button>Logout</button>
      </div>
    </div>
  </nav>
);

export default Navigation;
