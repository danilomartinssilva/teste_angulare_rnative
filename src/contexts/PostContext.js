import React from 'react'
import { createContext } from 'react';
import { useContext, useState } from "react";

export const PostContext = createContext()

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  const addPost = post => {
    setPosts([...posts, post])
  }
  const setInitialAddPoss = items => {
    setPosts(items)
  }
  const deletePost = id => {
    setPosts([...posts.filter((o) => o.id !== id)])

  }
  const updatePost = (info) => {
    const { id } = info

    const postListeds = posts.map((item) => {
      if (item.id === id) {
        item = { id, ...info }
      }
      return item
    })
    setPosts(postListeds)
  }
  const updateOnlyBody = (info) => {
    const { id } = info

    const postListeds = posts.map((item) => {
      if (item.id === id) {
        item = { id, ...info }
      }
      return item
    })
    setPosts(postListeds)
  }

  return (
    <PostContext.Provider value={{ posts, addPost, setInitialAddPoss, deletePost, updatePost, updateOnlyBody }}>
      {children}

    </PostContext.Provider>
  )


}


export default PostProvider