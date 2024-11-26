import React from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../style/deleteExperience.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function DeleteExperience() {
    const { portfolioId, experienceId } = useParams();
    const navigate = useNavigate();

    const handleExperienceDelete = async () => {
        try {
            const response = await axios.delete(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/delete/experience/${experienceId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('profile_token')}`
                }
            })
            
            navigate('/');
        } catch (error) {
            toast.error(error);
        }
    }

    const handleCancel = () => {
        navigate('/');
    }

  return (
    <div className='delete-experience-page-con'>
        <div className='delete-experience-page'>
            <div className='nav-bar-delete'>
                <Link to={'/'} className='home-refresh-link'><h1 className='delete-logo'>PROFILE</h1></Link>
                <h1 className='what-are-you-delete'>Experience</h1>
            </div>
            <div className='delete-education-details'>
                <p>Are you sure you want to delete this experience</p>
                <div className='delete-education-buttons'>
                    <button onClick={handleCancel}>discard</button>
                    <button onClick={handleExperienceDelete}>delete</button>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default DeleteExperience;