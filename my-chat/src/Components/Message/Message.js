import React from 'react';


const message =(props) => {

    

        return (
    <div className="message" >

        <div className='userid'>{props.username}</div>
         <div className='textmessage'>{props.text}</div>
     
    </div>
  );
}


export default message;
