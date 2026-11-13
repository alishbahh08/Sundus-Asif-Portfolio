import Foundation from './Foundation.jsx';
import { Impact, CareerRoute, expertiseIcons } from './Visuals.jsx';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, Menu, X, Linkedin, Mail, MapPin, MoveUpRight, ChevronRight, BriefcaseBusiness, Globe2, ArrowRight } from 'lucide-react';

// EDIT THIS OBJECT to add verified personal contact details and an optional photo.
// The LinkedIn URL comes from the embedded hyperlink in the source CV.
const PROFILE = {
  name: 'Sundus Asif',
  location: 'Islamabad, Pakistan',
  email: 'sundus.asif@tmuc.edu.pk',
  linkedinUrl: 'https://www.linkedin.com/in/sundus-asif-56617470/',
  photoUrl: './sundus-asif.png',
};

const positions = [
  {
    id: 'tmuc', span: '2025 — Present', role: 'Head of DHROD', company: 'TMUC Pakistan', location: 'Islamabad, Pakistan', label: 'CURRENT ROLE',
    intro: 'Directing HR governance, organizational development and workforce strategy across a multi-campus institution.',
    points: [
      'Provide strategic HR governance and advisory support across 8 transnational campuses in 7 cities.',
      'Lead nationwide workforce planning, succession planning, employee relations and policy compliance.',
      'Directed employee data migration to ERP and defined requirements for analytics, attendance, payroll and performance modules.',
    ],
  },
  {
    id: 'cube-head', span: '2023 — 2025', role: 'Head of People & Business Operations', company: 'Cube Healthcare Systems', location: 'Abbottabad, Pakistan · Hybrid', label: 'EXECUTIVE LEADERSHIP',
    intro: 'Connected people strategy to business outcomes through transformation, performance systems and leadership development.',
    points: [
      'Led strategic talent acquisition for Pakistan and US offices, with initiatives reported to save 30% in recruitment costs.',
      'Introduced KPI-led performance management, HR automation and employee self-service workflows.',
      'Built and delivered more than 25 development programs and advanced DEIB, succession planning and engagement.',
    ],
  },
  {
    id: 'medc', span: 'Apr — Jun 2023', role: 'Short-Term Talent Consultant', company: 'Michigan Economic Development Corporation', location: 'Lansing, Michigan, USA', label: 'GLOBAL PERSPECTIVE',
    intro: 'Designed recommendations to strengthen Michigan’s international talent attraction ecosystem.',
    points: [
      'Developed a strategic talent attraction and placement model for international professionals.',
      'Used data analysis to propose public–private partnership approaches connecting businesses with talent.',
    ],
  },
  {
    id: 'techsmith', span: 'Mar — May 2023', role: 'HR Fellow', company: 'TechSmith Corporation', location: 'East Lansing, Michigan, USA', label: 'GLOBAL PERSPECTIVE',
    intro: 'Collaborated with a US-based HR team on recruitment and mentorship initiatives.',
    points: [
      'Supported HR projects and gained exposure to US state and federal employment law.',
      'Volunteered in organizing a Data Science Summit at TechSmith.',
    ],
  },
  {
    id: 'cube-manager', span: '2017 — 2022', role: 'Manager HR', company: 'Cube Healthcare Systems', location: 'Abbottabad, Pakistan', label: 'BUILDING FOUNDATIONS',
    intro: 'Built core HR structures, policies and talent systems to support organizational growth.',
    points: [
      'Developed company HR policies, processes, organizational structures and performance review frameworks.',
      'Managed talent acquisition and succession planning for teams in Pakistan and the US.',
      'Advanced HRIS workflows, employee engagement, compensation planning and employer branding.',
    ],
  },
  {
    id: 'bahria', span: '2015 — 2017', role: 'HR Officer — Recruitment', company: 'Bahria Town', location: 'Rawalpindi, Pakistan', label: 'TALENT ACQUISITION',
    intro: 'Managed large-scale recruitment and international placements across diverse sectors.',
    points: [
      'Managed end-to-end recruitment supporting a workforce of more than 11,000 across multiple projects.',
      'Handled international senior-level placements across education, healthcare, hospitality and technical fields.',
    ],
  },
  {
    id: 'careerpak', span: '2014 — 2015', role: 'Recruitment & Operations Executive', company: 'Career Pakistan', location: 'Islamabad, Pakistan', label: 'EARLY CAREER',
    intro: 'Supported executive search, recruitment operations and people development for multinational clients.',
    points: [
      'Headhunted talent for clients across telecom, consumer goods and other sectors.',
      'Created job descriptions, supported payroll and delivered internal staff training.',
    ],
  },
];

