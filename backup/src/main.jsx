import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    title: 'StudyStack',
    description: 'A focused study workspace that turns messy notes into a clear weekly rhythm.',
    tags: ['React', 'Node.js', 'Postgres'],
    language: 'JavaScript',
    color: '#f1c75b',
    stars: '18',
    forks: '4',
  },
  {
    title: 'Pulse API',
    description: 'A lightweight status API for small teams that need signal without the noise.',
    tags: ['TypeScript', 'Express', 'Docker'],
    language: 'TypeScript',
    color: '#4ea1ff',
    stars: '12',
    forks: '2',
  },
  {
    title: 'Campus Cart',
    description: 'A simple marketplace for students to trade essentials within their campus.',
    tags: ['Next.js', 'Prisma', 'Tailwind'],
    language: 'TypeScript',
    color: '#55d6a1',
    stars: '9',
    forks: '1',
  },
]

function Icon({ name, size = 18 }) {
  const paths = {
    arrow: <><path d="M5 12h13" /><path d="m12 5 7 7-7 7" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.8.5 3.8.5A5 5 0 0 0 3.7 4 5.4 5.4 0 0 0 2.3 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 17c-4.5 2-5-2-7-2" /></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    external: <><path d="M15 3h6v6" /><path d="m10 14 11-11" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    heart: <path d="M20.8 8.6c0 5.4-8.8 10.2-8.8 10.2S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" />,
    copy: <><rect width="13" height="13" x="9" y="9" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
  }
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function App() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard?.writeText('hello@mah.dev')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="site-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Mah home"><span className="brand-mark">M</span><span>mah<span className="brand-dot">.</span>dev</span></a>
        <div className="nav-links">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let's talk <Icon name="arrow" size={15} /></a>
      </nav>

      <main id="top">
        <section className="hero container" id="about">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for a good challenge</p>
            <h1>Building thoughtful<br /><span>digital things.</span></h1>
            <p className="hero-intro">I’m Mah, a developer and third-year student turning curious ideas into useful, well-crafted software.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">See my work <Icon name="arrow" size={16} /></a><a className="text-link" href="#contact">Get in touch <Icon name="arrow" size={15} /></a></div>
          </div>
          <div className="hero-terminal" aria-label="A terminal-style introduction">
            <div className="terminal-top"><span className="terminal-dots"><i /><i /><i /></span><span>mah@portfolio: ~</span><span className="terminal-lock">⌁</span></div>
            <div className="terminal-body"><p><span className="prompt">$</span> whoami</p><p className="terminal-output">mah - developer / student</p><p><span className="prompt">$</span> currently</p><p className="terminal-output">learning in public<span className="cursor">_</span></p><div className="terminal-rule" /><p className="terminal-comment">// make it work. make it clear.</p></div>
          </div>
        </section>

        <section className="signal-bar container" aria-label="Current status">
          <div className="signal-main"><span className="pulse-ring"><span /></span><div><strong>Online & building</strong><span>Usually replies within a day</span></div></div>
          <div className="signal-meta"><span>Based in <b>India</b></span><span>Local time <b>09:42 AM</b></span></div>
        </section>

        <section className="section container" id="work">
          <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Things I’ve shipped<span className="accent">.</span></h2></div><a className="text-link" href="https://github.com" target="_blank" rel="noreferrer">View GitHub <Icon name="external" size={15} /></a></div>
          <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="card-top"><span className="repo-icon">{index === 0 ? '⌘' : index === 1 ? '◒' : '✦'}</span><a href="https://github.com" target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><Icon name="external" size={16} /></a></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="repo-meta"><span><i style={{ background: project.color }} /> {project.language}</span><span><Icon name="github" size={14} /> {project.stars}</span><span>⑂ {project.forks}</span></div></article>)}</div>
        </section>

        <section className="support-band container"><div><p className="eyebrow">A little support goes a long way</p><h2>Like what I’m building?</h2><p>Independent projects run on curiosity, caffeine, and kind people.</p></div><a className="button button-accent" href="#contact"><Icon name="heart" size={17} /> Buy me a coffee</a></section>

        <section className="contact section container" id="contact"><div className="contact-copy"><p className="eyebrow">Have a project in mind?</p><h2>Let’s make something<br /><span>worth clicking.</span></h2><p>I’m open to internships, collaborations, and conversations about building for the web.</p></div><div className="contact-actions"><a className="email-link" href="mailto:hello@mah.dev"><Icon name="mail" size={18} /> hello@mah.dev</a><button className="copy-button" type="button" onClick={copyEmail}><Icon name="copy" size={16} /> {copied ? 'Copied' : 'Copy email'}</button></div></section>
      </main>

      <footer className="footer container"><span>© 2026 Tunaa. Made with React & too much coffee.</span><div><a href="https://github.com" target="_blank" rel="noreferrer"><Icon name="github" size={16} /> GitHub</a><a href="mailto:hello@mah.dev"><Icon name="mail" size={16} /> Email</a></div></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)