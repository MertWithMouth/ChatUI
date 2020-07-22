import React, { Component } from 'react';
import Message from '../Message/Message'



class DisplayMessages extends Component {
    render(){
  return (
    <div className="DisplayMessages">

        {this.props.messages.map((message,index) => {
            return(

                <Message key={index}  text={message}/>


            )
        })}
     
    </div>
  );}
}

export default DisplayMessages;