const expertise = [
  { num:'01', name: 'People Strategy', detail: 'Aligning talent priorities with organizational ambition.' },
  { num:'02', name: 'Organizational Development', detail: 'Building systems, structures and a culture that scales.' },
  { num:'03', name: 'Transformation & Change', detail: 'Turning complex transitions into sustainable progress.' },
  { num:'04', name: 'Talent & Succession', detail: 'Developing leaders and building resilient talent pipelines.' },
  { num:'05', name: 'HR Technology & Analytics', detail: 'Using data and automation to strengthen decisions.' },
  { num:'06', name: 'Culture & Inclusion', detail: 'Creating workplaces where people can do their best work.' },
];

function useReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll('[data-reveal]')];
    if (!('IntersectionObserver' in window)) { els.forEach(el=>el.classList.add('in-view')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); observer.unobserve(e.target); }
    }), { threshold: .09, rootMargin: '0px 0px -35px 0px' });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Kicker({ children, light = false }) { return <div className={`kicker ${light?'kicker-light':''}`}><span className="kicker-line" />{children}</div>; }

function Navbar() {
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn);
  },[]);
  const links = [['Impact','#impact'],['About','#about'],['Experience','#experience'],['Expertise','#expertise'],['Recognition','#recognition']];
  return <header onKeyDown={event => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      menuRef.current.focus();
    }
  }} className={`navbar ${scrolled?'nav-scrolled':''}`}>
    <a className="brand" href="#home" onClick={()=>setOpen(false)} aria-label="Sundus Asif homepage"><span className="brand-mark">S<span className="brand-gold">.</span>A</span><span className="brand-divider" /><span className="brand-word">SUNDUS ASIF<small>PEOPLE & BUSINESS LEADER</small></span></a>
    <nav id="primary-navigation" className={`nav-links ${open?'nav-open':''}`} aria-label="Primary navigation">
      {links.map(([label,href])=><a href={href} key={href} onClick={()=>setOpen(false)}>{label}</a>)}
      <a className="nav-mobile-contact" href="#connect" onClick={()=>setOpen(false)}>Let's connect <ArrowUpRight size={16}/></a>
    </nav>
    <a className="nav-cta" href="#connect">Let's connect <ArrowUpRight size={15}/></a>
    <button ref={menuRef} aria-controls="primary-navigation" className="menu-button" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>{open?<X size={23}/>:<Menu size={23}/>}</button>
  </header>;
}

function tilt(event) {
  if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return;
  const frame = event.currentTarget;
  const bounds = frame.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - .5;
  const y = (event.clientY - bounds.top) / bounds.height - .5;
  frame.style.setProperty('--tilt-x', `${y * -24}deg`);
  frame.style.setProperty('--tilt-y', `${x * 24}deg`);
}

