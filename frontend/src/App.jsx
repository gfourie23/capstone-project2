
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, createBrowserRouter, useNavigate } from 'react-router-dom';
import NavBar from './route-nav/NavBar';
import MyRoutes from "./route-nav/Routes";
import { googleLogout, useGoogleLogin, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {UserContext, UserProvider, useUser} from './auth/UserContext';
import { ReviewProvider } from './context/ReviewContext';



function App() {


  return (
    <BrowserRouter>
    <UserProvider
      /*value={{ user, setUser, login, logout }} */>
        <ReviewProvider>
          <div className="App h-screen w-screen flex flex-col">
     
            <NavBar /*logout={logout}*/ />
            <MyRoutes /*login={login} */ />
    
      </div>
      </ReviewProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App;
