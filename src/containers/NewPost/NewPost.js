import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import '../../assets/css/NewPost.min.css';

const NewPost = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Hello');
  const [submitted, setSubmitted] = useState(false);

  const postDataHandler = async () => {
    const newPost = await axios.post('/posts', {
      title: title,
      body: content,
      author: author,
    });
    props.history.replace('/posts');
    // setSubmitted(true);
    console.log(newPost.data);
  };

  const renderNewPost = () => {
    if (submitted) {
      return <Redirect to="/posts" />;
    }

    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <label>Author</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={postDataHandler}>Add Post</button>
      </div>
    );
  };

  return <>{renderNewPost()}</>;
};

export default NewPost;
