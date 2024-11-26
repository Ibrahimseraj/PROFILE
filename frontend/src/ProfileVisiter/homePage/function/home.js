import React, { useEffect, useState } from 'react';
import '../style/home.css';
import hello from '../../../images/logo_only.png';
import axios from 'axios';
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Home({ portfolioId }) {
  const [name, setname] = useState('');
  const [occupation, setOccupation] = useState('');

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/get/${portfolioId}`);
        setname(response.data.name);
        setOccupation(response.data.occupation);
      } catch (error) {
        toast.error(error);
      }
    };
  
    fetchData();
  }, [portfolioId]);

  return (
    <div className='home'>
        <div className='home-info'>
            <h4>Welcome</h4>
            <h1>{name}</h1>
            <h3>{occupation}</h3>
        </div>
        {/*<div className='home-img-con'>
            <img src={hello} alt='my-vr-emoje' className='ibrahim-hello-img' />
        </div>*/}
        <ToastContainer />
    </div>
  )
}

export default Home;