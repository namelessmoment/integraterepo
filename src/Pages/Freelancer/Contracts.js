import React, { useState } from 'react';
import '../../styles/freelancer/Contracts.css';

const inProcessContracts = [
  { id: 1, title: "Mobile App Development", freelancerName: "John Doe", email: "john@example.com", description: "Developing a cross-platform mobile app.", startDate: "2023-01-01", status: "InProcess" },
  { id: 2, title: "Website Redesign", freelancerName: "Jane Smith", email: "jane@example.com", description: "Redesigning the company website.", startDate: "2023-02-15", status: "InProcess" },
  // Add more in-process contracts as needed
];

const completedContracts = [
  { id: 1, title: "E-commerce Platform", freelancerName: "Alice Brown", email: "alice@example.com", description: "Built an e-commerce platform.", startDate: "2022-05-01", endDate: "2022-12-01", status: "Completed" },
  { id: 2, title: "CRM System", freelancerName: "Bob Green", email: "bob@example.com", description: "Developed a CRM system.", startDate: "2022-03-01", endDate: "2022-10-01", status: "Completed" },
  // Add more completed contracts as needed
];

const Contracts = () => {
  const [showCompleted, setShowCompleted] = useState(false);

  const toggleCompletedContracts = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="contracts">
      <h2>In-Process Contracts</h2>
      {inProcessContracts.map(contract => (
        <div key={contract.id} className="contract-card">
          <h3>{contract.title}</h3>
          <p>Freelancer: {contract.freelancerName}</p>
          <p>Email: {contract.email}</p>
          <p>Description: {contract.description}</p>
          <p>Start Date: {contract.startDate}</p>
          <p>Status: {contract.status}</p>
        </div>
      ))}
      <button className="toggle-button" onClick={toggleCompletedContracts}>
        {showCompleted ? "Hide" : "Show"} Completed Contracts
      </button>
      {showCompleted && (
        <div className="completed-contracts">
          <h2>Completed Contracts</h2>
          {completedContracts.map(contract => (
            <div key={contract.id} className="contract-card">
              <h3>{contract.title}</h3>
              <p>Freelancer: {contract.freelancerName}</p>
              <p>Email: {contract.email}</p>
              <p>Description: {contract.description}</p>
              <p>Start Date: {contract.startDate}</p>
              <p>End Date: {contract.endDate}</p>
              <p>Status: {contract.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contracts;
