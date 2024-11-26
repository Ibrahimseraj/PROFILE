import React from 'react';
import '../style/checkProfile.css';



function CheckProfile() {
  return (
    <div className='check-profile-con'>
        <div className='check-profile'>
            <div className='nav-bar-check-profile'>
                <h1>Profile</h1>
            </div>
            <div className='check-profile-details'>
                <a href='/addProfile'>add your profile</a>
                <a href='/'>I already have profile</a>
            </div>
        </div>
    </div>
  )
}

export default CheckProfile;