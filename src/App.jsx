
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
import { OpenAI } from 'openai';



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

/*  const [response, setResponse] = useState("Hi there! How can I assist you?");
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3005/chatbot", {
      question: value,
    });
    setResponse(response.data);
  }; */

  /*const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  //const openai = new OpenAI(configuration); 

  const responseGenerate = async (inputText, setInputText) => {
    let options = {
      prompt: `Complete this sentence: "${inputText}"`,
      model: 'text-davinci-003',
      max_tokens: 50,
      n: 1,
      stop: ".",
    };

    let completeOptions = {
      ...options,
      prompt: inputText,
    };

    const response = await openai.createFinished(completeOptions);

     if (response.data.choices) {
            setMessages([
                {
                    question: inputText,
                    answer: response.data.choices[0].text,
                },
                ...messages,
            ]);
            setInputText('');
        }
  };*/


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


    {/*<div className="container mt-8">
      <div>
        <input className='w-80'
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
      <div>
        <button className="mt-8" onClick={handleSubmit}>Click me for answers!</button>
      </div>
      <div>
        <p className='mt-8'>Chatbot: {response}</p>
      </div>
  </div> */}
    
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
