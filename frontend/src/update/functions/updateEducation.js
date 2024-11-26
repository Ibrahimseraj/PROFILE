import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/updateEducation.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function UpdateEducation() {
  const { portfolioId, educationId } = useParams();
  const [school, setSchool] = useState('');
  const [universitySpecialization, setUniversitySpecialization] = useState('');
  const navigate = useNavigate();

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  }

  const handleUniversitySpecializationChange = (e) => {
    setUniversitySpecialization(e.target.value);
  }

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/education/${educationId}`);
        const { school, universitySpecialization } = response.data;
        
        setSchool(school);
        setUniversitySpecialization(universitySpecialization);
      } catch (error) {
        toast.error('Error fetching education:', error);
      }
    };

    fetchEducation();
  }, [portfolioId, educationId]);

  const handleEducationUpdateChange = async () => {
    try {
      await axios.put(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/update/education/${educationId}`, {
        school: school,
        universitySpecialization: universitySpecialization
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
    <div className='update-education-page-con'>
      <div className='update-education-page'>
        <div className='nav-bar-updating'>
          <h1 className='updating-logo'>PROFILE</h1>
          <h1 className='what-are-you-updating'>Education</h1>
        </div>
        <div className='updating-details-education'>
          <input value={school} onChange={handleSchoolChange} className='updating-details-education-input' />
          <input value={universitySpecialization} onChange={handleUniversitySpecializationChange} className='updating-details-education-input' />
          <button onClick={handleEducationUpdateChange}>Save</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}


export default UpdateEducation;