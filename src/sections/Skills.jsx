import React from 'react';
import { Monitor, Server, Database, Code2, Cpu, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor size={22} />,
      color: "var(--primary)",
      glow: "var(--primary-glow)",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "Responsive Design", level: 92 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={22} />,
      color: "var(--secondary)",
      glow: "var(--secondary-glow)",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs Integration", level: 90 }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={22} />,
      color: "#ec4899",
      glow: "rgba(236, 72, 153, 0.1)",
      skills: [
        { name: "MongoDB", level: 86 },
        { name: "MySQL", level: 82 },
        { name: "PostgreSQL", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code2 size={22} />,
      color: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.1)",
      skills: [
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={22} />,
      color: "#10b981",
      glow: "rgba(16, 185, 129, 0.1)",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 92 },
        { name: "Postman", level: 86 },
        { name: "Cisco Packet Tracer", level: 78 }
      ]
    },
    {
      title: "Core CS Subjects",
      icon: <Cpu size={22} />,
      color: "#3b82f6",
      glow: "rgba(59, 130, 246, 0.1)",
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "DBMS", level: 84 },
        { name: "Operating Systems", level: 80 },
        { name: "Computer Networks", level: 82 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ];

  return (
    <section id="skills" style={{ position: 'relative', overflow: 'hidden' }} className="glass-panel">
      <div className="radial-glow-2"></div>
      <div className="section-container">
        <h2 className="section-title">
          My Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          A structured overview of technologies, development environments, and computer science concepts I have mastered.
        </p>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
            alignItems: 'start'
          }}
        >
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card animate-fade-in-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                animationDelay: `${idx * 0.08}s`,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = category.color + '50';
                e.currentTarget.style.boxShadow = `0 10px 30px -10px ${category.color}30`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: category.glow,
                  border: `1px solid ${category.color}40`,
                  color: category.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{category.title}</h3>
              </div>

              {/* Skills Progress List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600 }}>
                      <span style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                      <span style={{ color: category.color }}>{skill.level}%</span>
                    </div>
                    {/* Progress Track */}
                    <div style={{
                      height: '6px',
                      width: '100%',
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '3px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: `linear-gradient(to right, ${category.color}80, ${category.color})`,
                          borderRadius: '3px',
                          boxShadow: `0 0 10px ${category.color}50`,
                          transform: 'translateX(-100%)',
                          animation: 'progressSlide 1.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards',
                          animationDelay: '0.2s'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progressSlide {
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
