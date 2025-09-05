import React from 'react';

const posts = [
  { title: 'How to Build a Modern Web App', date: '2025-08-01', excerpt: 'Learn the essentials of building a fast, modern web application with React and more.' },
  { title: 'UI/UX Trends in 2025', date: '2025-07-15', excerpt: 'Discover the latest design trends that are shaping the digital world.' },
  { title: 'Why SEO Still Matters', date: '2025-06-30', excerpt: 'SEO is as important as ever. Here’s how to get it right.' },
];

const Blog = () => (
  <div style={{ maxWidth: 900, margin: '4rem auto', padding: '2rem 0' }}>
    <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '2rem' }}>Blog</h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
      {posts.map((p, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1.5rem' }}>
          <h3 style={{ color: '#007bff', marginBottom: '0.5rem' }}>{p.title}</h3>
          <div style={{ color: '#888', fontSize: '0.95rem', marginBottom: '0.7rem' }}>{p.date}</div>
          <p style={{ color: '#444', fontSize: '1rem' }}>{p.excerpt}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;
