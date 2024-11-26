import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/updateExperience.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function UpdateExperience() {
  const { portfolioId, experienceId } = useParams();
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState();
  const [type, setType] = useState('');
  const [locationType, setLocationType] = useState('');
  const [description, setDescription] = useState('');
  const [from, setFrom] = useState();
  const [to, setTo] = useState(null);
  const navigate = useNavigate();

  const handleCompanyNameChange = (e) => {
      setCompanyName(e.target.value);
  }

  const handleRoleChange = (e) => {
      setRole(e.target.value);
  }

  const handleTypeChange = (e) => {
      setType(e.target.value);
  }

    const handleLocationTypeChange = (e) => {
        setLocationType(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleFromChange = (date) => {
      const formattedDate = moment(date).format('YYYY-MM-DD');
      setFrom(formattedDate);
    }

    const handleToChange = (date) => {
      const toFormate = moment(date).format('YYYY-MM-DD');
      setTo(toFormate);
    }

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/experience/${experienceId}`);

        setCompanyName(response.data.companyName);
        setRole(response.data.role);
        setType(response.data.type);
        setLocationType(response.data.locationType);
        setDescription(response.data.description);
        setFrom(response.data.from);
        setTo(response.data.to);
        toast.success(response.data);
      } catch (error) {
        toast.error('Error fetching education:', error);
      }
    };

    fetchExperience();
  }, [portfolioId, experienceId]);

  
  const handleExperienceUpdateChange = async () => {
    try {
      await axios.put(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/update/experience/${experienceId}`, {
        companyName: companyName,
        role: role,
        type: type,
        locationType: locationType,
        description: description,
        from: from,
        to: to
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('profile_token')}`
        }
      });

      navigate('/');
    } catch (error) {
      toast.error('Error updating education:', error);
    }
  }

  return (
    <div className='update-experience-page-con'>
      <div className='update-experience-page'>
        <div className='nav-bar-updating'>
          <h1 className='updating-logo'>PROFILE</h1>
          <h1 className='what-are-you-updating'>Experience</h1>
        </div>
        <div className='updating-details-experience'>
          <input placeholder='where you work' value={companyName} onChange={handleCompanyNameChange} />
          <input placeholder='role' value={role} onChange={handleRoleChange} />
          <select id="employment-type" value={type} onChange={handleTypeChange}>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
            <option value="internship">Internship</option>
            <option value="freelance">Freelance</option>
            <option value="remote">Remote</option>
          </select>
          <select id="location-type" value={locationType} onChange={handleLocationTypeChange}>
            <option value="on-site">on-site</option>
            <option value="hybird">Hybird</option>
            <option value="remote">Remote</option>
          </select>
          <div className='date-add-exp'>
            <DatePicker
              selected={from}
              onChange={handleFromChange}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              placeholderText="From"
            />
            <DatePicker
              selected={to}
              onChange={handleToChange}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              placeholderText="to"
            />
          </div>
          <textarea placeholder='description' value={description} onChange={handleDescriptionChange} className='desc-update-experience' />
          <button onClick={handleExperienceUpdateChange} className='update-experience-submit'>save</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default UpdateExperience;