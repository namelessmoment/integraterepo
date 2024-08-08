import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/freelancer/EditProfile.css';

const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null); // No default image, use CSS for default logo
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('example@example.com');
  const [contactNo, setContactNo] = useState('123-456-7890');
  const [skills, setSkills] = useState('JavaScript, React');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const navigate = useNavigate();

  const handleProfilePictureChange = (e) => {
    // Simulate changing profile picture
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert('New passwords do not match!');
      return;
    }

    // Handle form submission
    alert('Profile updated successfully!');
    navigate('/freelancer');
  };

  return (
    <div className="edit-profile">
      <h1>Edit Profile</h1>
      <div className="profile-picture">
        <img
          src={profilePicture || '/path/to/default-logo.png'} // Replace with your logo path
          alt="Profile"
          className="profile-img"
        />
        <input
          type="file"
          accept="image/*"
          id="profilePictureInput"
          onChange={handleProfilePictureChange}
        />
        <label htmlFor="profilePictureInput" className="update-button">
          Change Profile Picture
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Change Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Change Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Change Contact Number</label>
          <input
            type="tel"
            id="contactNo"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Change Skills</label>
          <input
            type="text"
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="oldPassword">Enter Old Password</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">Enter New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmNewPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
