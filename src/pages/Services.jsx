import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🌐",
      title: "Web Development",
      description: "Membangun website yang cepat, responsif, dan SEO-friendly menggunakan teknologi terbaru seperti React dan Next.js."
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile App Development",
      description: "Aplikasi mobile lintas platform (iOS & Android) dengan performa tinggi dan pengalaman pengguna yang mulus."
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description: "Desain antarmuka yang modern dan riset pengalaman pengguna untuk memastikan produk Anda mudah digunakan."
    },
    {
      id: 4,
      icon: "🚀",
      title: "Digital Marketing",
      description: "Meningkatkan visibilitas brand Anda melalui strategi SEO, SEM, dan manajemen media sosial yang efektif."
    },
    {
      id: 5,
      icon: "🔒",
      title: "Cyber Security",
      description: "Melindungi aset digital Anda dari ancaman keamanan dengan audit menyeluruh dan implementasi sistem keamanan."
    },
    {
      id: 6,
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Migrasi dan pengelolaan infrastruktur cloud untuk skalabilitas bisnis yang lebih efisien dan hemat biaya."
    }
  ];

  return (
    <main className="services-page">
      {/* Header Services */}
      <section className="services-header">
        <h1>Layanan Kami</h1>
        <p>Solusi teknologi komprehensif untuk membantu bisnis Anda berkembang di era digital.</p>
      </section>

      {/* Grid Services */}
      <section className="services-grid-container">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more">Pelajari Detail</button>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">
        <h2>Bagaimana Kami Bekerja</h2>
        <div className="workflow-steps">
          <div className="step">
            <span className="step-num">01</span>
            <h4>Konsultasi</h4>
            <p>Memahami kebutuhan dan tujuan bisnis Anda secara mendalam.</p>
          </div>
          <div className="step">
            <span className="step-num">02</span>
            <h4>Perencanaan</h4>
            <p>Menyusun strategi dan roadmap pengembangan yang efisien.</p>
          </div>
          <div className="step">
            <span className="step-num">03</span>
            <h4>Eksekusi</h4>
            <p>Proses pengembangan dilakukan dengan standar kualitas tinggi.</p>
          </div>
          <div className="step">
            <span className="step-num">04</span>
            <h4>Peluncuran</h4>
            <p>Produk siap digunakan dan kami berikan dukungan penuh.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;