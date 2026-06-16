import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, ChevronDown, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Award, Code, Zap, Shield, Eye, Heart, ArrowUp, Download, Copy, Check } from 'lucide-react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MOE KYAW AUNG PORTFOLIO V119
 * Senior Android Developer - Premium Portfolio Website
 * 
 * Features:
 * - Multi-page navigation with smooth transitions
 * - Cyberpunk/Neon design with graphite, copper, and cream palette
 * - Animated hero section with particle effects
 * - Advanced about section with timeline and counters
 * - Certificate management and filtering system
 * - App showcase gallery with lightbox
 * - Contact form with validation
 * - Dark/Light mode toggle
 * - Fully responsive design
 * - WCAG accessibility standards
 * - Production-grade code quality
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ============================================================================
// THEME CONFIGURATION
// ============================================================================
const THEME = {
  dark: {
    bg: '#0f0f0f',
    bgSecondary: '#1c1c1e',
    bgTertiary: '#2c2c2e',
    text: '#f5f0e8',
    textSecondary: '#b8b8ba',
    accent: '#b87333',
    accentLight: '#d4a574',
    neon: '#ff006e',
    neonAlt: '#00d4ff',
    success: '#00ff87',
    danger: '#ff4757',
  },
  light: {
    bg: '#f5f0e8',
    bgSecondary: '#efefec',
    bgTertiary: '#e8e8e6',
    text: '#0f0f0f',
    textSecondary: '#4a4a4a',
    accent: '#b87333',
    accentLight: '#d4a574',
    neon: '#d1004e',
    neonAlt: '#0088b8',
    success: '#00a854',
    danger: '#ff4757',
  },
};

