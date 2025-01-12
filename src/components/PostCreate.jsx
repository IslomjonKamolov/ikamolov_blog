import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill stilini o'rnatish
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

// Toolbar uchun modullarni sozlash
const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    [{ 'align': [] }],
    ['link'],
    [{ 'color': [] }, { 'background': [] }],
    ['blockquote', 'code-block'],
    ['image', 'video']
  ],
};

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const quillRef = useRef(null); // Quill editoriga ref qo'shish

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      try {
        await addDoc(collection(db, 'posts'), {
          title: title,
          content: content,
          createdAt: new Date(),
        });
        alert('Post muvaffaqiyatli yaratildi!');
        setTitle('');
        setContent('');
      } catch (error) {
        console.error('Xatolik yuz berdi:', error);
      }
    } else {
      alert('Sarlavha va kontentni to\'ldiring!');
    }
  };

  return (
    <div>
      <h2 className='create__title'>Yangi Post Yaratish</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Post Sarlavhasi"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <ReactQuill
            ref={quillRef}  // Quill uchun ref
            value={content}
            onChange={handleEditorChange}
            placeholder=""
            required
            modules={modules} // Toolbar uchun modullarni qo'shish
          />
        </div>
        <button className='submit__button' type="submit">Post yaratish</button>
      </form>
    </div>
  );
};

export default PostCreate;
