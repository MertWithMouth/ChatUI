import React, { Component } from 'react';
import Message from '../Message/Message'



class DisplayMessages extends Component {
    render(){
  return (
    <div className="DisplayMessages">

        {this.props.messages.map((message,username) => {
            return(

                <Message   text={message} username={username} />


            )
        })}
     
    </div>
  );}
}

export default DisplayMessages;
