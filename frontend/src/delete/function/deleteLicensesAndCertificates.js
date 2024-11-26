import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../style/deleteLicensesAndCertificates.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function DeleteLicensesAndCertificates() {
    const { portfolioId, licensesAndCertificatesId } = useParams();
    const navigate = useNavigate();

    const handelDeleteLicensesAndCertificates = async () => {
        try {
            const response = await axios.delete(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/delete/licensesAndCertificates/${licensesAndCertificatesId}`, {
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
    <div className='delete-course-page-con'>
        <div className='delete-course-page'>
            <div className='nav-bar-delete'>
                <Link to={'/'} className='home-refresh-link'><h1 className='delete-logo'>PROFILE</h1></Link>
                <h1 className='what-are-you-delete'>Course</h1>
            </div>
            <div className='delete-course-details'>
                <p>are you sure you want to delete this course</p>
                <div className='delete-course-buttons'>
                    <button onClick={handleCancel}>discard</button>
                    <button onClick={handelDeleteLicensesAndCertificates}>delete</button>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}


export default DeleteLicensesAndCertificates;