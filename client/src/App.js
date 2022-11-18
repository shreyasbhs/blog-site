import React from 'react';
import { SITE_TITLE } from './constants';'./constants';
import Heading from './Heading'
import Content from './Content';
import './App.css';
// const Heading = (props)=>{
//     return (
//         <h1>
//           Welcome to {props.title}
//         </h1>
//     )
// }
const App = () =>{

    return (
      <div>
      <div className = "header-wrapper">
         <Heading title = {SITE_TITLE}/>    
       </div>
       <Content title = "mPulse Boomerang" />
       </div>

    );
}
export default App;