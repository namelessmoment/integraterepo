import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/freelancer/ProfilePanel.css';

const ProfilePanel = ({ onClose }) => {
  const navigate = useNavigate();

  const goToEditProfile = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="profile-panel">
      <button className="close-button" onClick={onClose}>×</button>
      <div className="profile-options">
        <button className="profile-option" onClick={goToEditProfile}>Edit Profile</button>
        <button className="profile-option">Sign Out</button>
      </div>
    </div>
  );
};

export default ProfilePanel;