function resetTilt(event) {
  event.currentTarget.style.removeProperty('--tilt-x');
  event.currentTarget.style.removeProperty('--tilt-y');
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-grain" />
    <div className="hero-layout container">
      <div className="hero-copy">
        <div className="hero-eyebrow"><span className="live-dot" /> EXECUTIVE PORTFOLIO <span className="eyebrow-split">/</span> PEOPLE & OPERATIONS</div>
        <h1>Sundus <em>Asif.</em></h1>
        <div className="hero-intro">People strategy. Organizational change.</div>
        <p className="hero-description">I build talent systems, lead HR transformation, and help organizations across Pakistan and the United States connect their people priorities to business goals.</p>
        <div className="hero-actions">
          <a className="button-gold" href="#experience">Explore experience <ArrowUpRight size={17}/></a>
          <a className="text-link light" href="#about">My approach <ArrowRight size={17}/></a>
        </div>
        <div className="hero-bottom"><MapPin size={14}/><span>ISLAMABAD, PAKISTAN</span><span className="hero-dot-separator">✦</span><span>PAKISTAN & UNITED STATES</span></div>
      </div>
      <div className="portrait-frame" onPointerMove={tilt} onPointerLeave={resetTilt}>
        <div className="portrait-stage">
          <div className="portrait-halo" aria-hidden="true"/>
          <span className="portrait-index" aria-hidden="true">01 / PROFILE</span>
          <img className="sundus-portrait" src={PROFILE.photoUrl} alt="Sundus Asif" width="687" height="637" fetchPriority="high" />
          <div className="portrait-label"><span>CURRENT ROLE</span><strong>Head of DHROD</strong><small>TMUC Pakistan</small></div>
          <div className="portrait-stamp" aria-hidden="true">✳</div>
        </div>
      </div>
    </div>
    <a className="scroll-hint" href="#about"><ArrowDown size={16}/><span>SCROLL TO EXPLORE</span></a>
    <div className="hero-index">01 / PROFILE</div>
  </section>;
}

function About(){return <section className="section about-section" id="about"><div className="container about-grid">
  <div className="about-left" data-reveal><Kicker>01 / THE PHILOSOPHY</Kicker><h2>Great organizations <span className="serif-italic">begin with people.</span></h2><div className="about-signature">Purpose <span>×</span> People <span>×</span> Progress</div></div>
  <div className="about-right" data-reveal><div className="quote-mark">“</div><p className="about-lead">I believe extraordinary business outcomes are built on the strength of people, culture, and thoughtful leadership.</p><p>With more than 12 years of experience across Pakistan and the United States, I bring together strategic HR leadership, organizational development, talent management and business operations to help institutions grow with intention.</p><p>From developing scalable people systems to driving digital transformation and coaching future leaders, my work has one central focus: creating environments where people and organizations thrive together.</p><a href="#expertise" className="text-link dark">What I bring to the table <MoveUpRight size={17}/></a></div>
</div></section>}

