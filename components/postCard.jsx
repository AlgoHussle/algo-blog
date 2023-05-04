import React from 'react'

const postCard = ({ post }) => {
  return (
    <div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
    </div>
  )
}

export default postCard