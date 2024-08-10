import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/client/clientpage.css";
import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch project data from API
    axios.get('http://localhost:8080/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError('Failed to fetch projects.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="projects">
      <Navigation />
      <Link to={'/PostProject'} className="btn">
        <button>Post Project</button>
      </Link>
      <div className="cards">
        {projects.map(project => (
          <div key={project.id} className="card">
            <div className="cardbody">
              <h4>{project.title}</h4>
              <h4>{project.description}</h4>
              <h4>Status: {project.status}</h4>
              <Link to={`/bids/${project.id}`}>
                <button>Show Bids</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
