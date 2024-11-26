/*
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/myPhoto.css';




function MyPhoto() {
  const { portfolioId } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const navigate = useNavigate();

  const handlePhotoUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('images', selectedPhoto);

      const response = await axios.post(`http://localhost:7575/portfolio/${portfolioId}/update/userImage`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('profile_token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/');
    } catch (error) {
        console.log(error);
    }
  };

  /*
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };
  *//*

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(file);
  
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewPhoto(reader.result);
      const previewImage = document.getElementById('preview-image');
    };
  
    reader.readAsDataURL(file);
  };

 {/* return (
    <div className="profile-pic-con">
      <div className='profile-pic'>
      <div className='nav-bar-adding'>
        <h1 className='adding-logo'>PROFILE</h1>
        <h1 className='what-are-you-adding'>Photo</h1>
      </div>
      <div className="profile-pic-con">
        {previewPhoto && <img id="preview-image" src={previewPhoto} alt="Preview" style={{ width: '200px' }} />}
        <label htmlFor="file-input" className="choose-file-label">
          Upload Photo
          <input
            id="file-input"
            type="file"
            onChange={handlePhotoChange}
            className="selected-image-for-profile"
          />
        </label>
        <button onClick={handlePhotoUpload}>Upload Photo</button>
      </div>
      </div>
    </div>
 )*//*}
 return (
  <div className="profile-pic-con">
    <div className='profile-pic'>
      <div className='nav-bar-adding'>
        <h1 className='adding-logo'>PROFILE</h1>
        <h1 className='what-are-you-adding'>Photo</h1>
      </div>
      <div className="profile-pic-details">
        {previewPhoto ? (
          <img src={previewPhoto} alt="Preview" className='previewphoto-pic' />
          ) : (
          <label htmlFor="file-input" className="choose-file-label">
            <input
              id="file-input"
              type="file"
              onChange={handlePhotoChange}
              className="selected-image-for-profile"
            />
          </label>
        )}
        <button onClick={handlePhotoUpload} className='profile-pic-button'>save</button>
      </div>
    </div>
  </div>
);
}

export default MyPhoto;
*/




/*
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/myPhoto.css';
import { BiSolidImageAdd } from "react-icons/bi";



function MyPhoto() {
  const { portfolioId } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const navigate = useNavigate();

  const handlePhotoUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('images', selectedPhoto);

      const response = await axios.post(`http://localhost:7575/portfolio/${portfolioId}/update/userImage`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('profile_token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/');
    } catch (error) {
        console.log(error);
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(file);
  
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewPhoto(reader.result);
      const previewImage = document.getElementById('preview-image');
    };
  
    reader.readAsDataURL(file);
  };

  const handleIconClick = () => {
    document.getElementById('fileInput').click();
  };

 
 return (
  <div className="profile-pic-con">
    <div className='profile-pic'>
      <div className='nav-bar-adding'>
        <h1 className='adding-logo'>PROFILE</h1>
        <h1 className='what-are-you-adding'>Photo</h1>
      </div>
      <div className="profile-pic-details">
        {previewPhoto ? (
        <img src={previewPhoto} alt="Preview" className='previewphoto-pic' />
      ) : (
        <div className='iiiii'>
          <input
            id="fileInput"
            className='imginut'
            type="file"
            style={{ display: 'none' }}
            onChange={handlePhotoChange}
          />
          <BiSolidImageAdd
            className='addimageicon'
            onClick={handleIconClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}
        <button onClick={handlePhotoUpload} className='profile-pic-button'>save</button>
      </div>
    </div>
  </div>
);
}

export default MyPhoto;
*/



/*
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };
  */

  //{/* return (
  /*
    <div className="profile-pic-con">
      <div className='profile-pic'>
      <div className='nav-bar-adding'>
        <h1 className='adding-logo'>PROFILE</h1>
        <h1 className='what-are-you-adding'>Photo</h1>
      </div>
      <div className="profile-pic-con">
        {previewPhoto && <img id="preview-image" src={previewPhoto} alt="Preview" style={{ width: '200px' }} />}
        <label htmlFor="file-input" className="choose-file-label">
          Upload Photo
          <input
            id="file-input"
            type="file"
            onChange={handlePhotoChange}
            className="selected-image-for-profile"
          />
        </label>
        <button onClick={handlePhotoUpload}>Upload Photo</button>
      </div>
      </div>
    </div>
    */
// )//}

//{/*previewPhoto ? (
  /*<img src={previewPhoto} alt="Preview" className='previewphoto-pic' />
          ) : (
            <div className='iiiii'>
            <input
              className='imginut'
              type="file"
              onChange={handlePhotoChange}
            />
            <BiSolidImageAdd 
            className='addimageicon'
            onChange={handlePhotoChange} 
          />
        </div>*/
//)}


import React, { useState } from 'react';
        import { useNavigate, useParams } from 'react-router-dom';
        import axios from 'axios';
        import '../style/myPhoto.css';
        import { BiSolidImageAdd } from "react-icons/bi";
        
        function MyPhoto() {
          const { portfolioId } = useParams();
          const [selectedPhoto, setSelectedPhoto] = useState(null);
          const [previewPhoto, setPreviewPhoto] = useState(null);
          const [loading, setLoading] = useState(false);
          const [error, setError] = useState(null);
          const navigate = useNavigate();
        
          const handlePhotoUpload = async () => {
            if (!selectedPhoto) return;
        
            setLoading(true);
            setError(null);
        
            try {
              const formData = new FormData();
              formData.append('images', selectedPhoto);
        
              const response = await axios.post(`https://profile-backend-86b2.onrender.com/portfolio/${portfolioId}/update/userImage`, formData, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('profile_token')}`,
                  'Content-Type': 'multipart/form-data',
                },
              });
        
              if (response.status === 200) {
                navigate('/');
              } else {
                throw new Error('Upload failed');
              }
            } catch (error) {
              setError('Failed to upload photo. Please try again.');
              console.error(error);
            } finally {
              setLoading(false);
            }
          };
        
          const handlePhotoChange = (event) => {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
              setSelectedPhoto(file);
              const reader = new FileReader();
              reader.onload = () => setPreviewPhoto(reader.result);
              reader.readAsDataURL(file);
            } else {
              setError('Please select a valid image file.');
            }
          };
        
          const handleIconClick = () => {
            document.getElementById('fileInput').click();
          };
        
          return (
            <div className="profile-pic-con">
              <div className='profile-pic'>
                <div className='nav-bar-adding'>
                  <h1 className='adding-logo'>PROFILE</h1>
                  <h1 className='what-are-you-adding'>Photo</h1>
                </div>
                <div className="profile-pic-details">
                  {previewPhoto ? (
                    <img src={previewPhoto} alt="Preview" className='previewphoto-pic' />
                  ) : (
                    <div className='iiiii'>
                      <input
                        id="fileInput"
                        className='imginut'
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handlePhotoChange}
                        accept="image/*"
                        aria-label="Upload Image"
                      />
                      <BiSolidImageAdd
                        className='addimageicon'
                        onClick={handleIconClick}
                        style={{ cursor: 'pointer' }}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  {error && <p className="error-message">{error}</p>}
                  <button onClick={handlePhotoUpload} className='profile-pic-button' disabled={loading}>
                    {loading ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            </div>
          );
        }
        
        export default MyPhoto;