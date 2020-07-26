import React, { Component } from 'react';
import DisplayMessages from '../DisplayMessage/DisplayMessage';
import MessageBox from  '../MessageBox/MessageBox';
import SidePanel from '../SidePanel/SidePanel';
import Layout from './Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MessagePanel.css'



class MessagePanel extends Component {



    
    state={
      messages:[],
      usernames:['mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber','mert','naber',]
      
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
    <div className="MessagePanel">

    <Layout/>
    
      <SidePanel users={this.state.usernames} />
      
      <DisplayMessages messages={this.state.messages} username={this.props.username}/>
      
     
      <MessageBox sendMessage={this.sendMessage} />
    
     
      
     
    </div>
  );}
}

export default MessagePanel;
