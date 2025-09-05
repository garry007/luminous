import React from 'react';

const testimonials = [
  { name: 'Alice', text: 'Amazing service and support! Highly recommend.' },
  { name: 'Bob', text: 'The team delivered our project on time and exceeded expectations.' },
  { name: 'Carol', text: 'Great experience from start to finish.' },
];

const Testimonials = () => (
  <div style={{ maxWidth: 900, margin: '4rem auto', padding: '2rem 0' }}>
    <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '2rem' }}>Testimonials</h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
      {testimonials.map((t, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', color: '#007bff', fontSize: '1.1rem', marginBottom: '0.7rem' }}>{t.name}</div>
          <p style={{ color: '#444', fontSize: '1rem', fontStyle: 'italic' }}>&quot;{t.text}&quot;</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
