import React, { Component } from 'react';


class MessageBox extends Component {

    state={
        message:''
    }

    messageHandler=(e) =>{
        
        this.setState({message: e.target.value})
        
    }

    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state.message)
       
    }

    
   render(){
        return (
  

        <form className="sendmessageform" onSubmit={this.submitHandler} > 
             <input type ='text' placeholder="Type your message"
             onChange={this.MessageHandler} 
             />
             <button type='submit'>Send</button>
        </form>
     
   
  );}
}


export default MessageBox;
