import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://profile-backend-86b2.onrender.com/auth/login', {
        email,
        password,
      });

      localStorage.setItem('profile_token', response.data.token);

      const profileResponse = await axios.get('https://profile-backend-86b2.onrender.com/user/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('profile_token')}`,
        },
      });

      navigate('/check/profile');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className='login-con'>
      <div className='login'>
      <div className='adding-navbar-login'>
        <h1 className='login-logo'>PROFILE</h1>
        <h1 className='login-header'>Login</h1>
      </div>
      <div className='login-details'>
      <form onSubmit={handleLogin}>
        <input placeholder='Email' type='email' value={email} onChange={handleEmailChange} required />
        <input placeholder='password' type='password' value={password} onChange={handlePasswordChange} required />
        <button type='submit'>login</button>
      </form>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;




