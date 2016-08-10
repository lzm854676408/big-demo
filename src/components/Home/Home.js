import React, { PropTypes } from 'react';
import NavBar from './NavBar';
import Works from './Works';

class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100vw',
        height:'100vh',
        background: 'url("http://7xopqp.com1.z0.glb.clouddn.com/newming24.jpg") no-repeat fixed center center/cover'
      },
      title:{
        color:'#fff',
        textAlign:'center',
        paddingTop:'20%'
      },
      cover:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)'
      },
      span:{
        color:'#00BCD4',
        fontSize:'36px'
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.cover}>
          <h1 style={styles.title}>欢迎光临<br/><span style={styles.span}>MY<br/>PRODUCTION</span></h1>
          <NavBar />
        </div>
        <Works />
      </div>
    )
  }
}

export default Home;
