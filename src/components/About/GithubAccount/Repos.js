import React, { Component } from 'react';
import map from 'lodash/collection/map';

class Repos extends Component {
  render() {
    let styles={
      root:{
        width:'90%',
        margin:'0 auto'
      },
      li:{
        listStyle:'none',
        marginLeft:'10%',

      },
      p:{
        float:'left',
        width:'25%',
        margin:'0 auto',
        marginLeft:'5%',
          marginTop:'30px'
      }

    }
    const repoList = map(this.props.repos, (repo) => {
      return (
        <li key={repo.id} style={styles.li}>
          <div style={styles.root}>
            <p className='name' style={styles.p}>{repo.name}</p>
            <p className='lang' style={styles.p}>{repo.language}</p>
          </div>
          <p className='desc' style={styles.p}>{repo.description}</p>
        </li>
      );
    });

    return (
      <ul className="user-repos">
        { repoList }
      </ul>
    );
  }
}

export default Repos;
