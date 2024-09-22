const pool = require('../config/db');

// Fetch all posts
const getPosts = async () => {
  const res = await pool.query('SELECT * FROM posts');
  return res.rows;
};

// Fetch a single post by ID
const getPostById = async (id) => {
  const res = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
  return res.rows[0];
};

// Create a new post
const createPost = async (title, content) => {
  const res = await pool.query(
    'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  return res.rows[0];
};

// Update a post by ID
const updatePost = async (id, title, content) => {
  const res = await pool.query(
    'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
    [title, content, id]
  );
  return res.rows[0];
};

// Delete a post by ID
const deletePost = async (id) => {
  const res = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
