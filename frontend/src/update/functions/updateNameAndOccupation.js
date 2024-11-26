import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/updateNameAndOccupation.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function UpdateNameAndOccupation() {
    const { portfolioId } = useParams();
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleOcupationChange = (e) => {
        setOccupation(e.target.value);
    }

    useEffect(() => {
        const fetchAboutMe = async () => {
            try {
                const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/get/${portfolioId}`);
                setName(response.data.name);
                setOccupation(response.data.occupation);
            } catch (error) {
                console.error('Error fetching education:', error);
            }
        }

        fetchAboutMe();
    }, [portfolioId]);

    const handleNameAndOccupationUpdate = async () => {
        try {
          await axios.put(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/update/name/occupation`, {
            name: name,
            occupation: occupation
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('profile_token')}`
            }
          });
    
          navigate('/');
        } catch (error) {
          toast.error('Error updating education:', error);
        }
    }

  return (
    <div className='update-name-and-occupation-con'>
      <div className='update-name-and-occupation'>
        <div className='nav-bar-updating'>
          <h1 className='updating-logo'>PROFILE</h1>
          <h1 className='what-are-you-updating'>name & occupation</h1>
        </div>
        <div className='updating-details-Name-occupation'>
          <input placeholder='Name' value={name} onChange={handleNameChange} />
          <input placeholder='Occupation' value={occupation} onChange={handleOcupationChange} />
          <button onClick={handleNameAndOccupationUpdate}>save</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default UpdateNameAndOccupation;