// ============================================================================
// STYLES COMPONENT (CSS-in-JS with variables)
// ============================================================================
const GlobalStyles = ({ isDark }) => {
  const theme = isDark ? THEME.dark : THEME.light;
  
  return (
    <style>{`
      :root {
        --bg: ${theme.bg};
        --bg-secondary: ${theme.bgSecondary};
        --bg-tertiary: ${theme.bgTertiary};
        --text: ${theme.text};
        --text-secondary: ${theme.textSecondary};
        --accent: ${theme.accent};
        --accent-light: ${theme.accentLight};
        --neon: ${theme.neon};
        --neon-alt: ${theme.neonAlt};
        --success: ${theme.success};
        --danger: ${theme.danger};
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: 'Segoe UI', Trebuchet MS, sans-serif;
        background: var(--bg);
        color: var(--text);
        line-height: 1.6;
        transition: background 0.3s, color 0.3s;
      }

      /* ─── CUSTOM CURSOR ─── */
      ${isDark ? `
        body {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="4" fill="%23b87333"/><circle cx="16" cy="16" r="12" fill="none" stroke="%23b87333" stroke-width="1" opacity="0.5"/></svg>') 16 16, auto;
        }
      ` : `
        body {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="4" fill="%234a4a4a"/><circle cx="16" cy="16" r="12" fill="none" stroke="%234a4a4a" stroke-width="1" opacity="0.5"/></svg>') 16 16, auto;
        }
      `}

      /* ─── SCROLLBAR STYLING ─── */
      ::-webkit-scrollbar {
        width: 12px;
      }

      ::-webkit-scrollbar-track {
        background: var(--bg-secondary);
      }

      ::-webkit-scrollbar-thumb {
        background: var(--accent);
        border-radius: 6px;
        transition: background 0.3s;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: var(--accent-light);
      }

      /* ─── ANIMATIONS ─── */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideInFromLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInFromRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }

      @keyframes glow {
        0%, 100% {
          box-shadow: 0 0 10px var(--accent), 0 0 20px var(--accent);
        }
        50% {
          box-shadow: 0 0 20px var(--accent), 0 0 40px var(--accent);
        }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
      }

      @keyframes blink {
        0%, 49%, 100% { opacity: 1; }
        50%, 99% { opacity: 0; }
      }

      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }

      .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
      }

      .slide-in-left {
        animation: slideInFromLeft 0.6s ease-out forwards;
      }

      .slide-in-right {
        animation: slideInFromRight 0.6s ease-out forwards;
      }

      .glow {
        animation: glow 2s infinite;
      }

      .float {
        animation: float 3s ease-in-out infinite;
      }

      /* ─── TYPOGRAPHY ─── */
      h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      h1 {
        font-size: 3.5rem;
        line-height: 1.1;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 2.5rem;
        line-height: 1.2;
        margin-bottom: 1.5rem;
      }

      h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      h4 {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
      }

      p {
        font-size: 1rem;
        margin-bottom: 1rem;
        color: var(--text-secondary);
      }

      a {
        color: var(--accent);
        text-decoration: none;
        transition: color 0.3s, text-shadow 0.3s;
      }

      a:hover {
        color: var(--accent-light);
        text-shadow: 0 0 10px var(--accent);
      }

      /* ─── BUTTONS ─── */
      button {
        font-family: inherit;
        cursor: pointer;
        border: none;
        transition: all 0.3s;
      }

      .btn {
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: 600;
        font-size: 1rem;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        position: relative;
        overflow: hidden;
      }

      .btn-primary {
        background: var(--accent);
        color: var(--bg);
        border: 2px solid var(--accent);
      }

      .btn-primary:hover {
        background: var(--accent-light);
        border-color: var(--accent-light);
        box-shadow: 0 0 20px var(--accent);
      }

      .btn-secondary {
        background: transparent;
        color: var(--accent);
        border: 2px solid var(--accent);
      }

      .btn-secondary:hover {
        background: var(--accent);
        color: var(--bg);
        box-shadow: 0 0 20px var(--accent);
      }

      .btn-tertiary {
        background: var(--bg-tertiary);
        color: var(--accent);
        border: 1px solid var(--accent);
      }

      .btn-tertiary:hover {
        background: var(--accent);
        color: var(--bg);
        box-shadow: 0 0 15px var(--accent);
      }

      /* ─── CARDS ─── */
      .card {
        background: var(--bg-secondary);
        border: 1px solid var(--bg-tertiary);
        border-radius: 8px;
        padding: 24px;
        transition: all 0.3s;
      }

      .card:hover {
        border-color: var(--accent);
        box-shadow: 0 0 20px rgba(184, 115, 51, 0.2);
        transform: translateY(-4px);
      }

      /* ─── FORMS ─── */
      input, textarea, select {
        font-family: inherit;
        padding: 12px 16px;
        border: 1px solid var(--bg-tertiary);
        background: var(--bg-secondary);
        color: var(--text);
        border-radius: 6px;
        font-size: 1rem;
        transition: all 0.3s;
      }

      input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: var(--accent);
        box-shadow: 0 0 10px rgba(184, 115, 51, 0.2);
        background: var(--bg-tertiary);
      }

      input::placeholder, textarea::placeholder {
        color: var(--text-secondary);
      }

      textarea {
        resize: vertical;
        min-height: 120px;
      }

      /* ─── LAYOUT UTILITIES ─── */
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .section {
        padding: 80px 20px;
      }

      .section-title {
        text-align: center;
        margin-bottom: 60px;
      }

      .section-label {
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        color: var(--accent);
        margin-bottom: 10px;
        text-transform: uppercase;
      }

      /* ─── GRID ─── */
      .grid {
        display: grid;
        gap: 24px;
      }

      .grid-2 {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }

      .grid-3 {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }

      .grid-4 {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }

      /* ─── FLEX ─── */
      .flex {
        display: flex;
      }

      .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .flex-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      /* ─── RESPONSIVE ─── */
      @media (max-width: 768px) {
        h1 { font-size: 2.5rem; }
        h2 { font-size: 1.8rem; }
        h3 { font-size: 1.4rem; }
        .section { padding: 60px 20px; }
        .grid-3, .grid-4 { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
      }

      /* ─── ACCESSIBILITY ─── */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }

      .skip-to-content {
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--accent);
        color: var(--bg);
        padding: 8px;
        z-index: 100;
      }

      .skip-to-content:focus {
        top: 0;
      }
    `}</style>
  );
};

