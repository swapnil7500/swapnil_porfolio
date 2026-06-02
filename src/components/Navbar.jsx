import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Profiles', id: 'profiles' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120; // offset

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className="glass-panel"
      style={{
        position: 'fixed',
        top: scrolled ? '20px' : '0px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: scrolled ? 'calc(100% - 40px)' : '100%',
        maxWidth: '1200px',
        height: '70px',
        borderRadius: scrolled ? '16px' : '0px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        borderWidth: scrolled ? '1px' : '0 0 1px 0',
      }}
    >
      {/* Brand Logo */}
      <a
        href="#home"
        onClick={(e) => handleLinkClick(e, 'home')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '1.25rem',
          letterSpacing: '-0.03em',
        }}
      >
        <Terminal size={22} className="gradient-text" style={{ strokeWidth: 2.5 }} />
        <span>
          SWAPNIL_<span className="gradient-text">GUPTA</span>
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <div
        className="desktop-menu"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            alignItems: 'center',
            gap: '4px',
            marginRight: '12px',
          }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  color: activeSection === link.id ? 'var(--primary)' : 'var(--text-secondary)',
                  background: activeSection === link.id ? 'var(--primary-glow)' : 'transparent',
                  border: '1px solid transparent',
                  borderColor: activeSection === link.id ? 'var(--primary-border)' : 'transparent',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.id) {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.id) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Actions */}
      <div
        className="mobile-actions"
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="glass-panel animate-fade-in-up"
          style={{
            position: 'absolute',
            top: '80px',
            left: '0',
            width: '100%',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--card-shadow)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            listStyle: 'none',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '1rem',
                color: activeSection === link.id ? 'var(--primary)' : 'var(--text-secondary)',
                background: activeSection === link.id ? 'var(--primary-glow)' : 'transparent',
                border: activeSection === link.id ? '1px solid var(--primary-border)' : 'none',
                display: 'block',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Embedded CSS for responsive toggle */}
      <style>{`
        @media (max-width: 991px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-actions {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
