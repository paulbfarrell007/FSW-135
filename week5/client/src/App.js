import './App.css';
import Auth from './Auth.js';
import Profile from './Profile.js';
import React,{useContext} from 'react';
import {Routes,Route,Navigate} from 'react-router';
import {UserContext} from './UserProvider'
import Navbar from './Navbar.js'


export default function App() {
  const {token,logout} = useContext(UserContext)
  
  return (
    <div className="App">
  <Navbar logout={logout}/> 
  <Routes> 
    <Route exact path = '/'
          element = {token ? <Navigate to = '/profile'/>:<Auth/>}
    />
    <Route path = '/profile'
    element = {token ? <Profile/>: <Navigate to = '/'/> }
    />
    
  </Routes>
   <h1>Hellooo</h1> </div>
  );
}

//export default App;
