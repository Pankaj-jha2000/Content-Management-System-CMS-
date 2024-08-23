// src/components/ContentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContentList = () => {
  const [contents, setContents] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('/api/contents')
      .then(response => setContents(response.data))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  const filteredContents = contents.filter(content => 
    content.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="content-list container">
      <h2>Content List</h2>

      <input 
        type="text" 
        placeholder="Search by title..." 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul>
        {filteredContents.map(content => (
          <li key={content.id}>
            <h3>{content.title}</h3>
            <p>Status: {content.status}</p>
            <p>Date: {new Date(content.date).toLocaleDateString()}</p>
            <div className="actions">
              <Link to={`/edit/${content.id}`}>Edit</Link>
              <button>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination (if needed) */}
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ContentList;
