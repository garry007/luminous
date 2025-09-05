import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const galleryImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  'https://images.unsplash.com/photo-1465101178521-cb6eab78514e',
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  'https://images.unsplash.com/photo-1465101178521-cb6eab78514e',
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
];

const navOptions = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Careers', path: '/careers' },
  { label: 'Privacy', path: '/privacy-policy' },
  { label: 'Logout', path: '/logout' },
];

const Home = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalClosing, setModalClosing] = useState(false);

  // Open modal with animation
  const openModal = (src) => {
    setModalImg(src);
    setModalOpen(true);
    setModalClosing(false);
  };

  // Close modal with animation
  const closeModal = () => {
    setModalClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setModalImg(null);
      setModalClosing(false);
    }, 300); // match CSS animation duration
  };

  return (
    <div>
      {/* Navigation Bar at Top Right */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '1rem 5rem 0 0', position: 'fixed', top: 0, left: 0, zIndex: 300 }}>
        <button
          className={`menu-btn${sidebarOpen ? ' menu-btn-hide' : ''}`}
          style={{ zIndex: 301, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, padding: 0 }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Open menu"
        >
          <span style={{ display: 'inline-block', width: 28, height: 22 }}>
            <span style={{ display: 'block', width: 28, height: 4, background: '#fff', borderRadius: 2, margin: '0 0 5px 0' }}></span>
            <span style={{ display: 'block', width: 28, height: 4, background: '#fff', borderRadius: 2, margin: '0 0 5px 0' }}></span>
            <span style={{ display: 'block', width: 28, height: 4, background: '#fff', borderRadius: 2 }}></span>
          </span>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>&times;</button>
        <ul style={{ overflowY: 'auto', maxHeight: '80vh', paddingRight: '0.5rem' }}>
          {navOptions.map(opt => (
            <li key={opt.path}>
              <span onClick={() => { setSidebarOpen(false); navigate(opt.path); }} className="sidebar-link-text">{opt.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

      {/* Image Modal Overlay */}
      {modalOpen && (
        <div className={`img-modal-overlay${modalClosing ? ' closing' : ''}`} onClick={closeModal}>
          <div className={`img-modal${modalClosing ? ' closing' : ''}`} onClick={e => e.stopPropagation()}>
            <button className="img-modal-close" onClick={closeModal}>&times;</button>
            <img src={modalImg} alt="Enlarged" />
          </div>
        </div>
      )}

      {/* Photo Gallery */}
      <div style={{ maxWidth: 900, margin: '5rem auto 0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Photo Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {galleryImages.map((src, idx) => (
            <div key={idx} style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer' }} onClick={() => openModal(src)}>
              <img src={src} alt={`Gallery ${idx + 1}`} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const navBtnStyle = {
  background: 'white',
  color: '#007bff',
  border: 'none',
  // Removed duplicate import of React
  // removed stray import
  margin: '0 0.5rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default Home;
