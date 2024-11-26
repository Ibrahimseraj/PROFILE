import React, { useState, useEffect } from 'react';
import '../style/About.css';
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function About() {
  const [aboutme, setAboutMe] = useState('');
  const [image, setImage] = useState();
  const [portfolioId, setPortfolioId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://profile-backend-86b2.onrender.com/user/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('profile_token')}`
          }
        });
        setAboutMe(response.data.aboutMe);
        setImage(response.data.userImage.url);
        setPortfolioId(response.data._id);
      } catch (error) {
        toast.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
        <h1 className='about-me' id='about'>About ME</h1>
        <div className='about'>
            <div className='about-me-description'>
              <h3>{aboutme}</h3>
              <Link to={`/update/aboutme/${portfolioId}`}>
                <button className='about-update-link'><MdEdit /></button>
              </Link>
            </div>
            {/*<div className='about-image-ibrahim'>
              <img src={image} alt="ibrahim's-bimoje" />
              <Link to={`/my/photo/${portfolioId}`}>
                <button className='about-update-link'><MdEdit /></button>
              </Link>
            </div>*/}
        </div>
        <ToastContainer />
    </div>
  );
}


export default About;