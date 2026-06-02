import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ExternalLink } from 'lucide-react';

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate API post request
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 1200);
    }
  };

  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden' }} className="glass-panel">
      <div className="radial-glow-2"></div>
      <div className="section-container">
        <h2 className="section-title">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Get in touch! Fill out the contact form below or connect via email, phone, or professional coding profiles.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Left Side: Contact details, Social channels & interactive map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '4px' }}>Swapnil Gupta</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="mailto:swapnilsureshgupta365@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--primary-glow)', border: '1px solid var(--primary-border)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={16} />
                  </div>
                  <span>swapnilsureshgupta365@gmail.com</span>
                </a>

                <a href="tel:9305118270" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--secondary-glow)', border: '1px solid var(--secondary-border)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={16} />
                  </div>
                  <span>+91-9305118270</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', color: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={16} />
                  </div>
                  <span>Dareeba, Raebareli, UP, India</span>
                </div>
              </div>

              {/* Social Channels Link Icons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px', borderTop: '1px solid var(--glass-border)', paddingTop: '16px' }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            {/* Interactive Vector Map Placeholder */}
            <div className="glass-card" style={{ padding: '16px', overflow: 'hidden' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '12px', textAlign: 'left', textTransform: 'uppercase' }}>
                Active Location representation
              </div>
              <div style={{
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: '8px',
                backgroundColor: '#131e35',
                border: '1px solid var(--glass-border)',
                position: 'relative'
              }}>
                {/* stylized map visual SVG */}
                <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%' }}>
                  {/* Grid Lines */}
                  <line x1="0" y1="45" x2="320" y2="45" stroke="rgba(255,255,255,0.03)" />
                  <line x1="0" y1="90" x2="320" y2="90" stroke="rgba(255,255,255,0.03)" />
                  <line x1="0" y1="135" x2="320" y2="135" stroke="rgba(255,255,255,0.03)" />
                  <line x1="80" y1="0" x2="80" y2="180" stroke="rgba(255,255,255,0.03)" />
                  <line x1="160" y1="0" x2="160" y2="180" stroke="rgba(255,255,255,0.03)" />
                  <line x1="240" y1="0" x2="240" y2="180" stroke="rgba(255,255,255,0.03)" />
                  
                  {/* Mock landmass */}
                  <path d="M 40,20 Q 80,40 100,20 T 160,50 T 200,80 T 260,60 T 300,100" fill="none" stroke="rgba(139, 92, 246, 0.08)" strokeWidth="6" />
                  <path d="M 20,120 Q 60,100 120,130 T 220,110 T 280,140" fill="none" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="8" />

                  {/* pulsing marker */}
                  <circle cx="180" cy="95" r="18" fill="rgba(139, 92, 246, 0.15)">
                    <animate attributeName="r" values="8;22;8" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="95" r="6" fill="var(--primary)" />
                  <text x="192" y="99" fill="white" fontSize="9" fontWeight="700" fontFamily="Outfit">Raebareli, UP</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Contact validation form */}
          <div className="glass-card" style={{ minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'left' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)' }}>FULL NAME</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: `1px solid ${errors.name ? 'rgba(244,63,94,0.5)' : 'var(--glass-border)'}`,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      fontSize: '0.92rem'
                    }}
                  />
                  {errors.name && <span style={{ fontSize: '0.78rem', color: '#f43f5e', fontWeight: 600 }}>{errors.name}</span>}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)' }}>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: `1px solid ${errors.email ? 'rgba(244,63,94,0.5)' : 'var(--glass-border)'}`,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      fontSize: '0.92rem'
                    }}
                  />
                  {errors.email && <span style={{ fontSize: '0.78rem', color: '#f43f5e', fontWeight: 600 }}>{errors.email}</span>}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)' }}>MESSAGE CONTENT</label>
                  <textarea
                    rows="4"
                    placeholder="Hi Swapnil, let's collaborate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: `1px solid ${errors.message ? 'rgba(244,63,94,0.5)' : 'var(--glass-border)'}`,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      fontSize: '0.92rem',
                      resize: 'none'
                    }}
                  />
                  {errors.message && <span style={{ fontSize: '0.78rem', color: '#f43f5e', fontWeight: 600 }}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{
                    padding: '14px',
                    borderRadius: '10px',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '8px'
                  }}
                >
                  {loading ? "Sending..." : "Submit Message"} <Send size={16} />
                </button>
              </form>
            ) : (
              /* Success animation state card */
              <div
                className="animate-fade-in-up"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '20px'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '2px solid rgba(16, 185, 129, 0.4)',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '300px', margin: '0 auto' }}>
                    Thank you for reaching out, Swapnil will get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
