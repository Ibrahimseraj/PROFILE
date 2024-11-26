import React, { useState, useEffect } from 'react';
import '../style/about.css';
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function About({ portfolioId }) {
  const [aboutme, setAboutMe] = useState('');
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/get/${portfolioId}`);
        setAboutMe(response.data.aboutMe);
        setImage(response.data.userImage.url);
      } catch (error) {
        toast.error(error);
      }
    };
  
    fetchData();
  }, [portfolioId]);

  return (
    <div>
        <h1 className='about-me' id='about'>About ME</h1>
        <div className='about'>
            <div className='about-me-description'>
              <h3>{aboutme}</h3>
            </div>
            {/*<div className='about-image-ibrahim'>
              <img src={image} alt="ibrahim's-bimoje" />
            </div>*/}
        </div>
        <ToastContainer />
    </div>
  );
}


export default About;