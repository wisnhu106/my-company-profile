import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.name}, pesan Anda telah terkirim! (Simulasi)`);
    // Di sini Anda bisa menambahkan logika integrasi API
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1>Hubungi Kami</h1>
        <p>Punya pertanyaan atau ingin memulai proyek? Kami siap membantu Anda.</p>
      </section>

      <section className="contact-container">
        <div className="contact-grid">
          {/* Kolom Kiri: Informasi Kontak */}
          <div className="contact-info">
            <h2>Informasi Kontak</h2>
            <p>Jangan ragu untuk menghubungi kami melalui saluran di bawah ini:</p>
            
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h4>Alamat</h4>
                <p>Jl. Teknik Rekayasa No. 123, Surabaya, Indonesia</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>info@techcorp.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h4>Telepon</h4>
                <p>+62 812 3456 7890</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Kontak */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Masukkan nama Anda" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="email@contoh.com" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Subjek</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="Tujuan pesan" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Pesan</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tuliskan pesan Anda di sini..." 
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="map-section">
        <div className="map-placeholder">
          <p>Google Maps Iframe Placeholder</p>
          {/* Anda bisa memasukkan tag <iframe> dari Google Maps di sini */}
        </div>
      </section>
    </main>
  );
};

export default Contact;