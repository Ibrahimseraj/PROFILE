import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/addEducation.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function AddEducation() {
    const { portfolioId } = useParams();
    const [school, setSchool] = useState('');
    const [universitySpecialization, setUniversitySpecialization] = useState('');
    const navigate = useNavigate();

    const handleSchoolChange = (e) => {
        setSchool(e.target.value);
    }

    const handleUniversitySpecializationChange = (e) => {
        setUniversitySpecialization(e.target.value);
    }

    const handleAddEducation = async () => {
        try {
            const response = await axios.post(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/add/education`, {
                school: school,
                universitySpecialization: universitySpecialization
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
    }

  return (
    <div className='add-education-page-con'>
        <div className='add-education-page'>
            <div className='nav-bar-adding'>
                <h1 className='adding-logo'>PROFILE</h1>
                <h1 className='what-are-you-adding'>Education</h1>
            </div>
            <div className='add-education-details'>
                <input placeholder='School' value={school} onChange={handleSchoolChange} />
                <input placeholder='Field of study & Degree' value={universitySpecialization} onChange={handleUniversitySpecializationChange} />
                <button onClick={handleAddEducation}>save</button>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}


export default AddEducation;