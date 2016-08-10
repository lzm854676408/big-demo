import React from 'react';

import Header from './Header/Header.js';
import List from './List/List.js';
import Footer from './Footer/Footer.js';

class Blog extends React.Component {
  constructor(){
  super();
  this.state={
    search:''
  }
}
cardSearch(x){
  this.setState({
    search:x
  })
}
  render () {
    return(
      <div>
        <Header change={this.cardSearch.bind(this)}/>
        <List search={this.state.search}/>
        <Footer />
      </div>
    )
  }
}

export default Blog;
