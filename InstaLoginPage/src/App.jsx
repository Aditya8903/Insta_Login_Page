import { useState } from 'react';
import './App.css';
 
import logo from "./assets/instagram.png"

function App() {
  const [login,setlogin]=useState(true)

  const loginSwitch = () => {
    setlogin(!login)
  }
  return (
   <div className='Container'>
        <div className="user">
              <img src={logo} alt="" />

              <input hidden={login} type="text" name="" placeholder='Mobile Number or Email' id="" />

              <input hidden={login} type="text" name="" placeholder='Full Name' id="" />

              <input type="email" name="" id="" placeholder='Phone number, username, or email'/>

              <input type="password" name="" id="" placeholder='Password' />

              <button>{login?"Sign in":"Sign up"}</button>
          <div className='options'>
            {login?"Don't have account?":"Have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
          </div>
          </div>  
   </div>
  );
}

export default App;
