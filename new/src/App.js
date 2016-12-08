import React, { Component } from 'react';
import Signup from "./Components/Signup/Signup.jsx"
import Profile from"./Components/Profile/Profile.jsx"
import logo from './logo.svg';
import './App.css';
import Tough from './Components/Tough.jsx'
class App extends Component {
  // constructor(){
  //   super();
  //   this.addUser =this.addUser.bind(this);
  //   //this gets initial state
  //   this.state={
  //     user:{
  //       name:'',
  //       password:''
  //     }
  //   }
  // }
  // addUser(user){
  //   // update users
  //   //takes existing users
  //   console.log('inside add user')
  //   const users={...this.state.users}
  //   console.log(users)
  //   const timeStamp = Date.now()

  //   // users[1]=user
  //   this.setState({user: user})
  //   // set users
  //   console.log('yyyy',this.state)

constructor(){
  super();
  this.state={
    number:660
  }
}

  meme(){
    this.setState({number:200})
  }

  render() {
    return (
      <div className="App">
        <Tough
        num={this.state.number}
        onClick={this.meme.bind(this)}/>
        <h3>hi</h3>


        {/*<Profile compName="natty's site" addUser={this.addUser} />*/}
      </div>
    );
  }
}

export default App;
