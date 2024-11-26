import React from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../style/deleteEducation.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function DeleteEducation() {
    const { portfolioId, educationId } = useParams();
    const navigate = useNavigate();

    const handleEducationDelete = async () => {
        try {
            const response = await axios.delete(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/delete/education/${educationId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('profile_token')}`
                }
            });

            navigate('/');
        } catch (error) {
            toast.error(error);
        }
    }

    const handleCancel = () => {
        navigate('/');
    }

  return (
    <div className='delete-education-page-con'>
        <div className='delete-education-page'>
            <div className='nav-bar-delete'>
                <Link to={'/'} className='home-refresh-link'><h1 className='delete-logo'>PROFILE</h1></Link>
                <h1 className='what-are-you-delete'>Education</h1>
            </div>
            <div className='delete-education-details'>
                <p>are you sure you want to delete this education</p>
                <div className='delete-education-buttons'>
                    <button onClick={handleCancel}>discard</button>
                    <button onClick={handleEducationDelete}>delete</button>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}


export default DeleteEducation;