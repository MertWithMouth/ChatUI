import React, { Component } from 'react';
import ReactDOM from'react-dom'
import Message from '../Message/Message'
import './DisplayMessage.css'


class DisplayMessages extends Component {


  //will stop auto scrolling down when you send a message
  componentWillUpdate=()=>{

    const node=ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop +node.clientHeight + 100 >= node.scrollHeight


  }

  //Auto scrolls when some client messages
  componentDidUpdate=()=>{
    if(this.shouldScrollToBottom) {
      const node= ReactDOM.findDOMNode(this)
      node.scrollTop=node.scrollHeight

    }

  }
  
    render(){
  return (
    <div className="DisplayMessages">

        {this.props.messages.map((message,index) => {
            return(

                <Message  key={index} text={message} username={this.props.username} />


            )
        })}
     
    </div>
  );}
}

export default DisplayMessages;
