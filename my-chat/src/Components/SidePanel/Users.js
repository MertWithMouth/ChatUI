import React from 'react';
import './SidePanel.css'

const users =(props) => {

    
    

        return (
    <div className="UserList" >

        <div className='users'>
        <div className='userid' onClick={props.userHandler} >{props.username}</div>
        </div>
     
    </div>
  );
}


export default users;
