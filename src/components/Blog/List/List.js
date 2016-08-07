import React, { Component } from 'react';
import map from 'lodash/map';
import axios from 'axios';

import BlogCard from './BlogCard.js';

class List extends Component {
  constructor(){
    super();
    this.state={
      posts: ''
    }
  }

  componentDidMount(){
    let address = `https://raw.githubusercontent.com/lzm854676408/big-demo/master/posts/index.json?v=${Math.random()}`
    axios.get(address).then((res) => {
      console.log(res);
      this.setState({
        posts: res.data
      });
    });
  }

  render(){
    // console.log(Cards.length);
    var blogCards = [];
    map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.created_at } index={b.id} key={Math.random()}/>
                  );
                },
        this.state.posts
    );
    // console.log(AllCards);
    return(
      <div>
        {blogCards}
      </div>
    )
  }
}

export default List;
