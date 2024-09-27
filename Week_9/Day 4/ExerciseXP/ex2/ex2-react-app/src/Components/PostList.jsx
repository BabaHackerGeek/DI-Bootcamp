import React, { useState, useEffect } from 'react';
import postsData from './posts.json'; // Import the JSON file

function PostList() {
  const [posts, setPosts] = useState([]);

  // Use useEffect to mimic fetching data
  useEffect(() => {
    setPosts(postsData); // Set the imported JSON data to the state
  }, []);

  return (
    <div>
      <h1>Hi This is a Title</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
