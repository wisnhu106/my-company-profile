import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Kolom 1: Tentang Perusahaan */}
        <div className="footer-col">
          <h3 className="footer-logo">Tech<span>Corp</span></h3>
          <p className="footer-desc">
            Solusi teknologi terdepan untuk membantu bisnis Anda bertransformasi 
            di era digital. Kami mengutamakan inovasi, kualitas, dan kepuasan klien.
          </p>
          <div className="social-links">
            <Link to="#">FB</Link>
            <Link to="#">IG</Link>
            <Link to="#">TW</Link>
            <Link to="#">LI</Link>
          </div>
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div className="footer-col">
          <h4>Tautan Cepat</h4>
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/about">Tentang Kami</Link></li>
            <li><Link to="/services">Layanan</Link></li>
            <li><Link to="/portfolio">Portofolio</Link></li>
            <li><Link to="/contact">Kontak</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Layanan Kami */}
        <div className="footer-col">
          <h4>Layanan Kami</h4>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Mobile App</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Kolom 4: Kontak */}
        <div className="footer-col">
          <h4>Hubungi Kami</h4>
          <p>Jl. Teknik Rekayasa No. 123, Surabaya</p>
          <p>Email: info@techcorp.com</p>
          <p>Telp: +62 812 3456 7890</p>
        </div>
      </div>

      {/* Bagian Bawah: Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechCorp Indonesia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;