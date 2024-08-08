import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/freelancer/BidCinfirmation.css';

const BidConfirmation = () => {
  const location = useLocation();
  const { project } = location.state || {};

  const [bidAmount, setBidAmount] = useState('');
  const [skills, setSkills] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState('');

  useEffect(() => {
    if (project) {
      setBidAmount(project.bidAmount);
    }
  }, [project]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the bid submission logic here
    console.log('Bid submitted:', { bidAmount, skills, specialRequirements });
  };

  return (
    <div className="bid-confirmation">
      <h2>Bid Confirmation</h2>
      {project ? (
        <div className="project-details">
          <h3>Project: {project.title}</h3>
          <p>Description: {project.description}</p>
          <p>Current Bid Amount: {project.bidAmount}</p>
        </div>
      ) : (
        <p>No project details available</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Bid Amount</label>
          <input
            type="text"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Skills</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Special Requirements</label>
          <textarea
            value={specialRequirements}
            onChange={(e) => setSpecialRequirements(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BidConfirmation;
