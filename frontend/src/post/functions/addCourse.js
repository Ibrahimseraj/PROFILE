/*
import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/addCourse.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddCourse() {
  const { portfolioId } = useParams();
  const [organization, setOrganization] = useState('');
  const [course, setCourse] = useState('');
  const [certificates, setCertificates] = useState(null);
  const [previewCertificates, setPreviewCertificates] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);
  const navigate = useNavigate();

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleCertificatesPhotoChange = (event) => {
    const file = event.target.files[0];
    setCertificates(file);
    setImageSelected(true);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewCertificates(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddCourse = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('organization', organization);
    formData.append('course', course);
    formData.append('certificates', certificates);
  
    try {
      const response = await axios.post(
        `https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/add/licenses/certificates`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('profile_token')}`,
          },
        }
      );
  
      console.log(response.data.message);
       navigate('/');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something is going wrong');
      }
    }
  };

  return (
    <div  className='add-course-page-con'>
      <div className='add-course-page'>
        <div className='nav-bar-adding'>
          <h1 className='adding-logo'>PROFILE</h1>
          <h1 className='what-are-you-adding'>Course</h1>
        </div>
        <div className='add-course-details'>
          <form onSubmit={handleAddCourse}>
            <div>
              <input placeholder='organization' type="text" value={organization} onChange={handleOrganizationChange} />
            </div>
            <div>
              <input placeholder='course' type="text" value={course} onChange={handleCourseChange} />
            </div>
            <div style={{ backgroundColor: imageSelected ? 'transparent' : '#3CB371', marginTop: '20px', width: '350px' }}>
              {imageSelected ? (
                <>
                  <img src={previewCertificates} alt="Certificates Preview" style={{ width: '200px' }} />
                  <button onClick={() => setImageSelected(false)}>Remove</button>
                </>
              ) : (
                <label>
                  <input type="file" onChange={handleCertificatesPhotoChange} style={{ display: 'none' }} />
                  Choose Image
                </label>
              )}
            </div>
            <button type="submit">save</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}


export default AddCourse;

Add course with certification image
*/



import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/addCourse.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function AddCourse() {
  const { portfolioId } = useParams();
  const [organization, setOrganization] = useState('');
  const [course, setCourse] = useState('');
  const navigate = useNavigate();

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleAddCourse = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        `https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/add/licenses/certificates`,
        { organization, course },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('profile_token')}`,
          },
        }
      );
  
      toast.success(response.data.message);
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something is going wrong');
      }
    }
  };

  return (
    <div className='add-course-page-con'>
      <div className='add-course-page'>
        <div className='nav-bar-adding'>
          <h1 className='adding-logo'>PROFILE</h1>
          <h1 className='what-are-you-adding'>Course</h1>
        </div>
        <div className='add-course-details'>
          <form onSubmit={handleAddCourse}>
            <div>
              <input 
                placeholder='Organization' 
                type="text" 
                value={organization} 
                onChange={handleOrganizationChange} 
                required 
              />
            </div>
            <div>
              <input 
                placeholder='Course' 
                type="text" 
                value={course} 
                onChange={handleCourseChange} 
                required 
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddCourse;