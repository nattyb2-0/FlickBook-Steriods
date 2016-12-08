import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {render} from 'react-dom'
import Profile from "./Components/Profile/Profile.jsx"
import Signup from "./Components/Signup/Signup.jsx"
import TTT from "./Components/Signup/TTT.jsx"
import Landing from "./Components/Landing/Landing.jsx"
import {BrowserRouter, Match, Miss} from 'react-router';

const Root = ()=>{
  return(
    <BrowserRouter>
    <div>
      <Match exactly pattern='/' component={App}></Match>
      <Match exactly pattern='/landing' component={Landing}></Match>
      <Match exactly pattern='/profile' component={Profile}></Match>
      <Match exactly pattern='/signup' component={Signup}></Match>
      <Miss component={TTT}/>
      </div>
    </BrowserRouter>
    )
}
render(<Root/>, document.querySelector('#root'));
