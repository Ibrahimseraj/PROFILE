import React, { useState, useEffect } from 'react';
import '../style/experience.css';
import axios from 'axios';
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Experience() {
  const [experience, setExperience] = useState([]);
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
        setExperience(response.data.experience);
      } catch (error) {
        toast.error(error);
      }
    };
  
    fetchData();
  }, []);

  const Experience = experience.map((exp) => {
    return (
      <div key={exp._id}>
        <div className='job-experience-container'>
          <div className='job-details-container'>
            <h1>{exp.role}</h1>
            <p>{exp.companyName}</p>
            <div className='job-details'>
              <p>{exp.locationType}</p>
              <p className='spriting'>|</p>
              <p className='job-type'>{exp.type}</p>
            </div>
            <p>{(new Date(exp.from)).toLocaleString('en-US', { month: 'short', year: 'numeric' })}</p>
            <p>{exp.to ? (new Date(exp.to)).toLocaleString('en-US', { month: 'short', year: 'numeric' }) : 'present'}</p>
            </div>
            <div className='job-description'>
              <p>{exp.description}</p>
            </div>
        </div>
        <Link to={`/update/experience/${portfolioId}/${exp._id}`}>
          <button className='update-education'><MdEdit /></button>
        </Link>
        <Link to={`/delete/experience/${portfolioId}/${exp._id}`}>
          <button className='delete-education'><RiDeleteBinFill /></button>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <h1 className='experience' id='experience'>Experience</h1>
      <div className='experience-container'>
        {Experience}
      </div>
      <Link to={`/add/experience/${portfolioId}`}>
        <button className='add-experience'>Add Experience</button>
      </Link>
      <ToastContainer />
    </div>
  )
}


export default Experience;