import React, { Component } from 'react';


export default class Signup extends Component{
  // constructor(){
  //   super()
  //   this.getInfo=this.getInfo.bind(this)
  // }
  createUser(event){
    event.preventDefault();
    const user ={
    user:this.nameInput.value,
    password:this.passwordInput.value
  }
  console.log(user)
  this.props.addUser(user)
}

  getInfo(event){
    event.preventDefault();
    console.log('i am getting info');
    console.log(this.nameInput.value)
    console.log(this.passwordInput.value)
    //put value from the input into variable
    const me= this.nameInput.value
    // use the context method of transition to move to page with value of the variable
    this.context.router.transitionTo(`/${me}`)
    // ('/${me}')
  }
  render(){
    return(
  <div>
      {/*using ref to be able to directly refernce this input later*/}
    <input type="text" placeholder="name" ref={(input)=>{this.nameInput=input}}/>
     <input type="text" placeholder="password" ref={(input)=>{this.passwordInput=input}} />
   {/*bind the method to this input*/}
     <input type='submit' value='signup'  onClick={this.createUser.bind(this)} />
  </div>
  )
    }
}
//tells react that this component needs a router
Signup.contextTypes={
  router: React.PropTypes.object
}
