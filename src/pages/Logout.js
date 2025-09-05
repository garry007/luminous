import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    // Here you would clear auth/session
    setTimeout(() => navigate('/'), 1000);
  }, [navigate]);
  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
