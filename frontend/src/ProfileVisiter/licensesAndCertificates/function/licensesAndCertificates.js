import React, { useState, useEffect } from 'react';
import '../style/licensesAndCertificates.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function LicensesAndCertificates({ portfolioId }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/get/${portfolioId}`);
        setCourses(response.data.licensesAndCertificates);
      } catch (error) {
        toast.error(error);
      }
    };
  
    fetchData();
  }, [portfolioId]);

  /*
  const projects = courses.map((certificates) => {
    return (
      <div key={certificates._id}>
        <Link to={`/get/${portfolioId}/${certificates._id}/licenses/certificates`} className='link-to-course'>
        <div id='courses'>
          <div className='course-details'>
            <h1 id='course-organization'>{certificates.organization}</h1>
            <h1 id='course-type'>{certificates.course}</h1>
          </div>
          {/*<div id='course-certificate'>
            <img src={certificates.certificates.url} />
          </div>*//*}
        </div>
        </Link>
      </div>
    );
  });
  */

  const projects = courses.map((certificate) => {
    return (
      <div key={certificate._id} className="course-item">
        <div id="courses">
          <div className="course-details">
            <h1 id="course-organization">{certificate.organization}</h1>
            <h1 id="course-type">{certificate.course}</h1>
          </div>  
        </div>
      </div>
    );
  });    
    
  return (
    <div>
      <h1 className='project' id='Course'>Courses</h1>
      {projects}
      <ToastContainer />
    </div>
  )
}


export default LicensesAndCertificates;