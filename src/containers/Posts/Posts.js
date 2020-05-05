import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { Route } from 'react-router-dom';

import '../../assets/css/Posts.min.css';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  // const [selectedPostId, setSelectedPostId] = useState(null);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const posts = await axios.get('/posts');

        const slicePosts = posts.data.slice(0, 4);

        const updatePosts = slicePosts.map((post) => {
          return { ...post, author: 'Hello' };
        });

        setPosts(updatePosts);
      } catch (error) {
        return setError(error.message);
      }
    })();
  }, []);

  const postSelectedHandler = (id) => {
    props.history.push(`/posts/${id}`);
    // setSelectedPostId(id);
  };

  const renderPost = () => {
    if (!error) {
      return posts.map(({ title, author, id }) => {
        return (
          // <Link to={`/posts/${id}`} key={id}>
          <Post
            key={id}
            clicked={() => postSelectedHandler(id)}
            title={title}
            author={author}
          />
          // </Link>
        );
      });
    }

    return <p>{error}</p>;
  };

  return (
    <div>
      <section className="Posts">{renderPost()}</section>
      <Route path={`${props.match.url}/:id`} exact component={FullPost} />
    </div>
  );
};

export default Posts;
