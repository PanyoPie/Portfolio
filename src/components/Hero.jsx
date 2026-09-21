import { Icon } from './Icon'
import { handleSectionLinkClick } from './SectionLink'
import { connections } from '../data/connections'

export function Hero() {
  return (
    <section className="hero container" id="about">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> (Always) Available for a epic game of Valorant
        </p>
        <h1>
          Hi, I'm
          <br />
          <span>Tunaa Nguyen.</span>
        </h1>
        <p className="hero-intro">
          I'm <b>Nguyễn Đức Tuân</b>, but people love calling me <b>Tunaa</b>, a developer and third-year student turning curious ideas
          into useful, well-crafted software.
        </p>
        <div className="connection-links" aria-label="Connect with Tunaa">
          {connections.map((connection) => (
            <a
              key={connection.name}
              href={connection.href}
              target={connection.external ? '_blank' : undefined}
              rel={connection.external ? 'noreferrer' : undefined}
              aria-label={connection.name}
            >
              <Icon name={connection.icon} size={35} />
            </a>
          ))}
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#work" onClick={(event) => handleSectionLinkClick(event, 'work')}>
            See my work <Icon name="arrow" size={16} />
          </a>
          <a className="text-link" href="#contact" onClick={(event) => handleSectionLinkClick(event, 'contact')}>
            Get in touch <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>
      <div className="hero-terminal" aria-label="A terminal-style introduction">
        <div className="terminal-top">
          <span className="terminal-dots">
            <i />
            <i />
            <i />
          </span>
          <span>tunaa@portfolio: ~</span>
          <span className="terminal-lock">
            <Icon name="lock" size={13} />
          </span>
        </div>
        <div className="terminal-body">
          <p>
            <span className="prompt">$</span> whoami
          </p>
          <p className="terminal-output">tunaa - developer / student</p>
          <p>
            <span className="prompt">$</span> currently
          </p>
          <p className="terminal-output">
            learning something...
            <br />
            (probably Fade's lineups)
          </p>
          <p>
            <span className="prompt">$</span> help<span className="cursor">_</span>
          </p>
          <div className="terminal-rule" />
          <p className="terminal-comment">// make it work. make it clear.</p>
        </div>
      </div>
    </section>
  )
}