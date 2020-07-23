import React, { Component } from 'react';
import Users from './Users'

import './SidePanel.css'


   

 


class SidePanel extends Component{

userHandler=()=>{



}


    render(){
        return (
            <div className="sidepanel">
            <h3>User List</h3>
            
                {this.props.users.map((user,index) => {
            return(
                
                <Users  key={index} username={user} userHandler={this.userHandler} />
               

            )
        })}

            </div>
          );


        
    }
}

export default SidePanel;
