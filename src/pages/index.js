import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes, FaDownload } from 'react-icons/fa';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Variants للحركات
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="container">
      <Head>
        <title>Hesham Lotfy | Business Intelligence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hesham Lotfy | BI & Data Developer. Transforming complex data into clear insights and visuals." />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <motion.span initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="nav-logo">
            HESHAM LOTFY
          </motion.span>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map((link, idx) => (
              <a key={idx} href={`#${link.toLowerCase().split(' ')[0]}`} onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            ))}
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </nav>

      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-flex">
            <motion.div variants={fadeInLeftVariant} initial="hidden" animate="visible" className="hero-text">
              <p className="label">BI & DATA DEVELOPER</p>
              <h1 className="hero-heading">Hesham Lotfy</h1>
              <p className="hero-subtext">Transforming complex data into clear, creative stories</p>
              
              <div className="hero-btns">
                <a href="profile\projects/Hesham-Lotfy-CV.pdf" download className="primary-cv-btn">
                  <FaDownload /> Download CV
                </a>
                <a href="#projects" className="secondary-btn">View Projects</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }} 
              className="hero-img-box"
            >
              <Image 
                src="/profile/profile-pic.png" 
                alt="Hesham Lotfy" 
                width={320} 
                height={320} 
                className="profile-img" 
                priority 
              />
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-padding">
          <motion.div variants={fadeInUpVariant} initial="hidden" whileInView="visible" className="premium-about-card">
            <h2 className="title-refined-size">About me</h2>
            <p className="description-refined">
              Since childhood, I've loved puzzles and details, always striving to uncover the bigger picture. This inspired me to simplify complex ideas using easy-to-understand graphics and designs. 
              I discovered that data analysis was the perfect fit for me, as it allows me to organize information and transform it into clear visuals and stories.
            </p>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="section-padding">
          <motion.h2 variants={fadeInUpVariant} initial="hidden" whileInView="visible" className="section-title-alt">Technical Expertise</motion.h2>
          <div className="skills-grid">
            {[
              { cat: "Business Intelligence", list: "Power BI (DAX), Tableau, Excel (VBA)", icon: "📊" },
              { cat: "Data Science", list: "Python, SQL, Statistics, Forecasting", icon: "🐍" },
              { cat: "Process & Strategy", list: "ETL, KPI Design, Digital Transformation", icon: "⚙️" },
              { cat: "Core Competencies", list: "Problem-Solving, Stakeholder Communication", icon: "💡" }
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUpVariant} initial="hidden" whileInView="visible" whileHover={{ y: -5 }} className="skill-group-card">
                <div className="skill-icon">{s.icon}</div>
                <h3>{s.cat}</h3>
                <p>{s.list}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="section-padding">
          <motion.h2 variants={fadeInUpVariant} initial="hidden" whileInView="visible" className="title-refined-size">Professional Experience</motion.h2>
          <div className="experience-timeline">
            {[
              {
                role: "Freelance Dashboard Developer & Data Analyst",
                company: "Self-Employed",
                period: "Jan 2025 – Present",
                highlights: ["Power BI dashboards (10+)", "Star schema modeling", "Python forecasting", "Process automation (+40% efficiency)"],
                icon: "🚀"
              },
              {
                role: "Data Analyst – Handover Department",
                company: "Redcon Construction",
                period: "2023 – 2024",
                highlights: ["KPI tracking & optimization", "Advanced SQL queries", "Large dataset analysis", "Bottleneck identification"],
                icon: "🏗️"
              },
              {
                role: "Document Control Specialist",
                company: "Redcon Construction",
                period: "2022 – 2023",
                highlights: ["EDMS (Aconex, SharePoint)", "Data quality audits", "100% documentation accuracy", "Workflow streamlining"],
                icon: "📄"
              }
            ].map((exp, idx) => (
              <motion.div key={idx} variants={fadeInUpVariant} initial="hidden" whileInView="visible" whileHover={{ y: -5 }} className="exp-card">
                <div className="exp-header">
                  <span className="exp-icon">{exp.icon}</span>
                  <div className="exp-title-box">
                    <h3>{exp.role}</h3>
                    <p className="exp-company">{exp.company} | <span className="exp-date">{exp.period}</span></p>
                  </div>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="section-padding">
          <motion.h2 variants={fadeInUpVariant} initial="hidden" whileInView="visible" className="title-refined-size">Education & Certifications</motion.h2>
          <div className="edu-list">
            {[
              { type: "Certification", title: "Google Data Analytics Professional Certificate", info: "Digital Egypt Pioneers Initiative (DEPI) | 2025" },
              { type: "Education", title: "Bachelor’s Degree", info: "Benha University | 2025" }
            ].map((edu, idx) => (
              <motion.div key={idx} variants={fadeInUpVariant} initial="hidden" whileInView="visible" whileHover={{ x: 10 }} className="edu-item">
                <div className="edu-dot" />
                <div className="edu-content">
                  <span className="edu-type">{edu.type}</span>
                  <h3>{edu.title}</h3>
                  <p>{edu.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section id="services" className="section-padding">
          <h2 className="section-title-alt">Service Roadmap</h2>
          <div className="roadmap-horizontal-container">
            <div className="roadmap-horizontal-line"></div>
            <div className="roadmap-grid-horizontal">
              {[
                { id: "01", title: "Cleaning", p: "Polishing raw data." },
                { id: "02", title: "Analysis", p: "Finding the 'Why'." },
                { id: "03", title: "Visuals", p: "Dynamic dashboards." },
                { id: "04", title: "Trends", p: "Future forecasting." }
              ].map((step, idx) => (
                <motion.div key={idx} variants={fadeInUpVariant} initial="hidden" whileInView="visible" className="roadmap-step">
                  <div className="step-marker">{step.id}</div>
                  <h3>{step.title}</h3>
                  <p style={{fontSize: '0.8rem', color: '#888'}}>{step.p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-padding">
          <h2 className="section-title-alt">Selected Projects</h2>
          <div className="projects-grid">
            {[
              { title: "CRM Sales Dashboard", tech: "Excel • Power Query", link: "https://github.com/HESHAM22155/CRM-Sales-Dashboard-Excel", img: "/projects/CRM-Sales-Dashboard-Excel/dashboard.png" },
              { title: "Coffee Shop Analysis", tech: "Excel • Pivot Tables", link: "https://github.com/HESHAM22155/Coffee-Shop-Sales-Dashboard-Excel", img: "/projects/Coffee-Shop-Dashboard-Excel/dashboard.png" },
              { title: "Customer Churn Analysis", tech: "Excel • Statistics", link: "https://github.com/HESHAM22155/Customer-Churn-Analysis-Excel", img: "/projects/Customer Churn Analysis Project Excel/Dashboard.png" }
            ].map((proj, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} variants={fadeInUpVariant} initial="hidden" whileInView="visible" className="project-card">
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  <div className="project-image-box" style={{ backgroundImage: `url("${proj.img}")`, height: '220px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div className="overlay">View Project</div>
                  </div>
                </a>
                <div className="project-info">
                  <h3>{proj.title}</h3>
                  <p className="project-tech">{proj.tech}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CV CTA Section */}
        <section id="cv" className="section-padding">
          <motion.div variants={fadeInUpVariant} initial="hidden" whileInView="visible" className="cv-cta-card">
            <div className="cv-cta-content">
              <h2>Deep dive into my expertise</h2>
              <p>Ready to see the full picture? Download my detailed resume to explore my complete technical journey and certifications.</p>
              <a href="/Hesham-Lotfy-CV.pdf" download className="cv-main-button">
                Download PDF Resume
              </a>
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-padding">
          <motion.div variants={fadeInUpVariant} initial="hidden" whileInView="visible" className="contact-card">
            <h2 className="contact-title">Let's work together</h2>
            <div className="contact-buttons">
               <a href="mailto:hesham.lootfy21@gmail.com" className="primary-btn">
                 <FaEnvelope style={{marginRight: '10px'}} /> Send an Email
               </a>
               <a href="https://wa.me/201280582997" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                 <FaWhatsapp style={{marginRight: '10px'}} /> WhatsApp
               </a>
            </div>
            <div className="social-links-container">
              <a href="https://linkedin.com/in/hesham-lotfy-613050218" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={24} /> <span>LinkedIn</span>
              </a>
              <a href="https://github.com/HESHAM22155" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub size={24} /> <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #f8f9fa; color: #1a1a1a; font-family: 'Inter', sans-serif; overflow-x: hidden; }
        .container { padding: 0 5%; }

        /* Navbar */
        .navbar { position: fixed; top: 0; left: 0; width: 100%; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); z-index: 100; border-bottom: 1px solid #eee; }
        .nav-content { max-width: 1100px; margin: 0 auto; padding: 15px 0; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { font-weight: 800; font-size: 1.1rem; letter-spacing: 1px; }
        .nav-links { display: flex; gap: 25px; }
        .nav-links a { text-decoration: none; color: #666; font-size: 0.85rem; font-weight: 600; transition: 0.3s; }
        .nav-links a:hover { color: #000; }
        .hamburger { display: none; cursor: pointer; }

        /* Hero */
        .main { max-width: 1100px; margin: 0 auto; padding-top: 60px; }
        .hero { padding: 120px 0 80px 0; }
        .hero-flex { display: flex; justify-content: space-between; align-items: center; gap: 60px; }
        .hero-heading { font-size: 5rem; font-weight: 800; margin: 10px 0; letter-spacing: -3px; line-height: 1; }
        .label { font-size: 0.75rem; color: #888; letter-spacing: 3px; font-weight: 700; text-transform: uppercase; margin: 0; }
        .hero-subtext { font-size: 1.4rem; color: #555; max-width: 500px; margin-top: 20px; line-height: 1.4; }
        
        /* Hero Buttons */
        .hero-btns { display: flex; gap: 15px; margin-top: 35px; }
        .primary-cv-btn { background: #000; color: #fff; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
        .primary-cv-btn:hover { background: #333; transform: translateY(-2px); }
        .secondary-btn { background: transparent; color: #000; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; border: 2px solid #eee; transition: 0.3s; }
        .secondary-btn:hover { border-color: #000; }

        .profile-img { border-radius: 60px; border: 12px solid #fff; box-shadow: 0 30px 60px rgba(0,0,0,0.1); object-fit: cover; }

        /* Sections Styling */
        .section-padding { padding: 80px 0; }
        .premium-about-card { background: #fff; padding: 80px 60px; border-radius: 60px; text-align: center; border: 1px solid #eee; }
        .description-refined { font-size: 1.3rem; color: #444; line-height: 1.7; max-width: 850px; margin: 0 auto; }
        .title-refined-size, .section-title-alt { font-size: 3rem; font-weight: 800; text-align: center; margin-bottom: 40px; letter-spacing: -1px; }

        /* Skills */
        .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .skill-group-card { background: #fff; padding: 40px; border-radius: 35px; border: 1px solid #eee; }
        .skill-icon { font-size: 2.5rem; margin-bottom: 20px; }

        /* Experience */
        .experience-timeline { display: flex; flex-direction: column; gap: 25px; max-width: 900px; margin: 0 auto; }
        .exp-card { background: #fff; padding: 35px; border-radius: 30px; border: 1px solid #eee; transition: 0.3s; }
        .exp-header { display: flex; align-items: center; gap: 20px; margin-bottom: 25px; }
        .exp-icon { font-size: 2rem; background: #fbfbfb; width: 65px; height: 65px; display: flex; align-items: center; justify-content: center; border-radius: 20px; }
        .exp-highlights { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .exp-highlights li::before { content: "→"; margin-right: 10px; color: #000; font-weight: 800; }

        /* Education */
        .edu-list { border-left: 2px solid #eee; padding-left: 40px; position: relative; max-width: 800px; margin: 0 auto; }
        .edu-item { position: relative; margin-bottom: 50px; }
        .edu-dot { position: absolute; left: -51px; top: 10px; width: 20px; height: 20px; border-radius: 50%; background: #000; border: 5px solid #f8f9fa; }
        .edu-type { font-size: 0.75rem; font-weight: 800; color: #bbb; text-transform: uppercase; }

        /* Roadmap */
        .roadmap-horizontal-container { position: relative; padding: 60px 0; }
        .roadmap-horizontal-line { position: absolute; top: 85px; left: 10%; right: 10%; height: 2px; background: #eee; }
        .roadmap-grid-horizontal { display: grid; grid-template-columns: repeat(4, 1fr); position: relative; z-index: 2; }
        .roadmap-step { text-align: center; }
        .step-marker { width: 50px; height: 50px; background: #000; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-weight: 800; border: 6px solid #f8f9fa; }

        /* Projects */
        .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .project-card { background: #fff; border-radius: 40px; overflow: hidden; border: 1px solid #eee; position: relative; }
        .overlay { position: absolute; top:0; left:0; width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:800; font-size:1.2rem; background: rgba(0,0,0,0.5); opacity:0; transition:0.3s; }
        .project-card:hover .overlay { opacity:1; }
        .project-info { padding: 30px; }

        /* CV CTA Card */
        .cv-cta-card { background: #f1f3f5; padding: 80px 40px; border-radius: 50px; text-align: center; border: 1px solid #e9ecef; }
        .cv-main-button { background: #000; color: #fff; padding: 20px 45px; border-radius: 100px; text-decoration: none; font-weight: 800; display: inline-block; margin-top: 20px; transition: 0.3s; }
        .cv-main-button:hover { transform: scale(1.05); }

        /* Contact */
        .contact-card { background: #000; color: #fff; padding: 100px 40px; border-radius: 60px; text-align: center; }
        .contact-title { font-size: 4rem; font-weight: 800; margin-bottom: 40px; letter-spacing: -2px; }
        .contact-buttons { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 50px; }
        .primary-btn { background: #fff; color: #000; padding: 22px 45px; border-radius: 100px; text-decoration: none; font-weight: 700; display: flex; align-items: center; }
        .whatsapp-btn { background: #25D366; color: #fff; padding: 22px 45px; border-radius: 100px; text-decoration: none; font-weight: 700; display: flex; align-items: center; }
        .social-links-container { display: flex; justify-content: center; gap: 40px; border-top: 1px solid #222; padding-top: 40px; }
        .social-link { color: #666; text-decoration: none; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
        .social-link:hover { color: #fff; }

        @media (max-width: 900px) {
          .hero-flex { flex-direction: column-reverse; text-align: center; gap: 30px; }
          .hero-heading { font-size: 3.5rem; }
          .hero-btns { justify-content: center; }
          .skills-grid, .projects-grid, .roadmap-grid-horizontal { grid-template-columns: 1fr; gap: 20px; }
          .exp-highlights { grid-template-columns: 1fr; }
          .roadmap-horizontal-line { display: none; }
          .hamburger { display: block; }
          .nav-links { display: none; position: absolute; top: 60px; left: 0; width: 100%; background: #fff; flex-direction: column; padding: 30px; gap: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
          .nav-links.active { display: flex; }
          .contact-title { font-size: 2.8rem; }
          .hero-img-box :global(img) { width: 260px !important; height: 260px !important; }
        }
      `}</style>
    </div>
  );
}