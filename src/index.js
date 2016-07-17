import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button.js';
import './stylelist/common.css';

class App extends Component{
  render(){
    return(
      <Button />
    )
  }
}
ReactDOM.render(<App />,document.getElementById('app'));
