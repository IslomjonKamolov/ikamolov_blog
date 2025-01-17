import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase'; // Firebase'dan db import qilish
import PostList from '../components/PostList'; // PostList component
import PostDetail from '../components/PostDetail'; // PostDetail component

const PostsPage = () => {
  const { id } = useParams(); // URL'dan post id'ni olish
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  useEffect(() => {
    // Barcha postlarni yaratish va createdAt bo'yicha tartiblashtirish
    const fetchPosts = async () => {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc')); // createdAt bo'yicha kamayish tartibida
      const querySnapshot = await getDocs(q);
      const postsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList);

      // Agar id bo'lmasa, eng oxirgi postni olish (ya'ni eng so'nggi post)
      if (!id && postsList.length > 0) {
        setPost(postsList[0]); // Eng yangi postni saqlash
      }
    };

    fetchPosts();
  }, [id]);

  useEffect(() => {
    // Agar `id` mavjud bo'lsa, o'sha postni olish
    if (id) {
      const fetchPost = async () => {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          console.log('Post topilmadi');
        }
      };

      fetchPost();
    }
  }, [id]);

  if (isOpenMenu) {
    document.body.style.overflow = 'hidden';
  } else{
    document.body.style.overflow = 'auto';
  }
  return (
    <div className='PostPage__main--container'>
      <button className='postPage__menuBtn' onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8h15M5 16h22M5 24h22M5 11l3-3-3-3"
            />{" "}
          </g>
        </svg>
      </button>
      {/* Left qism: PostList */}
      <div className='PostList__container' style={{ left: isOpenMenu ? '0px' : '-100%', opacity: isOpenMenu ? "1" : "0"}}>
        <PostList posts={posts} setIsOpenMenu={setIsOpenMenu} />
      </div>

      {/* Right qism: PostDetail */}
      <div className='PostDetail__container'>
        {post ? (
          <PostDetail post={post} />
        ) : (
          <div className='select__post__details'>Select a post to view details</div>
        )}
      </div>
    </div>
  );
};

export default PostsPage;
