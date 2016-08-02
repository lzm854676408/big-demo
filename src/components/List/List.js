
import React, { Component } from 'react';
import BlogCard from './BlogCard.js';


let blogs = [
  {title:'这是第一天',data:'2016.7.19'},
  {title:'这是第二天',data:'2016.7.21'},
  {title:'这是第三天',data:'2016.7.22'}
]


class List extends Component {
  render(){
    // console.log(Cards.length);
    var blogCards = [];
    for (var i = 0; i < blogs.length; i++) {
      let j=i+1;
      blogCards.push(
        <BlogCard title={blogs[i].title} date={blogs[i].data} index={j} key={i}/>
      )
    };
    // console.log(AllCards);
    return(
      <div>
        {blogCards}
      </div>
    )
  }
}

export default List;
