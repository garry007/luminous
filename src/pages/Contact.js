import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div style={{ maxWidth: 700, margin: '4rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2.5rem' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '1.5rem' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" style={inputStyle} />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" style={inputStyle} />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" style={{ ...inputStyle, minHeight: 80 }} />
        <button type="submit" style={btnStyle}>Send Message</button>
        {sent && <div style={{ color: 'green', textAlign: 'center' }}>Message sent!</div>}
      </form>
      <div style={{ marginTop: '2.5rem', color: '#555', fontSize: '1rem', textAlign: 'center' }}>
        <div>Email: info@example.com</div>
        <div>Phone: +1 234 567 8901</div>
        <div>Address: 123 Main St, City, Country</div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: 6,
  border: '1px solid #ccc',
  fontSize: '1rem',
  outline: 'none',
};
const btnStyle = {
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  padding: '0.75rem 1.5rem',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '0.5rem',
};

export default Contact;
