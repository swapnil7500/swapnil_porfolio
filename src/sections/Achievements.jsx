import React from 'react';
import { Award, Zap, Code, BookOpen, Flame } from 'lucide-react';

export default function Achievements() {
  const badges = [
    {
      title: "LeetCode Solver",
      subtitle: "250+ Solved Tasks",
      description: "Solved more than 250 data structures and algorithm challenges on LeetCode, optimizing runtime and memory efficiency.",
      icon: <Award size={28} />,
      color: "#ec4899",
      glow: "rgba(236, 72, 153, 0.2)",
      borderColor: "rgba(236, 72, 153, 0.4)"
    },
    {
      title: "Full-Stack Dev",
      subtitle: "Sprint Hub Launch",
      description: "Successfully built and deployed a premium task collaboration engine utilizing React, Express, Node, and MongoDB.",
      icon: <Code size={28} />,
      color: "var(--primary)",
      glow: "var(--primary-glow)",
      borderColor: "var(--primary-border)"
    },
    {
      title: "Active Intern",
      subtitle: "Software Development",
      description: "Completed key deliverables in single-page layouts, responsive styling sheets, and Git merge workflows.",
      icon: <BookOpen size={28} />,
      color: "var(--secondary)",
      glow: "var(--secondary-glow)",
      borderColor: "var(--secondary-border)"
    },
    {
      title: "Streak Master",
      subtitle: "100+ Coding Days",
      description: "Maintained a continuous daily streak of coding practices, reinforcing dynamic programming and stack designs.",
      icon: <Flame size={28} />,
      color: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.2)",
      borderColor: "rgba(245, 158, 11, 0.4)"
    }
  ];

  return (
    <section id="achievements" style={{ position: 'relative', overflow: 'hidden' }} className="glass-panel">
      <div className="radial-glow-1"></div>
      <div className="section-container">
        <h2 className="section-title">
          My <span className="gradient-text">Achievements</span>
        </h2>
        <p className="section-subtitle">
          Professional and technical milestones representing dedication, continuous learning, and algorithmic expertise.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}>
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="glass-card animate-fade-in-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '16px',
                padding: '32px 24px',
                border: '1px solid var(--glass-border)',
                background: 'var(--gradient-card)',
                animationDelay: `${idx * 0.1}s`,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = badge.borderColor;
                e.currentTarget.style.boxShadow = `0 10px 30px -10px ${badge.color}40`;
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Badge Circular Glow */}
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                backgroundColor: badge.glow,
                border: `2px dashed ${badge.color}60`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: badge.color,
                boxShadow: `0 0 20px ${badge.color}20`,
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                {badge.icon}
              </div>

              {/* Title / Info */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {badge.title}
                </h3>
                <h4 style={{ fontSize: '0.88rem', color: badge.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  {badge.subtitle}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
