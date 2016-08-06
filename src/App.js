import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavBar from './components/Home/NavBar.js';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
export default App;
