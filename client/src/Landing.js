import React from 'react';
import { SITE_TITLE } from './constants';'./constants';
import Heading from './Heading'
import Content from './Content';
import './App.css';
import logo from './Akamai Logo.png'
import {useState,useRef } from 'react';
import  { useNavigate } from 'react-router-dom'

import { getSignUpForm } from './utils'


const Aklogo = () =>{
  return (
  <div className="page-logo">
    <img src={logo} alt="Akamai" />
  </div>
  )
};
const SignUp = (props) =>{
  const navigate = useNavigate();
  var title =  "Sign up"
  const [signupSuccess,changeSignupState] = useState(false); 
  const submitSignUForm = (e) =>{
    let formStatus = false;
    e.preventDefault();
    let form = e.target;
    console.log("entering");
    let formBody = getSignUpForm(form);
    if(formBody == null){
      console.log("returning");
      // form.children[7].setCustomValidity('');
      // form.reset();
      changeSignupState(formStatus);
      // signupSuccess?alert("success"):alert("failure");
      // return false;
    }
    else{
      const formData = new URLSearchParams();
      for (const pair of new FormData(form)) {
          formData.append(pair[0], pair[1]);
      }
    const url = "http://localhost:5000/adduser"
    fetch(url,{
        method: 'POST',
       
        body:formData
    }).then(res => res.json()).then(data =>{
        console.log(data.msg);
        if(data.msg["rowCount"]){
           console.log('User addded now redirecting');
           formStatus = true;
           navigate('/home');
        }
        else{
          console.log('User failed');
          navigate('/');
        }
        changeSignupState(formStatus);
        // signupSuccess?alert("success"):alert("failure");
    });
     }
   }
  
   return (
     <div className = "signup-wrapper">
    
       <form  onSubmit = {submitSignUForm}>
           {/* <label htmlFor="username">username</label> */}
           <h2> {title} </h2>
           <input type = "text" name = "username"  placeholder = "username" autoComplete = "off" autoFocus = "autofocus" required/>
           
           <br/>
           {/* <label htmlFor="emailid">email</label> */}
           <input type = "text" name = "email" placeholder = "email" autoComplete = "off" autoFocus = "autofocus" required/><br/>
           <input type = "password" name = "password" placeholder = "password" required/><br/>
           <input type = "password" name = "confirm-password" placeholder = "re-enter password" required/><br/>
           <input type = "submit" className = "submit-button" id = "signup-submit-button" value = "Sign Up"/>
       </form>
        
     </div>
   );

} 
const Landing = () => {
    return (  
        <div className= "landing-page-wrapper">
      <div className = "header-wrapper">
         <Heading title = {SITE_TITLE}/>    
       </div>
         <Aklogo />
         <SignUp />
       
       </div>
    );
}
 
export default Landing;