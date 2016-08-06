import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import isEmpty from 'lodash/lang/isEmpty';
import UserInfo from './UserInfo1';
import Repos from './Repos';
import github from './github';


class GithubAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      repos:{},
      wait:true
    };
  }
  componentDidMount() {
    github.getGithubInfo('lzm854676408')
      .then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos,
          wait:false
        });
      });
  }
  render(){
    let styles={
      root:{
        width:'90%',
        height:'700px',
        margin:'0 auto'
      },
      h3:{
        textAlign:'center',
        marginTop:'40px'
      }
    }
    let GitHubInfo;

    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />
        </div>
      );
    }
    return(
      <div className='account'>
        <Card className="content" style={styles.root}>
          {this.state.wait ? <h3 style={styles.h3}>Loding...</h3> : ''}
          { GitHubInfo }
        </Card>
      </div>
    )
  }
}

export default GithubAccount;
