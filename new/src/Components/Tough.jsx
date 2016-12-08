import React, {Component} from 'react';
import LandingPage from './LandingPage/LandingPage'
export default class Tough extends Component{

  render(){
    return(
      <div>
      <h1>potatoes</h1>
      <p>{this.props.num}</p>
      <LandingPage old={this.props.num}/>
      <button onClick={this.props.onClick}></button>
      </div>
      )
  }
}

// const Tough=()=>{

// }
