import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    let styles={
      root:{
        width:'70%',
        height:'300px',
        margin:'0 auto'
      },
      img:{
        marginLeft:'40%',
        marginTop:'30px'
      },
      ul:{
        listStyle:'none',
      },
      li:{
        float:'left',
        marginLeft:'15%',
        textAlign: 'center'
      },
    }
    const userInfo = this.props.userInfo;
    return (
      <div className='user-info' style={styles.root}>
        <img src={userInfo.avatar_url} style={styles.img}/>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <b>{userInfo.followers}</b><br/>
            <span>followers</span>
          </li>
          <li style={styles.li}>
            <b>{userInfo.following}</b><br/>
            <span>following</span>
          </li>
          <li style={styles.li}>
            <b>{userInfo.public_repos}</b><br/>
            <span>repos</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserInfo;
