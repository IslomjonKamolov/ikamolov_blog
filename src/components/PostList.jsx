import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostList = ({ posts }) => {
  const navigate = useNavigate();

  const handleClick = (postId) => {
    navigate(`/posts/${postId}`); // URL'ni yangilash
  };

  return (
    <div>
      <ul className='post__list'>
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
