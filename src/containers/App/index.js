import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from '../Blog/Blog';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;