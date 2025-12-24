import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <main className="about-page">
      {/* Header Halaman */}
      <section className="about-header">
        <h1>Tentang Kami</h1>
        <p>Mengenal lebih jauh visi dan dedikasi kami dalam dunia teknologi.</p>
      </section>

      {/* Konten Utama: Visi & Misi */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="https://via.placeholder.com/500x400" alt="Tim Kami" />
            </div>
            <div className="about-text">
              <h2>Membangun Solusi Sejak 2020</h2>
              <p>
                Kami berawal dari sebuah tim kecil yang memiliki gairah besar untuk membantu 
                UMKM dan perusahaan besar bertransformasi secara digital. Kami percaya bahwa 
                teknologi harus bisa diakses dan memberikan dampak nyata bagi semua orang.
              </p>
              <div className="mission-vision">
                <div className="mv-item">
                  <h3>Visi</h3>
                  <p>Menjadi mitra teknologi terpercaya yang mendorong inovasi global.</p>
                </div>
                <div className="mv-item">
                  <h3>Misi</h3>
                  <p>Memberikan layanan berkualitas tinggi dengan standar performa terbaik.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h4>150+</h4>
            <p>Proyek Selesai</p>
          </div>
          <div className="stat-item">
            <h4>50+</h4>
            <p>Klien Senang</p>
          </div>
          <div className="stat-item">
            <h4>12+</h4>
            <p>Penghargaan</p>
          </div>
          <div className="stat-item">
            <h4>5+</h4>
            <p>Tahun Pengalaman</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;