function Experience(){const [selected,setSelected]=useState(positions[0].id);const active=positions.find(p=>p.id===selected);
  function navigateTabs(event, index) {
    const offset = {ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1}[event.key];
    if (offset === undefined && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? positions.length - 1 : (index + offset + positions.length) % positions.length;
    setSelected(positions[next].id);
    document.getElementById(`role-${positions[next].id}`).focus();
  }
  return <section className="section experience-section" id="experience"><div className="container">
  <div className="section-head" data-reveal><div><Kicker>02 / THE JOURNEY</Kicker><h2>A career shaped by <em>transformation.</em></h2></div><p>From building the foundations of HR to leading people and business strategy at scale.</p></div>
  <div className="experience-grid" data-reveal><div className="experience-list" role="tablist" aria-label="Professional experience">{positions.map((p,i)=><button key={p.id} id={`role-${p.id}`} role="tab" tabIndex={selected===p.id?0:-1} onKeyDown={event=>navigateTabs(event,i)} aria-selected={selected===p.id} aria-controls="experience-detail" onClick={()=>setSelected(p.id)} className={`experience-tab ${selected===p.id?'is-active':''}`}><div><span className="exp-date">{p.span}</span><strong>{p.role}</strong><span className="exp-company">{p.company}</span></div><ChevronRight size={19}/></button>)}</div>
    <div className="experience-card" id="experience-detail" role="tabpanel" aria-labelledby={`role-${active.id}`} tabIndex={0} key={active.id}><div className="exp-card-top"><span className="pill-tag">{active.label}</span><span className="exp-card-n">{String(positions.indexOf(active)+1).padStart(2,'0')} / {String(positions.length).padStart(2,'0')}</span></div><h3>{active.role}</h3><div className="exp-workplace">{active.company}</div><div className="exp-location"><MapPin size={14}/>{active.location}</div><p className="exp-intro">{active.intro}</p><div className="exp-rule"/><span className="detail-heading">SELECTED CONTRIBUTIONS</span><ul>{active.points.map((pt,i)=><li key={i}><span className="li-star">✧</span>{pt}</li>)}</ul><div className="exp-card-bottom"><BriefcaseBusiness size={18}/><span>LEADERSHIP IN ACTION</span></div></div>
  </div>
</div></section>}

function Expertise(){return <section className="section expertise-section" id="expertise"><div className="container"><div className="section-head light-head" data-reveal><div><Kicker light>03 / THE EXPERTISE</Kicker><h2>Where vision meets <em>execution.</em></h2></div><p>Six interconnected disciplines. One human-centered approach to meaningful change.</p></div><div className="expertise-grid">{expertise.map((item, index)=>{const Icon = expertiseIcons[index];return <article className="expertise-card" key={item.num} data-reveal onPointerMove={tilt} onPointerLeave={resetTilt}><div className="expertise-top"><span>{item.num}</span><Icon className="expertise-symbol" aria-hidden="true" size={29} strokeWidth={1.35}/></div><h3>{item.name}</h3><p>{item.detail}</p></article>})}</div></div><div className="expertise-marquee" aria-hidden="true"><div>PEOPLE • PURPOSE • PROGRESS • PEOPLE • PURPOSE • PROGRESS • PEOPLE • PURPOSE • PROGRESS •&nbsp;</div></div></section>}

function Recognition(){return <section className="section recognition-section" id="recognition"><div className="container recognition-grid">
  <div data-reveal><Kicker>04 / GLOBAL PERSPECTIVE</Kicker><h2>Local understanding.<br/><em>Global outlook.</em></h2><p className="recognition-copy">The Hubert H. Humphrey Fellowship, part of the Fulbright exchange program, expanded my perspective through learning, collaboration and professional experience in the United States.</p><div className="recognition-location"><Globe2 size={18}/><span>PAKISTAN <span className="gold-arrow">↗</span> UNITED STATES</span></div></div>
  <CareerRoute />
</div></section>}

function Contact() {
  const address = useRef(null);
  const [copyStatus, setCopyStatus] = useState('');
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopyStatus('Email address copied.');
    } catch {
      address.current.focus();
      address.current.select();
      setCopyStatus('Email address selected. Copy it from the field.');
    }
  }

  return <footer className="contact-section" id="connect">
    <div className="container">
      <div className="footer-top" data-reveal><Kicker light>06 / CONTACT</Kicker><span className="footer-asterisk" aria-hidden="true">✳</span></div>
      <div className="footer-main" data-reveal>
        <h2>Let’s <em>connect.</em></h2>
        <p>For conversations about people strategy, organizational change, and leadership development.</p>
        <div className="contact-actions">
          {PROFILE.linkedinUrl && <a className="button-gold" href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <Linkedin size={17}/></a>}
          {PROFILE.email && <a className="button-outline" href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">Email via Gmail <Mail size={17}/></a>}
        </div>
        {PROFILE.email && <div className="contact-email">
          <input ref={address} aria-label="Sundus’s email address" value={PROFILE.email} readOnly type="text" />
          <button className="button-outline" type="button" onClick={copyEmail}>Copy email</button>
          <span className="contact-email-status" role="status">{copyStatus}</span>
        </div>}
      </div>
      <div className="footer-bottom">
        <a className="footer-brand" href="#home">SUNDUS <span>ASIF.</span></a><span>{PROFILE.location.toUpperCase()}</span>
        <a href="#home">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} SUNDUS ASIF</span>
      </div>
    </div>
  </footer>;
}

export default function App(){const [progress,setProgress]=useState(0);useReveal();useEffect(()=>{const onScroll=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max?window.scrollY/max*100:0);};onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);return <><a className="skip-link" href="#main-content">Skip to content</a><div aria-hidden="true" className="progress-bar" style={{width:`${progress}%`}}/><Navbar/><main id="main-content"><Hero/><Impact/><About/><Experience/><Expertise/><Recognition/><Foundation/></main><Contact/></>}
