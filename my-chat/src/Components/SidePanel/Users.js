import React from 'react';


const users =(props) => {

    
    

        return (
    <div className="message" >

        <div className='userid' onClick={props.userHandler} >{props.username}</div>
        
     
    </div>
  );
}


export default users;
