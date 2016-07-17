import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class LeftNav extends Component{
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  handelTogggle(){
    this.setState({
      show:!this.state.show
    })
  }
  render(){
    let show = this.state.show ? "block":"none";
    var styles={
      root:{
        position:'absolute',
        top:'0',
        left:'0',
        width:'30%',
        bottom:'0',
        backgroundColor:'#bada07',
        display:show,
      },
      list:{
        display:'block',
        textDecoration:'none',
        width:'100%',
        padding:'30px',
        height:'50px',
        textAligh:'center',
        lineHeight:'50px'
      },
      cover:{
        backgroundColor:'#777',
        position:'absolute',
        opacity:'0.5',
        top:'0',
        bottom:'0',
        left:'0',
        right:'0',
        display:show
      }
    }
    return(
      <div>
      <div style={styles.cover} onClick={this.handelTogggle.bind(this)}></div>
      <div style={styles.root}>
          <a href="#" style={styles.list}>HOME</a>
          <a href="#" style={styles.list}>BLOG</a>
          <a href="#" style={styles.list}>ABOUT</a>
        </div>
      </div>
    )
  }
}
export default LeftNav;
