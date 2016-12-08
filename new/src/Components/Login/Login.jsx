import React, { Component } from 'react';


export default class Login extends Component{
  render(){
    return(
      <div>
 <input type="text"required placeholder="name" />
 <input type='password' required placeholder="password" />
 <input type="submit" value="Login" />
</div>
  )
    }
}

