import React from 'react';


class Blog extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }
  render () {
    return(
      <div>
        { this.props.params.title}
      </div>
    )
  }
}

export default Blog;
