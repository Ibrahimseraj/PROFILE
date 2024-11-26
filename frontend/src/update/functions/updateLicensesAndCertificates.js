/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/updateLicensesAndCertificates.css';




function UpdateLicensesAndCertificates() {
  const { portfolioId, licensesAndCertificatesId } = useParams();
  const [organization, setOrganization] = useState('');
  const [course, setCourse] = useState('');
  const [certificates, setCertificates] = useState();
  const [previewCertificates, setPreviewCertificates] = useState();
  const navigate = useNavigate();

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  }

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  }

  const handleCertificatesPhotoChange = (event) => {
    const file = event.target.files[0];
    setCertificates(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewCertificates(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const fetchLicensesAndCertificates = async () => {
        try {
            const response = await axios.get(`http://localhost:7575/portfolio/${portfolioId}/licenses/certificates/${licensesAndCertificatesId}`);
            setOrganization(response.data.organization);
            setCourse(response.data.course);
            setCertificates(response.data.certificates.url);
        } catch (error) {
            console.log(error);
        }
    }

    fetchLicensesAndCertificates();
  }, [portfolioId, licensesAndCertificatesId]);

  const handleLicensesAndCertificatesUpdate = async () => {
    const formData = new FormData();
    formData.append('organization', organization);
    formData.append('course', course);
    formData.append('certificates', certificates);

    try {
        const response = await axios.put(`http://localhost:7575/portfolio/${portfolioId}/update/licenses/certificates/${licensesAndCertificatesId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('profile_token')}`,
            }
        });

        if (response.status === 200) {
            navigate('/');
            console.log(response);
        } else {
            console.log('Update request was not successful.');
        }
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className='courses-update-con'>
      <div className='courses-update'>
          <div className='nav-bar-updating'>
            <h1 className='updating-logo'>PROFILE</h1>
            <h1 className='what-are-you-updating'>About me</h1>
          </div>
          <div className='courses-update-details'>
          <form onSubmit={handleLicensesAndCertificatesUpdate}>
        <div>
          <input placeholder='organization' type="text" value={organization} onChange={handleOrganizationChange} />
        </div>
        <div>
          <input placeholder='course' type="text" value={course} onChange={handleCourseChange} />
        </div>
        <div>
        {previewCertificates ? (
            <img src={previewCertificates} alt="Certificates Preview" className='certificate-img' />
          ) : (
            <img src={certificates} alt="existing certification image" className='certificate-img' />
        )}
          <input type="file" onChange={handleCertificatesPhotoChange} />
        </div>
        <button type="submit">save</button>
      </form>
          </div>
      </div>
    </div>
  )
}

export default UpdateLicensesAndCertificates;
*/


/*
  const handleLicensesAndCertificatesUpdate = async () => {
    const formData = new FormData();
    formData.append('organization', organization);
    formData.append('course', course);
    formData.append('certificates', certificates);

    try {
        const response = await axios.put(`http://localhost:7575/portfolio/${portfolioId}/update/licenses/certificates/${licensesAndCertificatesId}`, {
            organization: organization,
            course: course,
            certificates: certificates
        }, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${localStorage.getItem('profile_token')}`,
            }
        });

        navigate('/');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  }
  */





  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import { useParams, useNavigate } from 'react-router-dom';
  import '../styles/updateLicensesAndCertificates.css';
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  function UpdateLicensesAndCertificates() {
    const { portfolioId, licensesAndCertificatesId } = useParams();
    const [organization, setOrganization] = useState('');
    const [course, setCourse] = useState('');
    const [certificates, setCertificates] = useState('');
    const [previewCertificates, setPreviewCertificates] = useState(null);
    const navigate = useNavigate();
  
    const handleOrganizationChange = (e) => {
      setOrganization(e.target.value);
    }
  
    const handleCourseChange = (e) => {
      setCourse(e.target.value);
    }
  
    const handleCertificatesPhotoChange = (event) => {
      const file = event.target.files[0];
      setCertificates(file);
  
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewCertificates(reader.result);
      };
      reader.readAsDataURL(file);
    };
  
    useEffect(() => {
      const fetchLicensesAndCertificates = async () => {
          try {
              const response = await axios.get(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/licenses/certificates/${licensesAndCertificatesId}`);
              setOrganization(response.data.organization);
              setCourse(response.data.course);
              setCertificates(response.data.certificates.url);
          } catch (error) {
            toast.error(error);
          }
      }
  
      fetchLicensesAndCertificates();
    }, [portfolioId, licensesAndCertificatesId]);

    const handleLicensesAndCertificatesUpdate = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('organization', organization);
      formData.append('course', course);
  
      // Only append the certificates field if a new file has been selected
      if (certificates instanceof File) {
          formData.append('certificates', certificates);
      }
  
      try {
          const response = await axios.put(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/update/licenses/certificates/${licensesAndCertificatesId}`, formData, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('profile_token')}`,
              }
          });
  
          if (response.status === 200) {
              navigate('/');
              toast.success(response);
          } else {
            toast.error('Update request was not successful.');
          }
      } catch (error) {
        toast.error(error);
      }
  }
  
    return (
      <div className='courses-update-con'>
        <div className='courses-update'>
            <div className='nav-bar-updating'>
              <h1 className='updating-logo'>PROFILE</h1>
              <h1 className='what-are-you-updating'>Courses</h1>
            </div>
            <div className='courses-update-details'>
            <form onSubmit={handleLicensesAndCertificatesUpdate}>
              <div>
                <input placeholder='organization' type="text" value={organization} onChange={handleOrganizationChange} />
              </div>
              <div>
                <input placeholder='course' type="text" value={course} onChange={handleCourseChange} />
              </div>
              <div>
                {previewCertificates ? (
                  <img src={previewCertificates} alt="Certificates Preview" className='certificate-img' />
                ) : (
                  <img src={certificates} value={certificates} alt="existing certification image" className='certificate-img' />
                )}
                <input type="file" onChange={handleCertificatesPhotoChange} />
              </div>
              <button type="submit">save</button>
            </form>
            </div>
        </div>
        <ToastContainer />
      </div>
    )
  }
  
  export default UpdateLicensesAndCertificates;