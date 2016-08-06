
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SearchBtn from 'material-ui/svg-icons/action/search';

class Search extends Component {
render(){


  let styles={
       root:{
         padding:'50px 10px',
         textAlign:'center'
       },
       title:{
         color:'#fff',
         textAlign:'center',
         marginTop:'-50px',
         fontWeight:'lighter'
       },
       hintStyle: {
         color: 'rgba(255,255,255,0.6)',
         fontSize:'15px'
       },
       underlineStyle:{
          borderColor: '#fff',
       },
       inputStyle:{
         color:'#fff',
         fontSize:'15px'
       },
       text:{
         maxWidth:'600px',
         width:'50%'
       },
       search:{
         marginTop:'20px',
         textAlign:'center'
       },
       svg:{
         position:'relative',
         top:'10px',
         left:'-10px',
         color:"#fff"
       }
     
   }
    return (
      <div style={styles.root}>
         <h1 style={styles.title}>ALL</h1>
         <SearchBtn  style={styles.svg}/>
         <TextField
          hintText="搜索"
          hintStyle={styles.hintStyle}
          underlineFocusStyle={styles.underlineStyle}
          inputStyle={styles.inputStyle}
          style={styles.text}
        />
      </div>
    );
  }
}

export default Search;
