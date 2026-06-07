import React from 'react';
import { Award, Code2, Link2, ExternalLink } from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function CodingProfiles() {
  const profiles = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={32} />,
      url: "https://linkedin.com",
      color: "#0077b5",
      glow: "rgba(0, 119, 181, 0.15)",
      borderColor: "rgba(0, 119, 181, 0.4)",
      tagline: "Professional Connection & Network",
      stat: "Connect with me"
    },
    {
      name: "GitHub",
      icon: <Github size={32} />,
      url: "https://github.com",
      color: "#24292e",
      glow: "rgba(255, 255, 255, 0.08)",
      borderColor: "rgba(255, 255, 255, 0.2)",
      tagline: "Open-source Repositories & Commits",
      stat: "5+ Repositories"
    },
    {
      name: "LeetCode",
      icon: <Code2 size={32} />,
      url: "https://leetcode.com",
      color: "#ffa116",
      glow: "rgba(255, 161, 22, 0.15)",
      borderColor: "rgba(255, 161, 22, 0.4)",
      tagline: "Data Structures & Algorithms Solving",
      stat: "175+ Solved"
    },
    {
      name: "HackerRank",
      icon: <Award size={32} />,
      url: "https://hackerrank.com",
      color: "#2ec866",
      glow: "rgba(46, 200, 102, 0.15)",
      borderColor: "rgba(46, 200, 102, 0.4)",
      tagline: "Skill Certificates & Language Badges",
      stat: "5 Star java / Problem Solving"
    }
  ];

  return (
    <section id="profiles" style={{ position: 'relative', overflow: 'hidden' }} className="glass-panel">
      <div className="radial-glow-2"></div>
      <div className="section-container">
        <h2 className="section-title">
          Coding <span className="gradient-text">Profiles</span>
        </h2>
        <p className="section-subtitle">
          Explore my active competitive programming rankings, project commits, and professional connections.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {profiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card animate-fade-in-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px',
                padding: '28px',
                border: '1px solid var(--glass-border)',
                background: 'var(--gradient-card)',
                animationDelay: `${idx * 0.08}s`,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = profile.borderColor;
                e.currentTarget.style.boxShadow = `0 10px 30px -10px ${profile.color}40`;
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Profile Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: profile.glow,
                  border: `1px solid ${profile.borderColor}`,
                  color: profile.name === 'GitHub' ? 'var(--text-primary)' : profile.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {profile.icon}
                </div>
                
                <div style={{ color: 'var(--text-muted)' }}>
                  <ExternalLink size={18} />
                </div>
              </div>

              {/* Body */}
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {profile.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '12px' }}>
                  {profile.tagline}
                </p>
                <span style={{
                  fontSize: '0.78rem',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-secondary)',
                  fontWeight: 600
                }}>
                  {profile.stat}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
