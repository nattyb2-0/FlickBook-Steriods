import React, {Component} from 'react'
import Login from "../Login/Login.jsx"
import Signup from "../Signup/Signup.jsx"
export default class Profile extends Component{
  render(){
    return(
      <div>
      <header>
        <h1></h1>
      </header>
      <main>
        <section>
          <Signup addUser={this.props.addUser}/>
          <h2></h2>
        </section>
      </main>
      </div>
      )
  }
}
