import React, { useState } from 'react';

const faqs = [
  { q: 'How do I register?', a: 'Click the menu, select Register, and fill out the form.' },
  { q: 'How do I contact support?', a: 'Use the Contact page in the menu to reach us.' },
  { q: 'Is my data secure?', a: 'Yes, we use industry-standard security practices.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ maxWidth: 700, margin: '4rem auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2.5rem' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '1.5rem' }}>Frequently Asked Questions</h1>
      {faqs.map((f, i) => (
        <div key={i} style={{ marginBottom: '1.2rem' }}>
          <div
            onClick={() => setOpen(open === i ? null : i)}
            style={{ cursor: 'pointer', fontWeight: 'bold', color: '#007bff', fontSize: '1.1rem', background: '#f0f4ff', padding: '0.7rem 1rem', borderRadius: 6 }}
          >
            {f.q}
          </div>
          {open === i && (
            <div style={{ background: '#f9f9f9', padding: '0.9rem 1.2rem', borderRadius: 6, color: '#333', fontSize: '1rem', marginTop: '0.3rem' }}>{f.a}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
