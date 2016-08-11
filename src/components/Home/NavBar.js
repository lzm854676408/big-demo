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
        backgroundColor:'rgba(0,0,0,0.8)',
        marginTop:'50px',
      },
      link:{
        textDecoration:'none',
        display:'block'
      },
      drawer:{
        backgroundColor:'rgba(0,0,0,0.5)',
      }
    }
    return (
      <div>
        <IconButton tooltip="menu"
        onClick={this.handleToggle.bind(this)}
        style={{position:'absolute',top:'10px',left:'75px'}}>
        <Menu color="#FF1744"/>
        </IconButton>
        <Drawer
          containerStyle={styles.drawer}
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
              <Link to="/blog" style={styles.link} activeStyle={{color: '#E91E63'}}>Blog</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="/about" style={styles.link} activeStyle={{color: '#E91E63'}}>About</Link>
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
