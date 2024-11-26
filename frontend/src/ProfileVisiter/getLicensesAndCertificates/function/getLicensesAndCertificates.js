import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/getLicensesAndCertificates.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function GetLicensesAndCertificates() {
    const { portfolioId, licensesAndCertificatesId } = useParams();
    const [organization, setOrganization] =  useState();
    const [course, setCourse] = useState();
    const [certificate, setCertificate] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/licenses/certificates/${licensesAndCertificatesId}`);
                setOrganization(response.data.organization);
                setCourse(response.data.course);
                setCertificate(response.data.certificates.url);
            } catch (error) {
                toast.error(error);
            }
        }

        fetchData();
    }, [portfolioId, licensesAndCertificatesId]);

  return (
    <div className='get-licensesAndCertificates-container'>
        <div className='get-licensesAndCertificates'>
            <div className='nav-bar-getting'>
                <h1 className='get-logo'>PROFILE</h1>
                <h1 className='what-are-you-getting'>Course</h1>
            </div>
            <div className='get-licensesAndCertificates-details'>
                <img src={certificate} />
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}


export default GetLicensesAndCertificates;