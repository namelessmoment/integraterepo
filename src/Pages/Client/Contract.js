import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/client/contract.css";

const contract = {
  projectTitle: "Website Development",
  freelancerName: "John Doe",
  freelancerProfileDescription:
    "Experienced web developer with expertise in React and Node.js",
  freelancerEmail: "john.doe@example.com",
  bidAmount: "500",
  startDate: "2024-08-01",
  endDate: "2024-09-01",
};

const ContractDetails = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleCreateContract = () => {
    if (isChecked) {
      alert("Contract Created Successfully!");
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Contract Details</h2>
      <div className="card1">
        <div className="card-body">
          <h5 className="card-title">Project Title</h5>
          <p className="card-text">{contract.projectTitle}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Freelancer Name</h5>
          <p className="card-text">{contract.freelancerName}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Freelancer Profile Description</h5>
          <p className="card-text">{contract.freelancerProfileDescription}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Freelancer Email</h5>
          <p className="card-text">{contract.freelancerEmail}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Bid Amount</h5>
          <p className="card-text">{contract.bidAmount}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Start Date</h5>
          <p className="card-text">{contract.startDate}</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">End Date</h5>
          <p className="card-text">{contract.endDate}</p>
        </div>
        <div className="card2">
          <div className="card-body">
            <h5 className="card-title">Terms and Conditions</h5>
            <p className="card-text">
              1. The freelancer agrees to complete the project by the specified
              end date.
              <br />
              2. The client agrees to pay the bid amount upon successful
              completion of the project.
              <br />
              3. Any modifications to the project scope must be agreed upon by
              both parties.
              <br />
              4. Confidentiality must be maintained by both parties regarding
              project details.
              <br />
              5. The freelancer guarantees that all work will be original and
              free from plagiarism.
              <br />
              6. The client has the right to request progress updates at any
              time.
              <br />
              7. Any disputes will be resolved through mutual negotiation.
              <br />
              8. Both parties agree to the terms and conditions set forth in
              this contract.
            </p>
          </div>
        </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="termsConditions"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="termsConditions">
          I agree to the terms and conditions
        </label>
      </div>
      <button
        className="btn btn-primary"
        onClick={handleCreateContract}
        disabled={!isChecked}
      >
        Create Contract
      </button>
    </div>
    </div>
  );
};
export default ContractDetails;