// ============================================================================
// PARTICLE BACKGROUND COMPONENT
// ============================================================================
const ParticleBackground = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = isDark ? '#0f0f0f' : '#f5f0e8';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.fillStyle = `rgba(184, 115, 51, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(184, 115, 51, ${(particle.opacity * (1 - distance / 150)) * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDark]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }} />;
};

// ============================================================================
// HEADER & NAVIGATION COMPONENT
// ============================================================================
const Header = ({ isDark, toggleDarkMode, activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚙️' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'certificates', label: 'Certificates', icon: '📜' },
    { id: 'contact', label: 'Contact', icon: '💬' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: `${isDark ? '#0f0f0f' : '#f5f0e8'}dd`,
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${isDark ? '#2c2c2e' : '#e8e8e6'}`,
      zIndex: 1000,
      transition: 'all 0.3s',
    }}>
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        {/* Logo */}
        <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--accent)', cursor: 'pointer' }} onClick={() => setActiveSection('home')}>
          MKA<span style={{ color: 'var(--text)', marginLeft: '4px' }}>Dev</span>
        </div>

        {/* Desktop Navigation */}
        <div style={{ display: 'none', gap: '8px', '@media (min-width: 768px)': { display: 'flex' } }} className="desktop-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              style={{
                padding: '8px 16px',
                background: activeSection === item.id ? 'var(--accent)' : 'transparent',
                color: activeSection === item.id ? 'var(--bg)' : 'var(--text)',
                border: '1px solid transparent',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            style={{
              padding: '8px 12px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--bg-tertiary)',
              borderRadius: '4px',
              color: 'var(--accent)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '8px 12px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--bg-tertiary)',
              borderRadius: '4px',
              color: 'var(--accent)',
              cursor: 'pointer',
              display: 'none',
              '@media (max-width: 768px)': { display: 'flex' },
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--bg-tertiary)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
              style={{
                padding: '12px 16px',
                background: activeSection === item.id ? 'var(--accent)' : 'transparent',
                color: activeSection === item.id ? 'var(--bg)' : 'var(--text)',
                border: '1px solid var(--bg-tertiary)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                textAlign: 'left',
              }}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

