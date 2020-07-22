import React, { Component } from 'react';
import Message from '../Message/Message'
const dummy_data=[

    

]


class DisplayMessages extends Component {
    render(){
  return (
    <div className="DisplayMessages">

        {this.props.messages.map((message,index) => {
            return(

                <Message key={index} username={message.userid} text={message.text}/>


            )
        })}
     
    </div>
  );}
}

export default DisplayMessages;
