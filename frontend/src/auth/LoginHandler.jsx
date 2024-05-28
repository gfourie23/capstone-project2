import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useUser } from './UserContext';

const LoginHandler = () => {
  const navigate = useNavigate();
  const { user, setUser, setProfile } = useUser();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      localStorage.setItem('user', JSON.stringify(codeResponse));
      navigate('/home'); // Redirect to the homepage after login
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
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
          localStorage.setItem('profile', JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [user, setProfile]);

  const logout = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
    navigate('/'); // Redirect to the login page after logout
  };

  return { login, logout };
};

export default LoginHandler;
