import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Software Development Division",
      location: "Remote / Hybrid",
      duration: "August 2025 - Present",
      description: "Contributing actively to the front-end modernization of core corporate application modules, focusing on responsive UI frameworks, fluid interactivity, and API integrations.",
      achievements: [
        "SPA Development: Designed and engineered clean, single-page client layouts using modular components, resulting in zero-lag rendering flows.",
        "Dynamic Content Loading: Built smart client state filters that dynamically request and display database blocks without full-page refreshes.",
        "Frontend Engineering: Refined legacy layout sheets to meet strict modern styling standards, responsive mobile breakpoints, and dark mode criteria.",
        "API Integration: Linked backend Node/Express endpoints into Axios pipelines, validating user actions and managing secure JWT states.",
        "Version Control: Maintained structured Git workflows, managing pull requests, performing conflicts triage, and coordinating merge approvals."
      ]
    }
  ];

  return (
    <section id="experience" style={{ position: 'relative', overflow: 'hidden' }} className="glass-panel">
      <div className="radial-glow-1"></div>
      <div className="section-container">
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          My professional background in web development, emphasizing real-world technical assignments and project pipelines.
        </p>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card animate-fade-in-up"
              style={{
                border: '1px solid var(--glass-border)',
                background: 'var(--gradient-card)',
                padding: '36px',
                position: 'relative'
              }}
            >
              {/* Header Grid */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '16px',
                borderBottom: '1px solid var(--glass-border)',
                paddingBottom: '20px',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: 'var(--primary-glow)',
                    border: '1px solid var(--primary-border)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{exp.role}</h3>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{exp.company}</h4>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '6px',
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--secondary)' }}>
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>
                {exp.description}
              </p>

              {/* Achievements Checklist */}
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }} className="gradient-text">Key Responsibilities & Competencies</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {exp.achievements.map((ach, aIdx) => {
                  const parts = ach.split(': ');
                  const boldTitle = parts[0];
                  const desc = parts[1];

                  return (
                    <div key={aIdx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '2px', display: 'flex' }}>
                        <CheckCircle2 size={18} />
                      </div>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        <strong style={{ color: 'var(--text-primary)' }}>{boldTitle}:</strong> {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
