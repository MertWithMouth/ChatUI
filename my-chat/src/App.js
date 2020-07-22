import React, { Component } from 'react';
import DisplayMessages from './Components/DisplayMessages/DisplayMessages';
import MessageBox from  './Components/MessageBox/MessageBox';
import SidePanel from './Components/SidePanel/SidePanel';


import './App.css';

class App extends Component {



    
    state={
      messages:[]
          }
    
    


    
  

  componentDidMount=()=>{

//data for backend

  }

 getMessage(message){


  this.setState({messages: 
  [...this.state.messages, 'namer']})



  
  


 }


 sendMessage=(message)=>{

  this.setState({messages:
  [...this.state.messages, message]})
    
  
 }

 



  render()
 { return (
    <div className="App">
      <SidePanel users={this.state.messages.userid}/>
      <DisplayMessages messages={this.state.messages}/>
      <MessageBox sendMessage={this.sendMessage}
      />
     
    </div>
  );}
}

export default App;
