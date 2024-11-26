import React, { useEffect, useState, useRef } from 'react';
import '../style/Home.css';
import hello from '../../../images/logo_only.png';
import axios from 'axios';
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoCopySharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Home() {
  const [name, setname] = useState('');
  const [occupation, setOccupation] = useState('');
  const [portfolioId, setPortfolioId] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://profile-backend-86b2.onrender.com/user/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('profile_token')}`
          }
        });
        setname(response.data.name);
        setOccupation(response.data.occupation);
        setPortfolioId(response.data._id);
      } catch (error) {
        toast.error(error);
      }
    };
  
    fetchData();
  }, []);

  const textToCopy = `http://localhost:3000/profile/${portfolioId}`;
  const tempInputRef = useRef(null);

  const handleCopy = () => {
    tempInputRef.current = document.createElement('input');
    document.body.appendChild(tempInputRef.current);
    tempInputRef.current.value = textToCopy;

    tempInputRef.current.select();
    document.execCommand('copy');

    document.body.removeChild(tempInputRef.current);
    toast.success('URL copyed successfully');
  };

  return (
    <div className='home'>
      <div className='home-info'>
        <h4>only copy this URL for sharing <IoCopySharp className='copy-url' onClick={handleCopy} /></h4>
        <h1>{name}</h1>
        <h3>{occupation}</h3>
        <Link to={`/update/name/occupation/${portfolioId}`}>
          <button className='update-name-occupation'><MdEdit /></button>
        </Link>
      </div>
      {/*<div className='home-img-con'>
        <img src={hello} alt='my-vr-emoje' className='ibrahim-hello-img' />
      </div>*/}
      <ToastContainer />
    </div>
  )
}

export default Home;