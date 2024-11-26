import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hello from '../images/logo_only.png';
import { MdEdit } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { RiDeleteBinFill } from "react-icons/ri";
import './UI.css';
import Home from './homePage/function/home';
import Navbar from './navbar/function/navbar';
import About from './about/function/about';
import Education from './education/function/education';
import LicensesAndCertificates from './licensesAndCertificates/function/licensesAndCertificates';
import Experience from './experience/function/experience';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function UI() {
  const [portfolioId, setPortfolioId] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/get/${id}`);
          setPortfolioId(response.data._id);
        } catch (error) {
          toast.error(error);
        }
    }
    fetchData();
  }, []);

  return (
    <div id='all-con'>
      <div id='con'>
        <section id='UI'>
          <Navbar />
          <Home portfolioId={portfolioId} />
          <About portfolioId={portfolioId} />
          <Education portfolioId={portfolioId} />
          <LicensesAndCertificates portfolioId={portfolioId} />
          <Experience portfolioId={portfolioId} />
        </section>
      </div>
      <ToastContainer />
    </div>
  )
}


export default UI;