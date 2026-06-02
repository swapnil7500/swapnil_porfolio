import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Code, Award, FolderGit2, ArrowRight, Download, Mail } from 'lucide-react';
import swapnilPhoto from '../assets/swapnil.png';

export default function Hero() {
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const fullSubtext = "Aspiring Full Stack Developer | MERN Stack Enthusiast | Problem Solver";
  
  // Typed text subtext effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullSubtext.substring(0, index));
      index++;
      if (index > fullSubtext.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Particle canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const particles = [];
    const particleCount = 45;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw links between nearby particles
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.04)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '40px',
        overflow: 'hidden',
        background: 'var(--gradient-hero)',
      }}
    >
      {/* Decorative Glows */}
      <div className="radial-glow-1"></div>
      <div className="radial-glow-2"></div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        className="section-container animate-fade-in-up"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '50px',
          padding: '40px 24px',
        }}
      >
        {/* Main Grid Wrapper */}
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1100px',
            zIndex: 10,
          }}
        >
          {/* Left Column: Text and CTAs */}
          <div
            className="hero-text-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              gap: '24px',
            }}
          >
            {/* Intro Branding Badge */}
            <div
              className="glass-panel"
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                color: 'var(--secondary)',
                border: '1px solid var(--secondary-border)',
                background: 'var(--secondary-glow)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--secondary)',
                display: 'inline-block',
                animation: 'pulseGlow 2s infinite'
              }}></span>
              Open to Opportunities
            </div>

            {/* Title & Tagline */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                  lineHeight: 1.1,
                  fontWeight: 800,
                  marginBottom: '16px',
                  letterSpacing: '-0.03em',
                }}
              >
                Hi, I'm <span className="gradient-text">Swapnil Gupta</span>
              </h1>
              
              <h2
                className="typing-cursor"
                style={{
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  minHeight: '2.5em',
                  lineHeight: 1.4,
                  maxWidth: '550px',
                  margin: '0',
                }}
              >
                {typedText}
              </h2>

              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--text-muted)',
                  maxWidth: '500px',
                  marginTop: '16px',
                  lineHeight: 1.6,
                }}
              >
                Passionate Computer Science student dedicated to building robust MERN applications, writing clean code, and solving algorithmic problems.
              </p>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                width: '100%',
              }}
            >
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View Projects <ArrowRight size={18} />
              </button>
              
              <a
                href="NEW_SWAPNIL RESUME.pdf"
                download="NEW_SWAPNIL RESUME.pdf"
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                Download Resume <Download size={18} />
              </a>

              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Contact Me <Mail size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Glowing Interactive Portrait Frame */}
          <div
            className="hero-image-col"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Glowing background halo */}
            <div
              style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--primary) 0%, var(--secondary) 100%)',
                filter: 'blur(50px)',
                opacity: 0.25,
                zIndex: 1,
              }}
            />

            {/* Image Outer Glassmorphic Frame */}
            <div
              className="glass-card animate-float"
              style={{
                width: '300px',
                height: '360px',
                padding: '16px',
                borderRadius: '24px',
                border: '1px solid var(--primary-border)',
                background: 'var(--gradient-card)',
                boxShadow: 'var(--card-shadow), var(--glow-shadow)',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {/* Inner Portrait Image */}
              <img
                src={swapnilPhoto}
                alt="Swapnil Gupta"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Statistics Dashboard Panel */}
        <div
          style={{
            width: '100%',
            maxWidth: '950px',
            marginTop: '20px',
            zIndex: 10,
          }}
        >
          <div
            className="glass-panel"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              padding: '32px',
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              textAlign: 'center',
            }}
          >
            {/* Stat Item 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'var(--primary-glow)',
                  border: '1px solid var(--primary-border)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <FolderGit2 size={20} />
                </div>
              </div>
              <span style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="gradient-text">5+</span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Projects Completed</span>
            </div>

            {/* Stat Item 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'var(--secondary-glow)',
                  border: '1px solid var(--secondary-border)',
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Code size={20} />
                </div>
              </div>
              <span style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="gradient-text">15+</span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Technologies Learned</span>
            </div>

            {/* Stat Item 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(244, 63, 94, 0.1)',
                  border: '1px solid rgba(244, 63, 94, 0.3)',
                  color: '#f43f5e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Award size={20} />
                </div>
              </div>
              <span style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="gradient-text">250+</span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Problems Solved (DSA)</span>
            </div>

            {/* Stat Item 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'var(--primary-glow)',
                  border: '1px solid var(--primary-border)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Briefcase size={20} />
                </div>
              </div>
              <span style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="gradient-text">1</span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Internship Completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive alignments embedded styles */}
      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .hero-text-col {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-text-col h2 {
            margin: 0 auto !important;
          }
          .hero-text-col div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-text-col div div {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
