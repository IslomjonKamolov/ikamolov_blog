import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // URL'dan parameter olish uchun
import { collection, query, orderBy, limit, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Firebase konfiguratsiyasi

const PostDetail = () => {
  const { id: postId } = useParams(); // URL'dagi id parametri
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (postId) {
          // URL'dagi id bo'yicha postni olish
          const docRef = doc(db, 'posts', postId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setPost({
              id: docSnap.id,
              ...docSnap.data(),
            });
          } else {
            console.error('No such post!');
            setPost(null);
          }
        } else {
          // ID berilmagan bo'lsa, oxirgi postni yuklash
          const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(1));
          const querySnapshot = await getDocs(q);
          const lastPost = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))[0];
          setPost(lastPost);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost(); // URL o'zgarganda qayta ishlash
  }, [postId]); // postId o'zgarganda qayta render

  // HTML kontentini xavfsiz render qilish
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  // Share qilish funksiyasi
  const handleShare = () => {
    if (post) {
      const postUrl = `${window.location.origin}/posts/${post.id}`;
      navigator.clipboard.writeText(postUrl)
        .then(() => {
          alert('Post URL copied to clipboard!');
        })
        .catch((err) => {
          console.error('Error copying text: ', err);
        });
    }
  };

  if (!post) {
    return <div className='loader'></div>; // Agar post hali olinmagan bo'lsa
  }

  return (
    <div className='postbox'>
      <h1 className='post__title'>{post.title}</h1>
      {/* HTML kontentini xavfsiz render qilish */}
      <div dangerouslySetInnerHTML={createMarkup(post.content)} />
      <p className='post__createdAt'>{post.createdAt.toDate().toLocaleString()}</p>

      {/* Share tugmasi */}
      <button className='share__button' onClick={handleShare}>Share</button>
    </div>
  );
};

export default PostDetail;
