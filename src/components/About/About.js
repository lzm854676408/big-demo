import React from 'react';
import GithubAccount from './GithubAccount/GithubAccount.js';
import Echarts from './Echarts.js';

class About extends React.Component {
  render () {
    return(
      <div>
      <GithubAccount />
      <Echarts />
      </div>
    )
  }
}

export default About;
