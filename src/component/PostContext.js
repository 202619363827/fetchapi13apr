import React from 'react';

import { createContext, useState } from 'react';

export const PostContext = createContext();

 export function PostProvider({ children}) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
};