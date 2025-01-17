import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostList = ({ posts, setIsOpenMenu }) => {
  const navigate = useNavigate();

  const handleClick = (postId) => {
    navigate(`/posts/${postId}`); // URL'ni yangilash
  };

  return (
    <div>
      <ul className='post__list'>
        <button className='post__list--closeBtn' onClick={() => setIsOpenMenu(false)}>×</button>
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
        {posts.map(post => (
          <li className='post__item' key={post.id} onClick={() => handleClick(post.id)}>
            {post.title}
          </li>
        ))}
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
