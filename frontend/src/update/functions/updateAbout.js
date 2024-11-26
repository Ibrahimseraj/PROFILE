import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/updateAbout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function UpdateAbout() {
    const { portfolioId } = useParams();
    const [aboutMe, setAboutMe] = useState('');
    const navigate = useNavigate();

    const handleAboutMeChange = (e) => {
        setAboutMe(e.target.value);
    }

    useEffect(() => {
        const fetchAboutMe = async () => {
            try {
                const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/get/${portfolioId}`);
                setAboutMe(response.data.aboutMe);
            } catch (error) {
                console.error('Error fetching education:', error);
            }
        }

        fetchAboutMe();
    }, [portfolioId]);

    /*
    const handleAboutMeUpdate = async () => {
        try {
          await axios.put(`http://localhost:7575/portfolio/${portfolioId}/update/aboutMe`, {
            aboutMe: aboutMe
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('profile_token')}`
            }
          });
    
          navigate('/');
        } catch (error) {
          console.error('Error updating education:', error);
        }
    }
    */

    const handleAboutMeUpdate = async () => {
      try {
        const response = await axios.put(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/update/aboutMe`, {
          aboutMe: aboutMe
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('profile_token')}`
          }
        });

        toast.success(response.data.message);
        navigate('/');
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error('something is going wrong');
        }
      }
    };  

  return (
    <div className='update-about-con'>
      <div className='update-about'>
        <div className='nav-bar-updating'>
          <h1 className='updating-logo'>PROFILE</h1>
          <h1 className='what-are-you-updating'>About me</h1>
        </div>
        <div className='updating-details-about'>
          <textarea
              className='aboutme-description'
              value={aboutMe}
              onChange={handleAboutMeChange}
              placeholder='What do you want to write about'
          />
          <button onClick={handleAboutMeUpdate}>save</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default UpdateAbout;