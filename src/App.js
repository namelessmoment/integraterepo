import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import ClientPage from './Pages/Client/Client';
import RegisterFreelancer from './Pages/RegisterFreelancer';
import FreelancerProfile from './Pages/Client/FreelancerProfile';
import Projects from './Pages/Client/Projects';
import ClientProfile from './Pages/Client/ClientProfile';
import Freelancer from './Pages/Freelancer/Freelancer';
import BidConfirmation from './Pages/Freelancer/BidConfirmation';
import MyProjects from './Pages/Freelancer/MyProjects';
import EditProfile from './Pages/Freelancer/EditProfile';
import ShowBids from './Pages/Freelancer/ShowBids';
import BidList from './Pages/Client/Bids';
import ContractDetails from './Pages/Client/Contract';
import PostProjectQuery from './Pages/Client/PostProject';
import CompletedProjects from './Pages/Freelancer/CompletedProjects';
import Contracts from './Pages/Freelancer/Contracts';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/clientpage" element={<ClientPage />} />
        <Route path="/registerfreelancer" element={<RegisterFreelancer />} />
        <Route path="/freelancer-profile" element={<FreelancerProfile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/client-profile" element={<ClientProfile />} />
        <Route path="/projects/bids" element={<BidList />} />
        <Route path="/contract" element={<ContractDetails />} />
        <Route path="/post-project" element={<PostProjectQuery />} />

        <Route path="/freelancer" element={<ProtectedRoute element={Freelancer} />} />
        <Route path="/bid-confirmation" element={<ProtectedRoute element={BidConfirmation} />} />
        <Route path="/my-projects" element={<ProtectedRoute element={MyProjects} />} />
        <Route path="/edit-profile" element={<ProtectedRoute element={EditProfile} />} />
        <Route path="/show-bids" element={<ProtectedRoute element={ShowBids} />} />
        <Route path="/completed-projects" element={<ProtectedRoute element={CompletedProjects} />} />
        <Route path="/contracts" element={<ProtectedRoute element={Contracts} />} />
      </Routes>
    </div>
  );
}

export default App;
