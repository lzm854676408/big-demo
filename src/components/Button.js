import React,{Component} from 'react';
import LeftNav from './LeftNav.js';

class Button extends Component{
  getStyles(){
    return{
      button:{
        display:'block',
        margin:'0 auto',
        width:'50px',
        height:'30px'
      }
    }
  }
  handelClick(){
    this.refs.leftnav.handelTogggle();
  }
  render(){
    let styles=this.getStyles();
    return(
      <div>
        <button style={styles.button} onClick={this.handelClick.bind(this)}>click</button>
        <LeftNav ref="leftnav"/>
      </div>
    )
  }
}
export default Button;
