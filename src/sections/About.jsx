import React, { useState } from 'react';
import { User, BookOpen, Brain, Lightbulb, Compass, Zap, Users, ShieldAlert, Award } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('academic');

  const personalQualities = [
    { icon: <Zap size={20} />, title: "Fast Learner", desc: "Able to grasp new technologies and system architectures rapidly and apply them efficiently." },
    { icon: <Users size={20} />, title: "Team Player", desc: "Thrives in collaborative environments, valuing open communication and shared team goals." },
    { icon: <Compass size={20} />, title: "Self Motivated", desc: "Proactively seeks challenges, drives tasks independently, and maintains a growth mindset." },
    { icon: <Lightbulb size={20} />, title: "Problem Solver", desc: "Analytical mindset focused on building optimized algorithmic solutions and resolving issues." }
  ];

  const academicTimeline = [
    {
      year: "2022 - 2026",
      title: "B.Tech in Computer Science & Engineering",
      subtitle: "AJAY KUMAR GARG ENGINEERING COLLEGE, GHAZIABAD",
      desc: "Pursuing Bachelor of Technology in CSE. Current CGPA: 8.4. Actively focusing on core curriculum including DSA, Database Management, OS, and Computer Networks.",
      highlight: "8.4 CGPA"
    },
    {
      year: "2020 - 2022",
      title: "Higher Secondary Certificate (XII - Science)",
      subtitle: "CBSE Board",
      desc: "Completed intermediate education with major concentrations in Physics, Chemistry, Mathematics, and Computer Science.",
      highlight: "First Division"
    }
  ];

  const internshipTimeline = [
    {
      year: "August 2025 - Present",
      title: "Web Development Intern",
      subtitle: "Software Development Division",
      desc: "Contributing to single-page application (SPA) design, building dynamic reactive UI elements, resolving layout bugs, integrating backend microservice endpoints, and managing codebase versioning via Git.",
      highlight: "Active Internship"
    }
  ];

  const learningTimeline = [
    {
      year: "2024 - 2025",
      title: "MERN Full-Stack Development",
      subtitle: "Self-Driven Hands-on Specialization",
      desc: "Built comprehensive full stack web applications integrating React frontend, Express/Node API services, and MongoDB database storage. Optimized layouts for responsive mobile-first performance.",
      highlight: "Portfolio Launch"
    },
    {
      year: "2023 - 2024",
      title: "Data Structures & Algorithms in C++/Java",
      subtitle: "Algorithmic Skill Building",
      desc: "Strengthened core problem-solving capability. Actively solved over 250 coding challenges on platforms like LeetCode and HackerRank, specializing in graphs, trees, and dynamic programming.",
      highlight: "LeetCode 250+"
    }
  ];

  const renderTimeline = () => {
    let activeTimeline = [];
    if (activeTab === 'academic') activeTimeline = academicTimeline;
    else if (activeTab === 'internship') activeTimeline = internshipTimeline;
    else activeTimeline = learningTimeline;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative' }}>
        {/* Timeline Central Bar */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: '8px',
          bottom: '8px',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--primary) 0%, var(--secondary) 100%)',
          opacity: 0.4
        }}></div>

        {activeTimeline.map((item, idx) => (
          <div
            key={idx}
            className="animate-fade-in-up"
            style={{
              display: 'flex',
              gap: '24px',
              position: 'relative',
              zIndex: 2,
              animationDelay: `${idx * 0.1}s`
            }}
          >
            {/* Timeline Marker Point */}
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-secondary)',
              border: '2px solid var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              boxShadow: 'var(--glow-shadow)',
              flexShrink: 0
            }}>
              <BookOpen size={16} />
            </div>

            {/* Timeline Details Card */}
            <div className="glass-card" style={{ flexGrow: 1, padding: '24px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.year}</span>
                {item.highlight && (
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary-glow)',
                    color: 'var(--primary)',
                    border: '1px solid var(--primary-border)',
                    fontWeight: 700
                  }}>
                    {item.highlight}
                  </span>
                )}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '6px' }}>{item.title}</h3>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '12px' }}>{item.subtitle}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }} className="glass-panel">
      <div className="radial-glow-1"></div>
      <div className="section-container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Dedicated computer science undergraduate with a strong analytical toolkit, practical full stack training, and a deep interest in software engineering.
        </p>

        {/* Profile and Bio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
            alignItems: 'start'
          }}
        >
          {/* Bio block */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-glow)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <User size={20} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Personal Overview</h3>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7 }}>
              My name is <strong style={{ color: 'var(--text-primary)' }}>Swapnil Gupta</strong>. I am currently pursuing my B.Tech in Computer Science and Engineering. I possess a strong devotion to modern web frameworks, core software fundamentals, and competitive problem-solving.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7 }}>
              My ultimate career goal is to become an expert Full Stack Developer, crafting high-quality, scalable digital solutions that resolve real-world user pain points. I enjoy engineering highly responsive, micro-animated client-side interfaces and tying them into lightweight backend services.
            </p>
          </div>

          {/* Qualities Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {personalQualities.map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '20px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-border)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--secondary-glow)',
                  border: '1px solid var(--secondary-border)',
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{item.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline section header */}
        <div style={{ marginTop: '60px' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, marginBottom: '32px' }}>
            My Professional <span className="gradient-text">Journey</span>
          </h3>

          {/* Timeline Navigation Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}
          >
            {[
              { id: 'academic', label: 'Academic Journey' },
              { id: 'internship', label: 'Internship Experience' },
              { id: 'learning', label: 'Learning Journey' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="btn"
                style={{
                  padding: '10px 20px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid transparent',
                  background: activeTab === tab.id ? 'var(--gradient-text)' : 'var(--glass-bg)',
                  color: activeTab === tab.id ? 'white' : 'var(--text-secondary)',
                  borderColor: activeTab === tab.id ? 'transparent' : 'var(--glass-border)',
                  boxShadow: activeTab === tab.id ? 'var(--glow-shadow)' : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Render Active Timeline */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {renderTimeline()}
          </div>
        </div>
      </div>
    </section>
  );
}
