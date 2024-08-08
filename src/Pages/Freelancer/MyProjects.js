import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/freelancer/MyProjects.css';


const MyProjects = () => {
  const navigate = useNavigate();
  const [inProgressProjects, setInProgressProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' },
  ]);
  const [completedProjects, setCompletedProjects] = useState([]);

  const handleMarkAsComplete = (projectId) => {
    const projectToMark = inProgressProjects.find(project => project.id === projectId);
    if (projectToMark) {
      setInProgressProjects(inProgressProjects.filter(project => project.id !== projectId));
      setCompletedProjects([...completedProjects, projectToMark]);
    }
  };

  const handleCompletedProjectsClick = () => {
    navigate('/completed-projects', { state: { completedProjects } });
  };

  return (
    <div className="my-projects">
      <div className="header">
        <div className="freelancer-name">Freelancer Name</div>
        <div className="navbar">
          <a href="/my-projects">My Projects</a>
         
          <a href="/show-bids">Show Bids</a>
        </div>
      </div>
      <div className="projects-section">
        <div className="in-progress-section">
          <h2>In Progress Projects</h2>
          <div className="project-list">
            {inProgressProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="complete-button" onClick={() => handleMarkAsComplete(project.id)}>Mark as Complete</button>
              </div>
            ))}
          </div>
        </div>
        <button className="completed-projects-button" onClick={handleCompletedProjectsClick}>
          Go to Completed Projects
        </button>
      </div>
    </div>
  );
};

export default MyProjects;