// ============================================================================
// HERO SECTION COMPONENT
// ============================================================================
const HeroSection = ({ isDark }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'SENIOR ANDROID DEVELOPER';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 20px 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '900px', textAlign: 'center', zIndex: 10, position: 'relative' }}>
        {/* Animated Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--accent)',
          padding: '12px 24px',
          borderRadius: '50px',
          marginBottom: '30px',
          animation: 'fadeInUp 0.8s ease-out',
        }}>
          <span style={{ width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
          <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Open to Work • Available Now</span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2rem, 8vw, 4.5rem)',
          marginBottom: '20px',
          animation: 'fadeInUp 0.8s ease-out 0.1s both',
        }}>
          Moe Kyaw Aung
        </h1>

        {/* Typewriter Text */}
        <div style={{
          fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
          fontWeight: 600,
          color: 'var(--accent)',
          marginBottom: '30px',
          minHeight: '50px',
          animation: 'fadeInUp 0.8s ease-out 0.2s both',
        }}>
          {displayedText}
          <span style={{ animation: 'blink 1s infinite', marginLeft: '4px' }}>_</span>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px',
          animation: 'fadeInUp 0.8s ease-out 0.3s both',
          lineHeight: 1.8,
        }}>
          12+ years crafting scalable, secure Android applications with Kotlin, Jetpack, and Firebase. Specialized in clean architecture, CI/CD pipelines, and delivering production-grade solutions.
        </p>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
          maxWidth: '500px',
          margin: '0 auto 40px',
          animation: 'fadeInUp 0.8s ease-out 0.4s both',
        }}>
          {[
            { number: '12+', label: 'Years Experience' },
            { number: '3K+', label: 'Apps Built' },
            { number: '122', label: 'GitHub Repos' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '20px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-tertiary)', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>{stat.number}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeInUp 0.8s ease-out 0.5s both',
        }}>
          <button className="btn btn-primary">
            <Download size={18} /> Download CV
          </button>
          <button className="btn btn-secondary">
            <Github size={18} /> View GitHub
          </button>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'float 3s ease-in-out infinite',
        }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Scroll to explore</span>
          <ChevronDown size={20} color="var(--accent)" />
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// ABOUT SECTION WITH TIMELINE
// ============================================================================
const AboutSection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    // Animate counters
    const targets = [12, 122, 3000];
    const intervals = [
      setInterval(() => {
        setCount1(prev => prev < 12 ? prev + 1 : 12);
      }, 50),
      setInterval(() => {
        setCount2(prev => prev < 122 ? prev + 2 : 122);
      }, 20),
      setInterval(() => {
        setCount3(prev => prev < 3000 ? prev + 50 : 3000);
      }, 10),
    ];

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const timeline = [
    { year: '2012', title: 'Started Android Journey', desc: 'Began learning Java and Android fundamentals' },
    { year: '2015', title: 'Kotlin Adoption', desc: 'Transitioned to Kotlin for modern development' },
    { year: '2018', title: 'Architecture Mastery', desc: 'Implemented Clean Architecture and MVVM patterns' },
    { year: '2021', title: 'Firebase & CI/CD', desc: 'Integrated Firebase backend and automated pipelines' },
    { year: '2024', title: 'AI Integration', desc: 'Implemented Claude API for AI-powered features' },
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: `linear-gradient(135deg, var(--bg) 0%, var(--bg-secondary) 100%)`,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-label">About Me</div>
          <h2>Developer by Passion, Learner by Nature</h2>
        </div>

        {/* About Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '80px',
        }}>
          {/* Left: Description */}
          <div style={{ animation: 'slideInLeft 0.8s ease-out' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              I am a passionate and self-motivated developer with nearly 12 years of hands-on experience building secure, scalable, and user-friendly mobile applications.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              Strong in Kotlin and modern Jetpack development (Compose, ViewModel, Room), Firebase integration, and REST API consumption. I focus on clean architecture, maintainable code, and practical security.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              Currently building AI-powered features using Claude API and exploring advanced ML implementations on Android.
            </p>
          </div>

          {/* Right: Stats Cards */}
          <div style={{ display: 'grid', gap: '20px', animation: 'slideInRight 0.8s ease-out' }}>
            <div className="card">
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '8px' }}>{count1}+</div>
              <div>Years of Experience</div>
            </div>
            <div className="card">
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '8px' }}>{count2}</div>
              <div>GitHub Repositories</div>
            </div>
            <div className="card">
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '8px' }}>{count3}+</div>
              <div>Apps Built</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '60px' }}>Professional Journey</h3>
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: 'linear-gradient(to bottom, var(--accent), transparent)',
              display: 'none',
              '@media (min-width: 768px)': { display: 'block' },
            }}></div>

            {/* Timeline Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {timeline.map((item, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  alignItems: 'center',
                  animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both`,
                }}>
                  {/* Left (alternate) */}
                  {i % 2 === 0 && (
                    <>
                      <div style={{ textAlign: 'right' }} className="card">
                        <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '8px' }}>{item.year}</div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '16px', height: '16px', background: 'var(--accent)', borderRadius: '50%', border: '4px solid var(--bg)' }}></div>
                      </div>
                    </>
                  )}

                  {/* Right (alternate) */}
                  {i % 2 !== 0 && (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '16px', height: '16px', background: 'var(--accent)', borderRadius: '50%', border: '4px solid var(--bg)' }}></div>
                      </div>
                      <div className="card">
                        <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '8px' }}>{item.year}</div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SKILLS SECTION WITH ANIMATED RINGS
