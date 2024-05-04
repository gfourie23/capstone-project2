import React, { useContext } from 'react';
//import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useGoogleLogin } from '@react-oauth/google';

const LoginPage = ({ onLogin }) => {
    const login = useGoogleLogin({
      onSuccess: (codeResponse) => {
        onLogin(codeResponse); // Call the onLogin function with the codeResponse
      },
      onError: (error) => console.log('Login Failed:', error)
    });
  
    return (
      <div>
        <h2>Sign in with Google</h2>
        <button onClick={login}>Sign in with Google 🚀</button>
      </div>
    );
  };

/* const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  //const history = useHistory();

  const handleLogin = () => {
    // Perform Google OAuth authentication
    // Upon successful authentication, obtain user data
    const userData = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    setUser(userData);
    history.push('/');
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}; */

export default LoginPage;