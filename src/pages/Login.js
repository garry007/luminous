// Import React and useState hook from the React library (JavaScript)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation (JS library)

// Login component using React, JavaScript, and JSX
const Login = () => {
  // useState is a React hook for managing component state (JS)
  const [username, setUsername] = useState('neyq');
  const [password, setPassword] = useState('tytqyt');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For navigation (React Router)

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8001/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      setLoading(false);
      if (response.ok) {
        navigate('/home');
      } else {
        let errorMsg = 'Login failed. Please check your credentials.';
        try {
          const data = await response.json();
          if (data && data.detail) errorMsg = data.detail;
        } catch {}
        setError(errorMsg);
      }
    } catch (err) {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  }

  // JSX: HTML-like code inside return
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #ece9e6 0%, #ffffff 100%)'
    }}>
      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minWidth: '300px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
  {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
  {loading && <div style={{ color: '#007bff', marginBottom: '1rem' }}>Logging in...</div>}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your username"
            autoComplete="username"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '0.75rem',
          background: loading ? '#6c757d' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '1rem',
          opacity: loading ? 0.7 : 1
        }} disabled={loading}>Login</button>
        <button
          type="button"
          onClick={() => navigate('/register')}
          style={{
            width: '100%',
            padding: '0.5rem',
            background: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          New user? Register
        </button>
      </form>
    </div>
  );
};

export default Login; // JavaScript export
