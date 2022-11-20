import React from 'react';
import { BrowserRouter as Router,Route, Routes }  from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';
const App = () =>{
  
    return (
       <Router>
       <Routes >
        <Route exact path = '/' element = { <Landing />} />
        
       
        <Route path = '/home' element = {<Home />} />
        
   
       </Routes>
      </Router>
  
    );
}
export default App;