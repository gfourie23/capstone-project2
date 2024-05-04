import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'
import './index.css'
import { UserProvider } from './auth/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="988526045726-8gp2o79ef5sek6hbsfbpubqleqs3db3b.apps.googleusercontent.com">
  <React.StrictMode>
    <UserProvider>
      <App />
      </UserProvider>
  </React.StrictMode>
</GoogleOAuthProvider>,
document.getElementById('root')
)
