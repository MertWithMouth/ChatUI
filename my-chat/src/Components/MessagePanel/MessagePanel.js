import React, { Component } from 'react';
import DisplayMessages from '../DisplayMessage/DisplayMessage';
import MessageBox from  '../MessageBox/MessageBox';
import SidePanel from '../SidePanel/SidePanel';




class MessagePanel extends Component {



    
    state={
      messages:[]
      
          }
    
    


    
  

  componentDidMount=()=>{

//data for backend

  }

 


 sendMessage=(text)=>{

  this.setState({messages:
  [...this.state.messages, text]})
  console.log(this.state.messages.text)
  
 }

 



  render()
 { return (
    <div className="App">
      <SidePanel />
      <DisplayMessages messages={this.state.messages}/>
      <MessageBox sendMessage={this.sendMessage}
      />
      
     
    </div>
  );}
}

export default MessagePanel;
