import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';

const App = () => (
  <Router>
    <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  {/* Home, Login, Register routes moved above for flow */}
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/logout" element={<Logout />} />
    </Routes>
  </Router>
);

export default App;
