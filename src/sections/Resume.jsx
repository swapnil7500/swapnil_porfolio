import React from 'react';
import { Download, FileText, Printer, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" style={{ position: 'relative', overflow: 'hidden' }} className="glass-panel">
      <div className="radial-glow-1"></div>
      <div className="section-container">
        <h2 className="section-title">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="section-subtitle">
          View an ATS-optimized, search-friendly interactive resume preview or download the official document directly.
        </p>

        {/* Action Panel */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          <a
            href="NEW_SWAPNIL RESUME.pdf"
            download="NEW_SWAPNIL RESUME.pdf"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <Download size={18} /> Download Official PDF
          </a>
          
          <button
            onClick={handlePrint}
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <Printer size={18} /> Print Resume
          </button>
        </div>

        {/* ATS Friendly Interactive Preview sheet */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div
            className="glass-card"
            style={{
              padding: '48px',
              textAlign: 'left',
              border: '1px solid var(--glass-border)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              borderRadius: '16px',
              fontFamily: 'var(--font-body)',
              boxShadow: 'var(--card-shadow)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Header info */}
            <div style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '20px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
                    SWAPNIL GUPTA
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 600, marginTop: '4px' }}>
                    Aspiring Full Stack Developer | B.Tech CSE Student
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Mail size={14} style={{ color: 'var(--secondary)' }} /> swapnilsureshgupta365@gmail.com
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Phone size={14} style={{ color: 'var(--secondary)' }} /> +91-9305118270
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={14} style={{ color: 'var(--secondary)' }} /> Dareeba, Raebareli, UP, India
                  </span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '4px', marginBottom: '8px' }}>
                Professional Summary
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Motivated Computer Science & Engineering student at Ajay Kumar Garg Engineering College with a strong academic foundation (8.4 CGPA) and hands-on training in full stack web technologies. Proficient in MERN Stack (MongoDB, Express.js, React.js, Node.js), competitive programming in C++/Java, and core software engineering paradigms. Experienced in single-page application architectures, dynamic API interfaces, and collaborative Git practices. Dedicated to engineering robust, high-performance web products.
              </p>
            </div>

            {/* Education */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '4px', marginBottom: '12px' }}>
                Education
              </h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>B.Tech in Computer Science & Engineering</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>2022 - 2026</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                <span>AJAY KUMAR GARG ENGINEERING COLLEGE, GHAZIABAD (AKTU)</span>
                <span style={{ fontWeight: 600, color: 'var(--secondary)' }}>8.4 CGPA</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Relevant Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering
              </p>
            </div>

            {/* Experience */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '4px', marginBottom: '12px' }}>
                Professional Experience
              </h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>Web Development Intern</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>August 2025 - Present</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                <span>Software Development Division (Remote / Hybrid)</span>
              </div>
              <ul style={{ listStyle: 'circle', paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Engineered clean, high-performance single-page application (SPA) modules using React.js.</li>
                <li>Built dynamic content filtering boards that query APIs and reload data segments on-the-fly.</li>
                <li>Integrated backend REST API endpoint feeds into component state variables, enforcing correct schemas.</li>
                <li>Refined frontend layout sheets to match mobile responsiveness standards and dark/light theme criteria.</li>
                <li>Collaborated within a developmental pipeline, submitting code branches and resolving conflicts using Git.</li>
              </ul>
            </div>

            {/* Core Tech Stacks */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '4px', marginBottom: '12px' }}>
                Technical Skills
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Programming Languages: </strong> C++, Java, JavaScript (ES6+)
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Web Technologies: </strong> HTML5, CSS3, React.js, Node.js, Express.js, RESTful APIs, JSON
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Databases: </strong> MongoDB, MySQL, PostgreSQL
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Tools & Frameworks: </strong> Git, GitHub, VS Code, Postman, Cisco Packet Tracer
                </div>
              </div>
            </div>

            {/* Key Qualifications Badges */}
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '4px', marginBottom: '12px' }}>
                Key Credentials
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {["LeetCode 250+ Solved", "MERN Full Stack Dev", "5 Star C++ (HackerRank)", "Certified Web Intern"].map((badge, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-secondary)',
                      fontWeight: 600
                    }}
                  >
                    ✔ {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Specific Stylings */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume, #resume * {
            visibility: visible;
          }
          #resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
            padding: 0 !important;
          }
          .glass-panel, .glass-card {
            border: none !important;
            background: white !important;
            box-shadow: none !important;
            color: black !important;
            padding: 0 !important;
          }
          .btn, .radial-glow-1, .section-subtitle, .section-title {
            display: none !important;
          }
          strong, h3, h4, span, p, li {
            color: black !important;
          }
        }
      `}</style>
    </section>
  );
}
