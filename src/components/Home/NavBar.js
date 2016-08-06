import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle (){
    this.setState({open: !this.state.open})
  };

  handleClose () {
    this.setState({open: false})
  };

  render() {
    let styles={
      menu:{
        textAlign:'center',
        backgroundColor:'#40C4FF',
      },
      link:{
        textDecoration:'none',
        display:'block'
      }
    }
    return (
      <div>
        <IconButton tooltip="menu"
        onClick={this.handleToggle.bind(this)}
        style={{position:'absolute',top:'10px',left:'10px'}}>
        <Menu color="#FF1744"/>
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <div style={styles.menu}>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="/" style={styles.link} activeStyle={{color: '#E91E63'}} onlyActiveOnIndex={true}>首页</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="blog" style={styles.link} activeStyle={{color: '#E91E63'}}>博客</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="about" style={styles.link} activeStyle={{color: '#E91E63'}}>关于</Link>
            </MenuItem>
          </div>
        </Drawer>
      </div>
    );
  }
}
NavBar.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired
}
export default NavBar;
