import React, { Component } from 'react';

class Footer extends Component {

  render(){
    let styles={
      root:{
        width:'100%',
        height:'100px',
        backgroundColor:'#000',
        color:'#fff'
      }
    }
    return (
      <div style={styles.root}>
        Footer
      </div>
    );
  }
}

export default Footer;
