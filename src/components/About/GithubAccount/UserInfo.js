import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import getUserInfo from './gitSearch.js';
import {Card} from 'material-ui/Card';
import github from './github.js';

class UserInfo extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  constructor(){
    super();
    this.state={
      info:{},
      wait:true
    }
  }
  componentDidMount(){
    getUserInfo().then((data)=>{
      console.log(data.gitInfo);
      this.setState({
        info:data.gitInfo,
        wait:false
      })
    });
  }
  render () {
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
        marginLeft:'15%'
      }
    }
    let x = <CircularProgress />
    return(
      <Card style={styles.root}>
        <img style={styles.img} src={this.state.info.avatar_url} />
        <ul style={styles.ul}>
          <li style={styles.li}><span>userName</span><br/>{this.state.info.login}</li>

          <li style={styles.li}><span>updated</span><br/>{this.state.info.updated_at}</li>

          <li style={styles.li}><span>following</span><br/>{this.state.info.following}</li>
        </ul>

      </Card>
    )
  }
}

UserInfo.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default UserInfo;
