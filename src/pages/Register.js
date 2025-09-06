// Import React and CSS module for button styling
import React, { useState } from 'react';
import styles from './Button.module.css';

// Registration component using React and JSX (no TypeScript)
const Register = () => {
  // State for form fields and message, pre-filled with test data
  const [form, setForm] = useState({
    username: 'aira',
    password: 'aira',
    email: 'aira@example.com',
    first_name: 'aira ',
    last_name: 'aira ou',
    phone: ''
  });
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use the current form state as the payload
    const url = 'http://localhost:8001/api/users/register/';
    console.log('Register API URL:', url);
    console.log('Register Payload:', JSON.stringify(form));
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setMessage(errorData.detail || 'Registration failed.');
        return;
      }
      const data = await response.json();
      setMessage('Registration successful!');
      setTimeout(() => {
        setMessage('');
        window.location.href = '/login';
      }, 1000);
    } catch (error) {
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: '320px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Register</h2>
        {message && <div style={{ color: message.includes('success') ? 'green' : 'red', marginBottom: '1rem' }}>{message}</div>}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your username"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="first_name" style={{ display: 'block', marginBottom: '0.5rem' }}>First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your first name"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="last_name" style={{ display: 'block', marginBottom: '0.5rem' }}>Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your last name"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your email"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your phone number"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your password"
          />
        </div>
        {/* Button using CSS module for styling */}
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;
