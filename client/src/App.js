import React from 'react';
import { SITE_TITLE } from './constants';'./constants';
import Heading from './Heading'
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
      <div className = "header-wrapper">
         <Heading title = {SITE_TITLE}/>    
       </div>
    );
}
export default App;