import React, { useState, useEffect, useContext } from 'react';
import { PostContext } from './PostContext';

const PostApi = () => {
  const [posts, setPosts] = useState([]);
  const postContext = useContext(PostContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handlePostClick = post => {
    postContext.setSelectedPost(post);
  };

  return (
    <div>
      <h1>Post API</h1>
      <ul>
        {posts.map(post => (
          <li
            key={post.id}
            onClick={() => handlePostClick(post)}
            style={{ cursor: 'pointer' }}
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostApi;
