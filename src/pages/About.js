import React from 'react';

const About = () => (
  <div style={{ maxWidth: 700, margin: '4rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2.5rem' }}>
    <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '1.5rem' }}>About Us</h1>
    <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.7 }}>
      We are a passionate team dedicated to delivering high-quality digital solutions. Our mission is to help businesses grow by providing modern, user-friendly web and mobile experiences.
    </p>
    <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ flex: 1, minWidth: 200 }}>
        <h3 style={{ color: '#007bff' }}>Our Vision</h3>
        <p>Empowering innovation and creativity for a better digital world.</p>
      </div>
      <div style={{ flex: 1, minWidth: 200 }}>
        <h3 style={{ color: '#007bff' }}>Our Values</h3>
        <ul style={{ paddingLeft: 20 }}>
          <li>Integrity</li>
          <li>Collaboration</li>
          <li>Customer Focus</li>
          <li>Continuous Learning</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
