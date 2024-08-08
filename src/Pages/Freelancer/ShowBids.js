import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/freelancer/ShowBids.css';

const ShowBids = () => {
  const navigate = useNavigate();

  const initialBids = [
    { id: 1, title: 'Project 1', description: 'Description of project 1', bidAmount: '$100' },
    { id: 2, title: 'Project 2', description: 'Description of project 2', bidAmount: '$200' },
    { id: 3, title: 'Project 3', description: 'Description of project 3', bidAmount: '$150' },
  ];

  const [bids, setBids] = useState(initialBids);

  const handleUpdateClick = (bid) => {
    navigate('/bid-confirmation', { state: { project: bid, isUpdate: true } });
  };

  const handleDiscardClick = (bidId) => {
    setBids(bids.filter(bid => bid.id !== bidId));
  };

  return (
    <div className="show-bids">
      <h2>Show Bids</h2>
      <div className="bids-list">
        {bids.map((bid) => (
          <div className="bid-card" key={bid.id}>
            <h3>{bid.title}</h3>
            <p>{bid.description}</p>
            <p>Bid Amount: {bid.bidAmount}</p>
            <button className="update-button" onClick={() => handleUpdateClick(bid)}>Update</button>
            <button className="discard-button" onClick={() => handleDiscardClick(bid.id)}>Discard</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBids;
