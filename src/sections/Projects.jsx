import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Laptop, Calendar, Server } from 'lucide-react';

const Github = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Mock project screenshots (using elegant stylized SVGs as visuals)
  const sprintHubScreenshots = [
    {
      title: "Dashboard Overview",
      svg: (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', borderRadius: '12px' }}>
          <rect width="800" height="450" fill="#0b1329"/>
          {/* Header */}
          <rect x="20" y="20" width="760" height="40" rx="8" fill="#1e293b"/>
          <circle cx="45" cy="40" r="6" fill="#ef4444"/>
          <circle cx="65" cy="40" r="6" fill="#f59e0b"/>
          <circle cx="85" cy="40" r="6" fill="#10b981"/>
          <rect x="120" y="32" width="200" height="16" rx="4" fill="#334155"/>
          <rect x="680" y="32" width="80" height="16" rx="4" fill="var(--primary)"/>
          
          {/* Main dashboard body */}
          <rect x="20" y="80" width="200" height="350" rx="8" fill="#131e35"/>
          <rect x="35" y="100" width="170" height="24" rx="4" fill="#1e293b"/>
          <rect x="35" y="140" width="170" height="16" rx="4" fill="#1e293b"/>
          <rect x="35" y="172" width="170" height="16" rx="4" fill="#1e293b"/>
          <rect x="35" y="204" width="170" height="16" rx="4" fill="#1e293b"/>

          {/* Cards */}
          <rect x="240" y="80" width="540" height="160" rx="12" fill="url(#hero-gradient)"/>
          <text x="270" y="130" fill="white" fontSize="24" fontWeight="800" fontFamily="Outfit">Sprint Hub</text>
          <text x="270" y="160" fill="#9ca3af" fontSize="14" fontFamily="Plus Jakarta Sans">MERN Task & Collaboration Platform</text>
          <rect x="270" y="185" width="120" height="30" rx="8" fill="rgba(255,255,255,0.15)"/>
          <text x="288" y="204" fill="white" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans">Active Sprint 04</text>

          {/* Mini Cards */}
          <rect x="240" y="260" width="250" height="170" rx="8" fill="#131e35"/>
          <rect x="255" y="280" width="100" height="12" rx="3" fill="#334155"/>
          <rect x="255" y="305" width="220" height="35" rx="6" fill="#1e293b"/>
          <rect x="255" y="350" width="220" height="35" rx="6" fill="#1e293b"/>

          <rect x="510" y="260" width="270" height="170" rx="8" fill="#131e35"/>
          <circle cx="560" cy="340" r="50" fill="none" stroke="#1e293b" strokeWidth="12"/>
          <circle cx="560" cy="340" r="50" fill="none" stroke="var(--primary)" strokeWidth="12" strokeDasharray="314" strokeDashoffset="100"/>
          <text x="548" y="346" fill="white" fontSize="18" fontWeight="700" fontFamily="Outfit">68%</text>
          <rect x="630" y="300" width="130" height="14" rx="4" fill="#334155"/>
          <rect x="630" y="325" width="130" height="14" rx="4" fill="#334155"/>
          <rect x="630" y="350" width="100" height="14" rx="4" fill="#334155"/>

          <defs>
            <linearGradient id="hero-gradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.4"/>
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "Interactive Scrum Board",
      svg: (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', borderRadius: '12px' }}>
          <rect width="800" height="450" fill="#0b1329"/>
          {/* Columns */}
          <rect x="20" y="40" width="240" height="370" rx="8" fill="#131e35"/>
          <text x="35" y="70" fill="white" fontSize="16" fontWeight="700" fontFamily="Outfit">To Do</text>
          <rect x="35" y="90" width="210" height="80" rx="8" fill="#1e293b"/>
          <rect x="50" y="110" width="140" height="12" rx="3" fill="#334155"/>
          <rect x="50" y="130" width="60" height="16" rx="8" fill="rgba(244, 63, 94, 0.2)"/>

          <rect x="280" y="40" width="240" height="370" rx="8" fill="#131e35"/>
          <text x="295" y="70" fill="white" fontSize="16" fontWeight="700" fontFamily="Outfit">In Progress</text>
          <rect x="295" y="90" width="210" height="80" rx="8" fill="#1e293b" stroke="var(--primary)"/>
          <rect x="310" y="110" width="150" height="12" rx="3" fill="#334155"/>
          <rect x="310" y="130" width="80" height="16" rx="8" fill="var(--primary-glow)"/>

          <rect x="295" y="185" width="210" height="80" rx="8" fill="#1e293b"/>
          <rect x="310" y="205" width="100" height="12" rx="3" fill="#334155"/>

          <rect x="540" y="40" width="240" height="370" rx="8" fill="#131e35"/>
          <text x="555" y="70" fill="white" fontSize="16" fontWeight="700" fontFamily="Outfit">Done</text>
          <rect x="555" y="90" width="210" height="80" rx="8" fill="#1e293b"/>
          <rect x="570" y="110" width="120" height="12" rx="3" fill="#334155"/>
          <rect x="570" y="130" width="60" height="16" rx="8" fill="rgba(16, 185, 129, 0.2)"/>
        </svg>
      )
    },
    {
      title: "Real-Time Collaboration",
      svg: (
        <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', borderRadius: '12px' }}>
          <rect width="800" height="450" fill="#0b1329"/>
          {/* Collaboration Chat & avatars */}
          <rect x="30" y="40" width="400" height="370" rx="8" fill="#131e35"/>
          <rect x="45" y="60" width="370" height="40" rx="6" fill="#1e293b"/>
          <circle cx="70" cy="80" r="14" fill="var(--primary)"/>
          <text x="64" y="86" fill="white" fontSize="16" fontWeight="700">SG</text>
          <text x="96" y="85" fill="white" fontSize="14" fontWeight="600" fontFamily="Outfit">Team Chat</text>

          <rect x="45" y="120" width="300" height="60" rx="8" fill="#1e293b"/>
          <rect x="60" y="135" width="200" height="10" rx="3" fill="#475569"/>
          <rect x="60" y="153" width="140" height="10" rx="3" fill="#334155"/>

          <rect x="115" y="195" width="300" height="60" rx="8" fill="var(--primary-glow)" stroke="var(--primary-border)"/>
          <rect x="130" y="210" width="220" height="10" rx="3" fill="white" fillOpacity="0.8"/>
          <rect x="130" y="228" width="160" height="10" rx="3" fill="white" fillOpacity="0.5"/>

          {/* Active Members Card */}
          <rect x="460" y="40" width="310" height="370" rx="8" fill="#131e35"/>
          <text x="480" y="70" fill="white" fontSize="16" fontWeight="700" fontFamily="Outfit">Collaborators (3)</text>
          
          <circle cx="505" cy="115" r="15" fill="#8b5cf6"/>
          <text x="498" y="120" fill="white" fontSize="12" fontWeight="700">SG</text>
          <rect x="535" y="105" width="120" height="12" rx="3" fill="white"/>
          <rect x="535" y="122" width="70" height="8" rx="2" fill="#10b981"/>

          <circle cx="505" cy="165" r="15" fill="#ec4899"/>
          <text x="498" y="170" fill="white" fontSize="12" fontWeight="700">JD</text>
          <rect x="535" y="155" width="100" height="12" rx="3" fill="#334155"/>
          <rect x="535" y="172" width="70" height="8" rx="2" fill="#10b981"/>

          <circle cx="505" cy="215" r="15" fill="#f59e0b"/>
          <text x="498" y="220" fill="white" fontSize="12" fontWeight="700">AS</text>
          <rect x="535" y="205" width="130" height="12" rx="3" fill="#334155"/>
          <rect x="535" y="222" width="50" height="8" rx="2" fill="#6b7280"/>
        </svg>
      )
    }
  ];

  const handleNextSlide = () => {
    setActiveSlide(prev => (prev === sprintHubScreenshots.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? sprintHubScreenshots.length - 1 : prev - 1));
  };

  return (
    <section id="projects" style={{ position: 'relative', overflow: 'hidden' }} className="glass-panel">
      <div className="radial-glow-1"></div>
      <div className="section-container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Demonstrated engineering capability through actual full stack builds and dynamic web platforms.
        </p>

        {/* Featured Project Card: SPRINT HUB */}
        <div
          className="glass-card animate-fade-in-up"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            padding: '36px',
            marginBottom: '40px',
            alignItems: 'center',
            border: '1px solid var(--primary-border)',
            background: 'linear-gradient(135deg, rgba(13, 21, 39, 0.9) 0%, rgba(8, 12, 20, 0.9) 100%)',
          }}
        >
          {/* Left Side: Screenshot Carousel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--glass-border)',
              aspectRatio: '16/9',
              background: '#0b1329',
              boxShadow: '0 12px 24px -10px rgba(0,0,0,0.5)',
            }}>
              {sprintHubScreenshots[activeSlide].svg}

              {/* Slider Overlay Labels */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                background: 'rgba(8, 12, 20, 0.75)',
                backdropFilter: 'blur(4px)',
                padding: '4px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                color: 'white',
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                {sprintHubScreenshots[activeSlide].title}
              </div>

              {/* Carousel Controllers */}
              <button
                onClick={handlePrevSlide}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(8,12,20,0.6)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(8,12,20,0.6)'}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNextSlide}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(8,12,20,0.6)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(8,12,20,0.6)'}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Carousel Dots Indicators */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              {sprintHubScreenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    border: 'none',
                    padding: 0,
                    backgroundColor: activeSlide === idx ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Specifications Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                padding: '4px 10px',
                borderRadius: '12px',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                color: 'var(--secondary)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>Featured Application</span>
            </div>

            <h3 style={{ fontSize: '2rem', fontWeight: 800 }}>Sprint Hub</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
              A full-stack, recruiter-grade agile project management platform designed for developer teams. Users can launch custom sprints, manage Kanban-style boards, assign ticket loads, chat in real-time, and view graphical productivity metrics.
            </p>

            {/* Core Specifications checklist */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              fontSize: '0.88rem',
              color: 'var(--text-muted)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: 'var(--primary)', display: 'flex' }}>✔</div>
                <span>User Authentication & JWT</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: 'var(--primary)', display: 'flex' }}>✔</div>
                <span>Task Board Drag-and-Drop</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: 'var(--primary)', display: 'flex' }}>✔</div>
                <span>Real-Time Collaboration</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ color: 'var(--primary)', display: 'flex' }}>✔</div>
                <span>Fully Responsive UI layouts</span>
              </div>
            </div>

            {/* Tech Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Socket.io", "CSS3 Glassmorphism"].map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA action Links */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
              <button
                className="btn btn-primary"
                onClick={() => window.open('https://github.com', '_blank')}
                style={{ flexGrow: 1 }}
              >
                <Github size={18} /> GitHub Repository
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => window.open('https://google.com', '_blank')}
                style={{ flexGrow: 1 }}
              >
                <ExternalLink size={18} /> Live Demonstration
              </button>
            </div>
          </div>
        </div>

        {/* Future Projects Placeholder Grid */}
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '40px 0 24px', textAlign: 'center' }}>
          Additional <span className="gradient-text">Developments</span>
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {/* Placeholder 1 */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', opacity: 0.85 }}>
            <div style={{
              width: '100%',
              aspectRatio: '16/10',
              borderRadius: '8px',
              backgroundColor: '#131e35',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(8,12,20,0.6)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', color: 'var(--secondary)' }}>In Development</div>
              <Laptop size={40} style={{ color: 'var(--secondary)', opacity: 0.3 }} />
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>DevConnect</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              A premium technical developer hub combining social networking, live coding challenge boards, and recruiter pipeline profiles.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {["React", "Node", "MongoDB", "Tailwind"].map((t, idx) => (
                <span key={idx} style={{ padding: '2px 6px', borderRadius: '4px', backgroundColor: 'var(--bg-tertiary)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Placeholder 2 */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', opacity: 0.85 }}>
            <div style={{
              width: '100%',
              aspectRatio: '16/10',
              borderRadius: '8px',
              backgroundColor: '#131e35',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(8,12,20,0.6)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', color: 'var(--primary)' }}>Planning Phase</div>
              <Server size={40} style={{ color: 'var(--primary)', opacity: 0.3 }} />
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>AlgoVisualizer</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              An interactive learning application helping students visualize sorting, pathfinding, and recursive tree search patterns in real-time.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {["React.js", "Vanilla CSS", "DSA Structures"].map((t, idx) => (
                <span key={idx} style={{ padding: '2px 6px', borderRadius: '4px', backgroundColor: 'var(--bg-tertiary)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
