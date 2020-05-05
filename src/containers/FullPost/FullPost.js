import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../assets/css/FullPost.min.css';

const FullPost = (props) => {
  const { id } = props.match.params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      if (!post || post.id !== parseInt(id)) {
        (async () => {
          const res = await axios.get(`/posts/${id}`);

          setPost(res.data);
        })();
      }
    }
  }, [id]);

  const deletePostHandler = async () => {
    const deletePost = await axios.delete(`/posts/${id}`);

    if (deletePost.status === 200) console.log('post deleted');
  };

  const renderPost = () => {
    if (!post) {
      return <p>Please select a Post!</p>;
    }

    return (
      <div className="FullPost">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <div className="Edit">
          <button onClick={deletePostHandler} className="Delete">
            Delete
          </button>
        </div>
      </div>
    );
  };

  return <>{renderPost()}</>;
};

export default FullPost;
