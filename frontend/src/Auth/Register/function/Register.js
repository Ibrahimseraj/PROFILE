import React, { useState } from 'react';
import '../style/Register.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleRegister = () => {
    try {
      const response = axios.post('https://profile-backend-86b2.onrender.com/auth/register', {
        email,
        password
      });
      
      navigate('/Login');
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div className='register-con'>
      <div className='register'>
      <div className='adding-navbar-register'>
        <h1 className='register-logo'>PROFILE</h1>
        <h1 className='register-header'>Register</h1>
      </div>
      <div className='register-details'>
      <form onSubmit={handleRegister}>
        <input placeholder='Email' type='email' value={email} onChange={handleEmailChange} required />
        <input placeholder='password' type='password' value={password} onChange={handlePasswordChange} required />
        <button type='submit'>register</button>
      </form>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;