const postModel = require('../models/postModel');

const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.getPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await postModel.getPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the post' });
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await postModel.createPost(title, content);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedPost = await postModel.updatePost(req.params.id, title, content);
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};

const deletePost = async (req, res) => {
  try {
    const deletedPost = await postModel.deletePost(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };
