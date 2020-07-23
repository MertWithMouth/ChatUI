import React, { Component } from 'react';
import DisplayMessages from '../DisplayMessage/DisplayMessage';
import MessageBox from  '../MessageBox/MessageBox';
import SidePanel from '../SidePanel/SidePanel';
import './MessagePanel.css'



class MessagePanel extends Component {



    
    state={
      messages:[],
      usernames:['mert','naber']
      
          }
    

    
    


    
  

  componentDidMount=()=>{

//data for backend

  }

 


 sendMessage=(text)=>{

  this.setState({messages:
  [...this.state.messages, text]})
  
  
 }


 createUsers(){

  this.setState({usernames: 
  [...this.state.usernames, this.props.username]})
  
 }
 



  render()
 { return (
    <div className="messagepanel">
      
      <SidePanel users={this.state.usernames}/>
      <DisplayMessages messages={this.state.messages}/>
     
      <MessageBox sendMessage={this.sendMessage}
      />
      
     
    </div>
  );}
}

export default MessagePanel;
