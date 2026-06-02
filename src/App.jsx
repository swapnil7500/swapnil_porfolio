import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import CodingProfiles from './sections/CodingProfiles';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initial loading screen animation timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Back-to-top scroll trigger listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 1. Page Loading Loader Screen */}
      <div className={`loader-screen ${!loading ? 'hidden' : ''}`}>
        <div className="loader-spinner"></div>
        <div className="loader-brand">
          SWAPNIL_<span className="gradient-text">GUPTA</span>
        </div>
      </div>

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflowX: 'hidden',
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch'
        }}
      >
        {/* Global Mesh Background Accent (Translucent Circles) */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.8
          }}
        >
          {/* Subtle grid pattern background */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundSize: '40px 40px',
            backgroundImage: 'radial-gradient(var(--glass-border) 1px, transparent 0)',
            opacity: 0.15
          }}></div>
        </div>

        {/* 2. Floating Navbar Header */}
        <Navbar />

        {/* 3. Portfolio Page Sections */}
        <main style={{ width: '100%', zIndex: 10 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <CodingProfiles />
          <Resume />
          <Contact />
        </main>

        {/* 4. Professional Footer */}
        <footer
          className="glass-panel"
          style={{
            marginTop: 'auto',
            borderWidth: '1px 0 0 0',
            padding: '40px 24px',
            textAlign: 'center',
            zIndex: 10,
            background: 'var(--glass-bg)'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem' }}>
                SWAPNIL_<span className="gradient-text">GUPTA</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                B.Tech Computer Science student & aspiring Full Stack Developer.
              </p>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              © {new Date().getFullYear()} Swapnil Gupta. Built with React & Premium Glassmorphism.
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Designed for Recruiters & Hiring Managers.
            </div>
          </div>
        </footer>

        {/* 5. Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
          aria-label="Scroll back to top"
        >
          <ArrowUp size={22} style={{ strokeWidth: 2.5 }} />
        </button>
      </div>
    </>
  );
}
