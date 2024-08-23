// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ContentList from './components/ContentList';
import ContentEditor from './components/ContentEditor';
import Navigation from './components/Navigation';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contents" element={<ContentList />} />
        <Route path="/edit/:id" element={<ContentEditor />} />
        <Route path="/new" element={<ContentEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
