import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => navigate('/')}>Go Home</button>
      <button onClick={() => navigate('/logout')}>Logout</button>
    </div>
  );
};

export default Dashboard;
