import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce App",
      category: "Web Development",
      image: "https://via.placeholder.com/600x400",
      link: "#"
    },
    {
      id: 2,
      title: "Finance Dashboard",
      category: "UI/UX Design",
      image: "https://via.placeholder.com/600x400",
      link: "#"
    },
    {
      id: 3,
      title: "Healthy Life Mobile",
      category: "Mobile Apps",
      image: "https://via.placeholder.com/600x400",
      link: "#"
    },
    {
      id: 4,
      title: "Corporate Identity",
      category: "Branding",
      image: "https://via.placeholder.com/600x400",
      link: "#"
    },
    {
      id: 5,
      title: "Smart Home System",
      category: "IoT Solution",
      image: "https://via.placeholder.com/600x400",
      link: "#"
    },
    {
      id: 6,
      title: "Travel Booking Platform",
      category: "Web Development",
      image: "https://via.placeholder.com/600x400",
      link: "#"
    }
  ];

  return (
    <main className="portfolio-page">
      {/* Header Portfolio */}
      <section className="portfolio-header">
        <h1>Karya Terbaik Kami</h1>
        <p>Menjelajahi berbagai proyek yang telah kami selesaikan dengan penuh dedikasi.</p>
      </section>

      {/* Grid Portfolio */}
      <section className="portfolio-container">
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="view-btn">Lihat Detail</a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;