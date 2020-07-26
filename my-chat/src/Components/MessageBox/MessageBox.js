import React, { Component } from 'react';
import './MessageBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MessageBox extends Component {

    state={
        message:''
    }

    messageHandler=(e) =>{
        
        this.setState({message: e.target.value})
        
    }

    submitHandler=(e)=>{
        e.preventDefault();
       this.props.sendMessage(this.state.message)
       this.setState({message:''})
       
    }

    
   render(){
        return (
  

        <form className="sendmessageform" onSubmit={this.submitHandler} > 

            <span className = 'attachment'><FontAwesomeIcon icon='faPaper' /></span>
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
             <input type ='text' placeholder="Type your message"
             onChange={this.messageHandler} 
             value={this.state.message}
             />
             <button type='submit'>Send</button>
        </form>
     
   
  );}
}


export default MessageBox;
