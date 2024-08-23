// src/components/ContentEditor.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ContentEditor = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`/api/contents/${id}`)
        .then(response => {
          setTitle(response.data.title);
          setBody(response.data.body);
          setSelectedCategory(response.data.category);
          setTags(response.data.tags.join(', '));
        })
        .catch(error => console.error('Error fetching content:', error));
    }
    
    // Fetch categories
    axios.get('/api/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, [id]);

  const saveContent = () => {
    const content = {
      title,
      body,
      category: selectedCategory,
      tags: tags.split(',').map(tag => tag.trim()),
      image,
    };

    const request = id
      ? axios.put(`/api/contents/${id}`, content)
      : axios.post('/api/contents', content);

    request
      .then(() => navigate('/contents'))
      .catch(error => console.error('Error saving content:', error));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="content-editor container">
      <h2>{id ? 'Edit Content' : 'New Content'}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Content Body"
      ></textarea>

      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma-separated)"
      />

      <input 
        type="file" 
        onChange={handleImageUpload} 
      />

      <button onClick={saveContent}>Save</button>
    </div>
  );
};

export default ContentEditor;
