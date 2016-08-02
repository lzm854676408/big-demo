import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle (){
    this.setState({open: !this.state.open})
  };

  handleClose () {
    this.setState({open: false})
  };

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose.bind(this)}>视频列表</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>注册</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>登陆</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default NavBar;
