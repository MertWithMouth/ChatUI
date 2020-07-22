import React, { Component } from 'react';
import './App.css';

import Login from './Components/Login/Login'
import MessagePanel from './Components/MessagePanel/MessagePanel'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser} from '@fortawesome/free-solid-svg-icons'

library.add(faUser)

class App extends Component{


  
  state = {
    
    username: null
  }

    setUsername = (username) =>{

      this.setState({username})
      }

      componentDidMount() {


    
        //event listener
        this.connection.onmessage = (message) => {
    
        const data = JSON.parse(message.data)
        this.setState({messages: [...this.state.messages, data]})
    
    
    }
    }
    
    
    
    
        getMessage = (message) => {
    
            const data= {username: this.props.username, message: message}
            this.connection.send(JSON.stringify(data))
        }
    
    

      

      connection = new WebSocket('ws://localhost:9090/')
  
    render(){
        return (
            <div className="App">
              {
              !this.state.username ?
                <Login setUsername={this.setUsername}/>
                :
                <MessagePanel className='messagepanel' username = {this.state.username}/>
              }
            </div>
          );


        
    }
}

export default App;

