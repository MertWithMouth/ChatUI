import React, { Component } from 'react';


class Message extends Component {

    
   render(){
        return (
    <div className="message" >

        <div className='userid'>{this.props.username}</div>
         <div className='textmessage'>{this.props.text}</div>
     
    </div>
  );}
}


export default Message;