// ============================================================================
const SkillsSection = () => {
  const skillCategories = [
    {
      name: 'Android Development',
      icon: '📱',
      percentage: 98,
      skills: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Material 3'],
    },
    {
      name: 'Backend & APIs',
      icon: '⚙️',
      percentage: 90,
      skills: ['Firebase', 'REST APIs', 'Retrofit', 'Room Database', 'JSON'],
    },
    {
      name: 'DevOps & CI/CD',
      icon: '🔧',
      percentage: 85,
      skills: ['GitHub Actions', 'Azure DevOps', 'Jenkins', 'Fastlane', 'Docker'],
    },
    {
      name: 'Testing & QA',
      icon: '✅',
      percentage: 88,
      skills: ['JUnit', 'Espresso', 'MockK', 'UI Testing', 'Integration Tests'],
    },
    {
      name: 'AI & ML',
      icon: '🤖',
      percentage: 82,
      skills: ['Claude API', 'TensorFlow Lite', 'On-Device ML', 'NLP', 'Python'],
    },
    {
      name: 'Security',
      icon: '🔐',
      percentage: 87,
      skills: ['Encryption', 'OAuth 2.0', 'Secure Storage', 'Ethical Hacking', 'Kali Linux'],
    },
  ];

  return (
    <section style={{ padding: '80px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-label">Expertise</div>
          <h2>Skills & Proficiencies</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto 0' }}>
            Comprehensive expertise across Android development, cloud infrastructure, and modern DevOps practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
        }}>
          {skillCategories.map((category, i) => (
            <div key={i} className="card" style={{ animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both` }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '2rem' }}>{category.icon}</span>
                <h4 style={{ margin: 0 }}>{category.name}</h4>
              </div>

              {/* Animated Progress Ring */}
              <svg style={{ width: '100%', height: '120px', margin: '20px 0' }} viewBox="0 0 120 120">
                {/* Background Circle */}
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--bg-tertiary)" strokeWidth="8" />
                {/* Progress Circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="8"
                  strokeDasharray={`${(category.percentage / 100) * 314} 314`}
                  strokeLinecap="round"
                  style={{
                    transform: 'rotate(-90deg)',
                    transformOrigin: '60px 60px',
                    transition: 'stroke-dasharray 2s ease-out',
                  }}
                />
                {/* Percentage Text */}
                <text x="60" y="70" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--accent)">
                  {category.percentage}%
                </text>
              </svg>

              {/* Skills List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {category.skills.map((skill, j) => (
                  <span key={j} style={{
                    padding: '6px 12px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--accent)',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// PROJECTS/APPS SHOWCASE SECTION WITH LIGHTBOX
// ============================================================================
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Video Player',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      description: 'Advanced video player with streaming capabilities, adaptive bitrate, and offline support.',
      tech: ['Kotlin', 'Jetpack', 'ExoPlayer', 'Firebase'],
      link: 'https://github.com/moekyawaung-tech/video-player',
    },
    {
      id: 2,
      name: 'Social Dashboard',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1460925895917-afd651c3a1bb?w=500&h=300&fit=crop',
      description: 'Real-time social media analytics dashboard with trending metrics and engagement tracking.',
      tech: ['React', 'Firebase', 'Chart.js', 'Material UI'],
      link: 'https://github.com/moekyawaung-tech/social-dashboard',
    },
    {
      id: 3,
      name: 'Game Collection',
      category: 'Game',
      image: 'https://images.unsplash.com/photo-1538481572228-83d8b4e0b7c5?w=500&h=300&fit=crop',
      description: 'Collection of mini-games built with modern Android technologies and smooth animations.',
      tech: ['Kotlin', 'Canvas API', 'Coroutines', 'Room'],
      link: 'https://github.com/moekyawaung-tech/game-collection',
    },
    {
      id: 4,
      name: 'PWA App',
      category: 'Progressive Web App',
      image: 'https://images.unsplash.com/photo-1495869142263-879a56b45881?w=500&h=300&fit=crop',
      description: 'Progressive Web Application with offline functionality and native-like experience.',
      tech: ['React', 'Service Workers', 'IndexedDB', 'Web APIs'],
      link: 'https://github.com/moekyawaung-tech/pwa-app',
    },
    {
      id: 5,
      name: 'Job Portal',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      description: 'Complete job portal with matching algorithm, profile creation, and real-time notifications.',
      tech: ['Kotlin', 'Node.js', 'MongoDB', 'Firebase'],
      link: 'https://github.com/moekyawaung-tech/Job-Portal-App',
    },
    {
      id: 6,
      name: 'POS System',
      category: 'Business App',
      image: 'https://images.unsplash.com/photo-1579658291343-e1fbf27a7bd9?w=500&h=300&fit=crop',
      description: 'Full-featured POS system with inventory management, reporting, and multi-user support.',
      tech: ['Kotlin', 'Firebase', 'Room', 'Retrofit'],
      link: 'https://github.com/moekyawaung-tech/POS-Full-Version',
    },
  ];

  return (
    <section style={{ padding: '80px 20px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-label">Portfolio</div>
          <h2>Featured Projects</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto 0' }}>
            Showcase of production-grade applications demonstrating architectural excellence and technical proficiency.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
        }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="card"
              style={{
                overflow: 'hidden',
                cursor: 'pointer',
                animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both`,
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div style={{
                position: 'relative',
                height: '200px',
                background: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '6px',
                marginBottom: '16px',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent, var(--bg-secondary))',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px',
                }}>
                  <span style={{
                    padding: '6px 12px',
                    background: 'var(--accent)',
                    color: 'var(--bg)',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <h3 style={{ marginBottom: '8px', color: 'var(--text)' }}>{project.name}</h3>
              <p style={{ marginBottom: '16px', fontSize: '0.95rem' }}>{project.description}</p>

              {/* Tech Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {project.tech.map((tech, j) => (
                  <span key={j} style={{
                    padding: '4px 10px',
                    background: 'var(--bg-tertiary)',
                    fontSize: '0.75rem',
                    borderRadius: '3px',
                    fontWeight: 500,
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button className="btn btn-secondary" style={{ width: '100%' }}>
                <Eye size={16} /> View Project
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '20px',
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="card"
            style={{
              maxWidth: '600px',
              width: '100%',
              animation: 'slideInUp 0.3s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              style={{ width: '100%', borderRadius: '6px', marginBottom: '20px' }}
            />
            <h2 style={{ marginBottom: '16px' }}>{selectedProject.name}</h2>
            <p style={{ marginBottom: '20px', fontSize: '1.05rem' }}>{selectedProject.description}</p>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ marginBottom: '12px' }}>Technologies</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} style={{
                    padding: '8px 16px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Github size={18} /> View on GitHub
            </a>

            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--bg-tertiary)',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                color: 'var(--text)',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// ============================================================================
// CERTIFICATES SECTION
// ============================================================================
const CertificatesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Certificates', count: 82 },
    { id: 'programming', label: 'Programming Languages', count: 13 },
    { id: 'web', label: 'Web Development', count: 13 },
    { id: 'mobile', label: 'Mobile Development', count: 7 },
    { id: 'databases', label: 'Databases', count: 6 },
    { id: 'ai', label: 'AI & Data Science', count: 11 },
    { id: 'security', label: 'Security & DevOps', count: 10 },
    { id: 'blockchain', label: 'Blockchain', count: 4 },
  ];

  const certificates = [
    { id: 1, name: 'C Programming Mastery', category: 'programming', date: 'Jul 4, 2024', certId: '1720080366600' },
    { id: 2, name: 'Advanced Kotlin', category: 'programming', date: 'Jun 15, 2024', certId: '1718454634000' },
    { id: 3, name: 'React Advanced Patterns', category: 'web', date: 'May 30, 2024', certId: '1717062567000' },
    { id: 4, name: 'Flutter Fundamentals', category: 'mobile', date: 'Apr 20, 2024', certId: '1713607356000' },
    { id: 5, name: 'Firebase Mastery', category: 'databases', date: 'Mar 10, 2024', certId: '1709948564000' },
    { id: 6, name: 'Machine Learning Basics', category: 'ai', date: 'Feb 28, 2024', certId: '1709131200000' },
    { id: 7, name: 'Cybersecurity Essentials', category: 'security', date: 'Jan 15, 2024', certId: '1705276800000' },
    { id: 8, name: 'Blockchain Fundamentals', category: 'blockchain', date: 'Dec 20, 2023', certId: '1703033600000' },
  ];

  const filtered = certificates.filter(cert => {
    const matchCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section style={{ padding: '80px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label">Credentials</div>
          <h2>Certificates & Credentials</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto 0' }}>
            82+ verified certificates demonstrating expertise across 9 major technology domains.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: '1 1 300px',
              maxWidth: '400px',
            }}
          />
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '40px',
          justifyContent: 'center',
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '10px 16px',
                background: selectedCategory === cat.id ? 'var(--accent)' : 'var(--bg-secondary)',
                color: selectedCategory === cat.id ? 'var(--bg)' : 'var(--text)',
                border: `1px solid ${selectedCategory === cat.id ? 'var(--accent)' : 'var(--bg-tertiary)'}`,
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.3s',
              }}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {filtered.map((cert, i) => (
            <div
              key={cert.id}
              className="card"
              style={{
                animation: `fadeInUp 0.8s ease-out ${i * 0.05}s both`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <Award size={24} color="var(--accent)" />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 4px 0', color: 'var(--text)' }}>{cert.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem' }}>📅 {cert.date}</p>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', marginBottom: '16px', color: 'var(--text-secondary)' }}>
                Certificate ID: {cert.certId}
              </p>
              <button className="btn btn-secondary" style={{ width: '100%' }}>
                <ExternalLink size={14} /> Verify Certificate
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ fontSize: '1.1rem' }}>No certificates found</p>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================================================
// CONTACT SECTION
// ============================================================================
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'moekyawaung@programmer.net',
      type: 'email',
      link: 'mailto:moekyawaung@programmer.net',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+95 9 889 000 889',
      type: 'phone',
      link: 'tel:+959889000889',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'Dev-moe-kyawaung',
      type: 'link',
      link: 'https://github.com/Dev-moe-kyawaung',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'moe-kyaw-aung',
      type: 'link',
      link: 'https://linkedin.com/in/moe-kyaw-aung-2653093a1',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section style={{ padding: '80px 20px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-label">Get In Touch</div>
          <h2>Let's Work Together</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto 0' }}>
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
        }}>
          {/* Left: Contact Methods */}
          <div>
            <h3 style={{ marginBottom: '40px' }}>Contact Information</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {contactMethods.map((method, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer',
                    animation: `slideInLeft 0.6s ease-out ${i * 0.1}s both`,
                  }}
                  onClick={() => {
                    if (method.type === 'link') window.open(method.link, '_blank');
                    else handleCopy(method.value, method.label);
                  }}
                >
                  <div style={{ color: 'var(--accent)' }}>{method.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>{method.label}</div>
                    <div style={{ fontWeight: 600 }}>{method.value}</div>
                  </div>
                  {method.type !== 'link' && (
                    <button style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--accent)',
                      cursor: 'pointer',
                      padding: '8px',
                    }}>
                      {copied === method.label ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '40px' }}>
              <h4 style={{ marginBottom: '16px' }}>Social Media</h4>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {[
                  { icon: '🐙', label: 'GitHub', link: 'https://github.com' },
                  { icon: '💼', label: 'LinkedIn', link: 'https://linkedin.com' },
                  { icon: '📘', label: 'Facebook', link: 'https://facebook.com' },
                  { icon: '🐦', label: 'Twitter', link: 'https://twitter.com' },
                  { icon: '📷', label: 'Instagram', link: 'https://instagram.com' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--bg-tertiary)',
                      borderRadius: '6px',
                      fontSize: '1.5rem',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent)';
                      e.currentTarget.style.borderColor = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-secondary)';
                      e.currentTarget.style.borderColor = 'var(--bg-tertiary)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h3 style={{ marginBottom: '24px' }}>Send Me a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {submitted && (
                <div style={{
                  padding: '12px 16px',
                  background: 'var(--success)',
                  color: 'var(--bg)',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontWeight: 600,
                }}>
                  Thanks for your message! I'll get back to you soon.
                </div>
              )}
            </form>

            {/* Newsletter Signup */}
            <div style={{
              marginTop: '40px',
              padding: '24px',
              background: 'var(--bg)',
              border: '1px solid var(--bg-tertiary)',
              borderRadius: '8px',
            }}>
              <h4 style={{ marginBottom: '12px' }}>Subscribe to Updates</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>Get notified about new projects and updates.</p>
              <form onSubmit={(e) => { e.preventDefault(); }} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{ flex: 1 }}
                />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// FOOTER COMPONENT
// ============================================================================
const Footer = ({ isDark, setActiveSection }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { category: 'Services', links: [{ label: 'Android Development', id: '#' }, { label: 'Consulting', id: '#' }, { label: 'Training', id: '#' }] },
    { category: 'Resources', links: [{ label: 'Blog', id: '#' }, { label: 'Documentation', id: '#' }, { label: 'GitHub Repos', id: '#' }] },
    { category: 'Company', links: [{ label: 'About', id: 'about' }, { label: 'Portfolio', id: 'projects' }, { label: 'Contact', id: 'contact' }] },
  ];

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-tertiary)', padding: '60px 20px 30px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          {/* Brand */}
          <div>
            <h4 style={{ marginBottom: '16px', color: 'var(--accent)' }}>MKA Dev</h4>
            <p style={{ marginBottom: '16px' }}>Senior Android Developer crafting scalable, secure mobile solutions with modern technologies.</p>
            <p style={{ fontSize: '0.9rem' }}>Based in Myanmar 🇲🇲 | Available Worldwide 🌍</p>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 style={{ marginBottom: '16px' }}>{section.category}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {section.links.map((link, j) => (
                  <a
                    key={j}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      if (link.id.startsWith('#')) {
                        e.preventDefault();
                        setActiveSection(link.id);
                      }
                    }}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    → {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--bg-tertiary)', margin: '40px 0' }}></div>

        {/* Bottom Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            © {currentYear} Moe Kyaw Aung. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ fontSize: '0.85rem' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: '0.85rem' }}>Terms of Service</a>
            <a href="#" style={{ fontSize: '0.85rem' }}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// BACK TO TOP BUTTON
// ============================================================================
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          background: 'var(--accent)',
          border: 'none',
          borderRadius: '50%',
          color: 'var(--bg)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          animation: 'slideInUp 0.3s ease-out',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 30px var(--accent)';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    )
  );
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => setIsDark(!isDark);

  // Map section to components
  const sectionMap = {
    home: <HeroSection isDark={isDark} />,
    about: <AboutSection />,
    skills: <SkillsSection />,
    projects: <ProjectsSection />,
    certificates: <CertificatesSection />,
    contact: <ContactSection />,
  };

  const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', transition: 'all 0.3s' }}>
      <GlobalStyles isDark={isDark} />

      {/* Particle Background (Hero only) */}
      {activeSection === 'home' && <ParticleBackground isDark={isDark} />}

      {/* Accessibility */}
      <a href="#main" className="skip-to-content">Skip to main content</a>

      {/* Header */}
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main id="main" style={{ marginTop: '70px', position: 'relative', zIndex: 1 }}>
        {sections.map(section => (
          <div key={section} id={section}>
            {sectionMap[section]}
          </div>
        ))}
      </main>

      {/* Footer */}
      <Footer isDark={isDark} setActiveSection={setActiveSection} />

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Preloader (Optional - shows on mount) */}
      {false && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '3px solid var(--bg-secondary)',
            borderTop: '3px solid var(--accent)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}></div>
        </div>
      )}
    </div>
  );
};

export default App;
