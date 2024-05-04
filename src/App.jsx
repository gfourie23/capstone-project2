
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, createBrowserRouter } from 'react-router-dom';
import NavBar from './route-nav/NavBar';
import MyRoutes from "./route-nav/Routes";
import { googleLogout, useGoogleLogin, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {UserContext} from './auth/UserContext';
import LoginPage from './auth/Login';
import HomePage from './auth/Homepage';
import Example from './route-nav/NavBarEx';

function App() {

  
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );

  /*const { logout } = useGoogleLogout({
    onSuccess: () => {
      setUser(null);
      setProfile(null);
    },
    onError: (error) => console.log('Logout Failed:', error)
  }); */

  //log out function to log the user out of google and set the profile array to null
  const logout = () => {
      googleLogout();
      setProfile(null);
  }; 

  return (
    <BrowserRouter>
    <UserContext.Provider
      value={{ user, setUser, login, logout }}>
      <div className="App h-screen w-screen flex flex-col">
     
        <NavBar logout={logout} />
        <MyRoutes login={login}/>
    
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
