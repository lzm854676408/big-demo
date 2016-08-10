import React, { Component } from 'react';

import Search from './Search';


class Header extends Component {
  handelClick(){
    this.refs.navbar.handleToggle();
  }
  getStyles() {
     return {
       root: {
         backgroundColor: '#00bcd4',
         height: '200px'
       }

     }
   }
  render(){
    const styles = this.getStyles();
    return (
      <div style={styles.root}>
         <Search handleSearch={this.props.change}/>
      </div>
    );
  }
}

export default Header;
