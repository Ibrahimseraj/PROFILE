import React, { useState } from 'react';
import '../style/addProfile.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';




function AddProfile() {
  const navigate = useNavigate();

  const handleProfileAdd = async () => {
    try {
      const response = await axios.post(
        'https://profile-backend-86b2.onrender.com/portfolio/add/portfolio',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('profile_token')}`,
          },
        }
      );
      navigate('/');
    } catch (error) {
      toast.error('you already have a profile');
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate('/');
    }
  };

  return (
    <div className='add-profile'>
      <div className='add-profile-con'>
        <div className='add-profile-navbar'>
          <h1 className='add-profile-logo'>PROFILE</h1>
          <h1 className='what-are-you-adding'>Add Profile</h1>
        </div>
        <div className='add-profile-details'>
          <button onClick={handleProfileAdd}>Add your profile</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddProfile