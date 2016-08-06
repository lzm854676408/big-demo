import React from 'react';

import Header from './Header/Header.js';
import List from './List/List.js';
import Footer from './Footer/Footer.js';

class Blog extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <List />
        <Footer />
      </div>
    )
  }
}

export default Blog;
