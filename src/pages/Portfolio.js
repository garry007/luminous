import React from 'react';

const projects = [
  { name: 'E-Shop', desc: 'A modern e-commerce platform.', url: '#' },
  { name: 'Travelly', desc: 'Travel booking and planning app.', url: '#' },
  { name: 'FitTrack', desc: 'Fitness tracking and analytics tool.', url: '#' },
];

const Portfolio = () => (
  <div style={{ maxWidth: 900, margin: '4rem auto', padding: '2rem 0' }}>
    <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '2rem' }}>Portfolio</h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
      {projects.map((p, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', color: '#007bff', fontSize: '1.1rem', marginBottom: '0.7rem' }}>{p.name}</div>
          <p style={{ color: '#444', fontSize: '1rem', marginBottom: '0.7rem' }}>{p.desc}</p>
          <a href={p.url} style={{ color: '#007bff', textDecoration: 'underline', fontWeight: 'bold' }}>View Project</a>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;
