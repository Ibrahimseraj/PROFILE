import React, { useState, useEffect } from 'react';
import '../style/licensesAndCertificates.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function LicensesAndCertificates() {
  const [courses, setCourses] = useState([]);
  const [portfolioId, setPortfolioId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://profile-backend-86b2.onrender.com/user/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('profile_token')}`
          }
        });
        setPortfolioId(response.data._id);
        setCourses(response.data.licensesAndCertificates);
      } catch (error) {
        toast.error(error);
      }
    };
  
    fetchData();
  }, []);

  //const projects = courses.map((certificates) => {
    /*
    return (
      <div key={certificates._id}>
        <Link to={`/get/${portfolioId}/${certificates._id}/licenses/certificates`}  className='link-to-course'>
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
        {/*<Link to={`/update/licenses/certificates/${portfolioId}/${certificates._id}`}>
          <button className='update-course'><MdEdit /></button>
        </Link>*///}
        /*<Link to={`/delete/licenses/certificates/${portfolioId}/${certificates._id}`}>
          <button className='delete-course'><RiDeleteBinFill /></button>
        </Link>
      </div>
    );
  })*/


    const projects = courses.map((certificate) => {
      return (
        <div key={certificate._id} className="course-item">
          <div id="courses">
            <div className="course-details">
              <h1 id="course-organization">{certificate.organization}</h1>
              <h1 id="course-type">{certificate.course}</h1>
            </div>  
            <Link to={`/delete/licenses/certificates/${portfolioId}/${certificate._id}`}>
              <button 
                className="delete-course" 
                aria-label={`Delete ${certificate.course} from ${certificate.organization}`}
              >
                <RiDeleteBinFill />
              </button>
            </Link>
          </div>
        </div>
      );
    });
  
  return (
    <div>
      <h1 className='project' id='Course'>Courses</h1>
      {projects}
      <Link to={`/add/course/${portfolioId}`}>
        <button className='add-course'>Add Course</button>
      </Link>
      <ToastContainer />
    </div>
  )
}


export default LicensesAndCertificates;