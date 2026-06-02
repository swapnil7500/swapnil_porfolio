import React, { useState, useEffect } from 'react';
import { GraduationCap, Edit, Check, X, Shield, Book } from 'lucide-react';

export default function Education() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Load editable details from localStorage or use defaults
  const [eduData, setEduData] = useState(() => {
    const saved = localStorage.getItem('swapnil_education');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      degree: "B.Tech in Computer Science & Engineering (C.S.E.)",
      college: "AJAY KUMAR GARG ENGINEERING COLLEGE, GHAZIABAD",
      university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      year: "4th Year (Session 2022 - 2026)",
      cgpa: "8.4 CGPA",
      coursework: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
    };
  });

  const [tempData, setTempData] = useState({ ...eduData });

  const handleSave = () => {
    setEduData(tempData);
    localStorage.setItem('swapnil_education', JSON.stringify(tempData));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({ ...eduData });
    setIsEditing(false);
  };

  const updateCoursework = (index, value) => {
    const newCoursework = [...tempData.coursework];
    newCoursework[index] = value;
    setTempData({ ...tempData, coursework: newCoursework });
  };

  return (
    <section id="education" style={{ position: 'relative', overflow: 'hidden' }} className="glass-panel">
      <div className="radial-glow-2"></div>
      <div className="section-container">
        <h2 className="section-title">
          My <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">
          Academic foundation in Computer Science, detailing coursework and institutional profiles. Click "Edit Details" below to test client-side customization.
        </p>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div
            className="glass-card animate-fade-in-up"
            style={{
              border: '1px solid var(--glass-border)',
              background: 'var(--gradient-card)',
              padding: '36px',
            }}
          >
            {/* Header: Edit button toggle */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--primary-glow)',
                  border: '1px solid var(--primary-border)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <GraduationCap size={22} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Academic Records</h3>
              </div>

              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.82rem', gap: '6px' }}
                >
                  <Edit size={14} /> Edit Details
                </button>
              ) : (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={handleSave}
                    className="btn btn-primary"
                    style={{ padding: '8px 16px', fontSize: '0.82rem', gap: '6px', background: 'var(--secondary)' }}
                  >
                    <Check size={14} /> Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn btn-secondary"
                    style={{ padding: '8px 16px', fontSize: '0.82rem', gap: '6px' }}
                  >
                    <X size={14} /> Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Main Cards content */}
            {!isEditing ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                <div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {eduData.degree}
                  </h4>
                  <p style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '2px' }}>
                    {eduData.college}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    {eduData.university}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  borderTop: '1px solid var(--glass-border)',
                  borderBottom: '1px solid var(--glass-border)',
                  padding: '16px 0',
                  margin: '10px 0'
                }}>
                  <div style={{ flex: '1 1 200px' }}>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Enrollment Stage</span>
                    <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>{eduData.year}</p>
                  </div>
                  <div style={{ flex: '1 1 200px' }}>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Performance Assessment</span>
                    <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--secondary)' }}>{eduData.cgpa}</p>
                  </div>
                </div>

                {/* Coursework Display */}
                <div>
                  <h5 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Book size={16} style={{ color: 'var(--primary)' }} /> Relevant Curriculum Focus:
                  </h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {eduData.coursework.map((subject, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '20px',
                          backgroundColor: 'var(--bg-tertiary)',
                          border: '1px solid var(--glass-border)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.85rem',
                          fontWeight: 600
                        }}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Editable form inputs */
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }} className="animate-fade-in-up">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>DEGREE / BRANCH</label>
                  <input
                    type="text"
                    value={tempData.degree}
                    onChange={(e) => setTempData({ ...tempData, degree: e.target.value })}
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>COLLEGE / INSTITUTION</label>
                  <input
                    type="text"
                    value={tempData.college}
                    onChange={(e) => setTempData({ ...tempData, college: e.target.value })}
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>UNIVERSITY AFFILIATION</label>
                  <input
                    type="text"
                    value={tempData.university}
                    onChange={(e) => setTempData({ ...tempData, university: e.target.value })}
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>CURRENT YEAR</label>
                    <input
                      type="text"
                      value={tempData.year}
                      onChange={(e) => setTempData({ ...tempData, year: e.target.value })}
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--bg-tertiary)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>CGPA / GRADE</label>
                    <input
                      type="text"
                      value={tempData.cgpa}
                      onChange={(e) => setTempData({ ...tempData, cgpa: e.target.value })}
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--bg-tertiary)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                {/* Coursework inputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>RELEVANT COURSEWORK FOCUS</label>
                  {tempData.coursework.map((subject, idx) => (
                    <input
                      key={idx}
                      type="text"
                      value={subject}
                      onChange={(e) => updateCoursework(idx, e.target.value)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--bg-tertiary)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem'
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
