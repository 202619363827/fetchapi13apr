import React from 'react';
import PostApi from './component/PostApi';
import PostDetail from './component/PostDetail';
import { PostProvider } from './component/PostContext';

const App = () => {
  return (
    <div>
      <PostProvider>
        <PostApi />
        <PostDetail />
      </PostProvider>
    </div>
  );
};

export default App;