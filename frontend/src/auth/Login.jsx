import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useGoogleLogin } from '@react-oauth/google';

const LoginPage = ({ login }) => {
  //const history = useHistory();
  /*const navigate = useNavigate(); 
  const login = useGoogleLogin({
    
      onSuccess: (codeResponse) => {
  
        onLogin(codeResponse); // Call the onLogin function with the codeResponse
        navigate('/home');
        //history.push('/home');
      },
      onError: (error) => console.log('Login Failed:', error)
    }); */
  
    return (
      <div>
        <h2 className="text-3xl font-black mb-6 mt-6 text-white">Speak Spanish with Confidence</h2>
          <h3 className='text-xl font-bold mb-12'>The Language Learning App Tailored for Physical Therapy Clinicians</h3>
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