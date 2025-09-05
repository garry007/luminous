import React from 'react';

const jobs = [
  { title: 'Frontend Developer', desc: 'React, JavaScript, CSS. 2+ years experience.' },
  { title: 'Backend Developer', desc: 'Node.js, Express, MongoDB. 2+ years experience.' },
  { title: 'UI/UX Designer', desc: 'Figma, Adobe XD, user research.' },
];

const Careers = () => (
  <div style={{ maxWidth: 700, margin: '4rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2.5rem' }}>
    <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '1.5rem' }}>Careers</h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {jobs.map((j, i) => (
        <div key={i} style={{ background: '#f0f4ff', borderRadius: 8, padding: '1.2rem 1.5rem' }}>
          <div style={{ fontWeight: 'bold', color: '#007bff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{j.title}</div>
          <div style={{ color: '#444', fontSize: '1rem' }}>{j.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Careers;
