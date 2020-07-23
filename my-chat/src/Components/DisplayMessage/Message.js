import React from 'react';
import './DisplayMessage.css'

const message =(props) => {

    

        return (
    <div className="message" >
      <div className='messagerow'>
        <div className='messagedata'>
        <div className='userid'>{props.username}</div>
        <div className='textmessage'>{props.text}</div>
        </div>
      </div>
    </div>
  );
}


export default message;
