import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userData = sessionStorage.getItem('clientData') || sessionStorage.getItem('freelancerData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUserName(parsedData.userName || '');
    }
  }, []);

  const handleSignOut = () => {
    sessionStorage.clear();
    navigate('/login', { replace: true });
  };

  return (
    <div className="body">
      <header>
        <div className="container1">
          <nav>
            <ul>
              <div className="leftel">
                <h4>Hello {userName || 'User'}</h4>
              </div>
              <div className="container2">
                <li><a href="/clientpage">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/freelancer-profile">Freelancers</a></li>
                <li><a href="/client-profile">Profile</a></li>
              </div>
              <div className="rightel">
                <button onClick={handleSignOut} className="btn btn-danger">
                  Sign Out
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
