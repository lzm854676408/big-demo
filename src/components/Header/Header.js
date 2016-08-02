import React, { Component } from 'react';
import Hamburger from './Hamburger';
import NavBar from './NavBar';
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
         <Hamburger onClick={this.handelClick.bind(this)}/>
         <NavBar ref='navbar'/>
         <Search />
      </div>
    );
  }
}

export default Header;
