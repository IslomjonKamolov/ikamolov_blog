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

  return (
    <div className='PostPage__main--container'>
      <button className='postPage__menuBtn' onClick={() => setIsOpenMenu(!isOpenMenu)}>=</button>
      {/* Left qism: PostList */}
      <div className='PostList__container' style={{ left: isOpenMenu ? '0px' : '-100%' }}>
        <PostList posts={posts} setIsOpenMenu={setIsOpenMenu}/>
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
