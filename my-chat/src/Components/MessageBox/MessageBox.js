import React, { Component } from 'react';


class MessageBox extends Component {

    MessageHandler=(e)=>{

        e.preventDefault()
        this.props.addmessage(e.target.value)
        e.target.value=''
        

    }
   render(){
        return (
    <div className="DisplayMessages" >

        <section  onSubmit={this.MessageHandler}> 
             <input type ='text'  />
             <button type='submit'>Send</button>
        </section>
     
    </div>
  );}
}


export default MessageBox;
