import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.interceptors.request.use(
//   (res) => {
//     console.log(res);
//     return res;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (res) => {
//     console.log(res);
//     return res;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

ReactDOM.render(<App />, document.getElementById('root'));
