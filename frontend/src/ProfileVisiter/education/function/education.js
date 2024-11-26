import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import '../style/education.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Education({ portfolioId }) {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/get/${portfolioId}`);
        setEducation(response.data.education);
      } catch (error) {
        toast.error(error);
      }
    };
  
    fetchData();
  }, [portfolioId]);

  const Education = education.map((edu) => {
    return (
      <div key={edu._id} className='kokoko'>
        <div>
        <h1>{edu.school}</h1>
        <h3>{edu.universitySpecialization}</h3>
        </div>
        <div>
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
      <ToastContainer />
    </div>
  )
}

export default Education;