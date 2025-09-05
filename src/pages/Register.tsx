// Register.tsx
// Import React, CSS module, and define props type with TypeScript
import React, { useState } from 'react';
import styles from './Button.module.css';

// TypeScript interface for form state
interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  // useState with TypeScript for form fields
  const [form, setForm] = useState<RegisterForm>({ name: '', email: '', password: '' });
  const [message, setMessage] = useState<string>('');

  // Handle input changes (JSX + TS)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit (JSX + TS)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!form.name || !form.email || !form.password) {
      setMessage('All fields are required.');
      return;
    }
    setMessage('Registration successful!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: '320px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Register</h2>
        {message && <div style={{ color: message.includes('success') ? 'green' : 'red', marginBottom: '1rem' }}>{message}</div>}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Enter your name"
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
        {/* Button using CSS module and TypeScript */}
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;
