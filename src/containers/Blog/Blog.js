import React, { useState, Suspense, lazy } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// import NewPost from '../NewPost/NewPost';
import '../../assets/css/Blog.min.css';

import Posts from '../Posts/Posts';
import asyncComponent from '../../asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import('../NewPost/NewPost');
});

const NewPostLazy = lazy(() => import('../NewPost/NewPost'));

const Blog = () => {
  const [auth, setAuth] = useState(false);

  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/posts/"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline',
                }}
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true',
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        {/* <Route path="/new-post" component={AsyncNewPost} /> */}
        <Route
          path="/new-post"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <NewPostLazy />
            </Suspense>
          )}
        />
        <Route path="/posts" component={Posts} />
        <Route render={() => <h1>Not found</h1>} />
        {/* <Redirect from="/" to="/posts" /> */}
      </Switch>

      {/* <section>
        <FullPost id={selectedPostId} />
      </section>
      <section>
        <NewPost />
      </section> */}
    </div>
  );
};

export default Blog;
