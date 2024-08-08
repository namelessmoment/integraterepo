import { useState } from "react";
import '../../styles/client/bids.css'
import { Link } from "react-router-dom";

const BidList = () => {
    const [bids, setBids] = useState([ {
        freelancerName: 'Alice Johnson',
        amount: 500,
        description:"description about freelancer",
        comments: 'I can complete this project in two weeks.',
      }]);

    return (
      <div className="bid-list">
        <h2>Bids for the Project</h2>
        {bids.length > 0 ? (
          <ul className="list-group">
            {bids.map((bid, index) => (
              <li key={index} className="list-group-item">
                <div className="bid-info">
                  <h5>{bid.freelancerName}</h5>
                  <p>Bid Amount: ${bid.amount}</p>
                  <p>Description:{bid.description}</p>
                  <p>Comments: {bid.comments}</p>
                  <Link to={'/Contract'}>
                    <button>Assign</button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No bids have been placed yet.</p>
        )}
      </div>
    );
  };
  
  
  export default BidList;