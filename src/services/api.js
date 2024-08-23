// src/services/api.js
import axios from 'axios';

export const fetchContents = () => {
  return axios.get('/api/contents');
};

export const saveContent = (content, id) => {
  return id
    ? axios.put(`/api/contents/${id}`, content)
    : axios.post('/api/contents', content);
};
