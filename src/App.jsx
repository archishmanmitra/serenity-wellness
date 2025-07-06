import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Centers from './pages/Centers';
import Contact from './pages/Contact';

export default function App() {
  return (
    // <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    // </Router>
  );
}