import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import '../style/Education.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Education() {
  const [education, setEducation] = useState([]);
  const [portfolioId, setPortfolioId] = useState('');
  const [educationId, setEducationId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://profile-backend-86b2.onrender.com/user/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('profile_token')}`
          }
        });
        setPortfolioId(response.data._id);
        setEducation(response.data.education);
      } catch (error) {
        toast.error(error);
      }
    };
  
    fetchData();
  }, []);

  const Education = education.map((edu) => {
    return (
      <div key={edu._id} className='kokoko'>
        <div className='education-details'>
          <h1>{edu.school} 🏫</h1>
          <h3>{edu.universitySpecialization}</h3>
        </div>
        <div>
        <Link to={`/update/education/${portfolioId}/${edu._id}`}>
          <button className='update-education'><MdEdit /></button>
        </Link>
        <Link to={`/delete/education/${portfolioId}/${edu._id}`} className='link-add-education'>
        <button className='delete-education'><RiDeleteBinFill /></button>
      </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className='education' id='education'>Education</h1>
      <div className='education-container'>
        {Education}
      </div>
      <Link to={`/add/education/${portfolioId}`} className='link-add-education'>
        <button className='add-education'>Add Education</button>
      </Link>
      <ToastContainer />
    </div>
  )
}

export default Education;