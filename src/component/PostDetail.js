import React, { useContext } from 'react';
import { PostContext } from './PostContext';

const PostDetail = () => {
  const { selectedPost } = useContext(PostContext);

  // Simple if-else statement for conditional rendering
  if (selectedPost) {
    return (
      <div>
        <h1>Post Detail</h1>
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Post Detail</h1>
        <p>No post selected</p>
      </div>
    );
  }
};

export default PostDetail;