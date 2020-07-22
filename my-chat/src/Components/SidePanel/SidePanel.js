import React, { Component } from 'react';
import Users from './Users'

 const dummy_data=[ 
     
    {username: 'Mark'},
    {username: 'Mert'},
    {username: 'Melih'},
    
]


   

 


class SidePanel extends Component{




    render(){
        return (
            <div className="sidepanel">
 {this.props.users.map((user,index) => {
            return(

                <Users  key={index} username={user} />


            )
        })}

            </div>
          );


        
    }
}

export default SidePanel;
