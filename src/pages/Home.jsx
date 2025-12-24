import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Membangun Masa Depan <span className="highlight">Digital</span> Anda</h1>
          <p>
            Kami membantu bisnis bertransformasi melalui teknologi inovatif, 
            desain yang elegan, dan solusi perangkat lunak yang skalabel.
          </p>
          <div className="hero-btns">
            <Link to="/portfolio" className="btn-primary">Lihat Proyek</Link>
            <Link to="/contact" className="btn-secondary">Hubungi Kami</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Mengapa Memilih Kami?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">🚀</div>
              <h3>Inovasi Cepat</h3>
              <p>Kami menggunakan teknologi terbaru untuk memastikan bisnis Anda tetap relevan di pasar.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🛡️</div>
              <h3>Keamanan Terjamin</h3>
              <p>Prioritas utama kami adalah menjaga integritas data dan keamanan sistem Anda.</p>
            </div>
            <div className="feature-card">
              <div className="icon">📈</div>
              <h3>Hasil Terukur</h3>
              <p>Strategi kami didasarkan pada data untuk memastikan ROI yang maksimal bagi klien.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Siap untuk memulai proyek besar Anda?</h2>
        <p>Mari berkolaborasi dan wujudkan ide brilian Anda menjadi kenyataan.</p>
        <Link to="/contact" className="btn-white">Mulai Sekarang</Link>
      </section>
    </main>
  );
};

export default Home;