import React from 'react';

const services = [
  { title: 'Web Development', desc: 'Modern, responsive websites and web apps.' },
  { title: 'Mobile Apps', desc: 'iOS and Android apps for your business.' },
  { title: 'UI/UX Design', desc: 'Beautiful, user-friendly interfaces.' },
  { title: 'E-commerce', desc: 'Online stores and payment solutions.' },
  { title: 'SEO & Marketing', desc: 'Grow your audience and reach.' },
  { title: 'Cloud Solutions', desc: 'Scalable, secure cloud infrastructure.' },
];

const Services = () => (
  <div style={{ maxWidth: 900, margin: '4rem auto', padding: '2rem 0' }}>
    <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '2rem' }}>Our Services</h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
      {services.map((s, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1.5rem', textAlign: 'center' }}>
          <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>{s.title}</h3>
          <p style={{ color: '#444', fontSize: '1rem' }}>{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
