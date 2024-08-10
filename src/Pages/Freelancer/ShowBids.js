import React, { useEffect, useState } from 'react';
import '../../styles/freelancer/ShowBids.css';

const ShowBids = () => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    // Retrieve the bids from session storage
    const storedBids = JSON.parse(sessionStorage.getItem('bids')) || [];
    setBids(storedBids);
  }, []);

  return (
    <div className="show-bids">
      <h2>Your Bids</h2>
      <div className="bids-container">
        {bids.length > 0 ? (
          bids.map((bid, index) => (
            <div key={index} className="bid-card">
              <h3>Project: {bid.project.title}</h3>
              <p>Bid Amount: ${bid.bidAmount}</p>
              <p>Skills: {bid.skills}</p>
              <p>Special Requirements: {bid.specialRequirements}</p>
            </div>
          ))
        ) : (
          <p>No bids found</p>
        )}
      </div>
    </div>
  );
};

export default ShowBids;
