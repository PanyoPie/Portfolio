import { useState } from 'react'
import { Icon } from './Icon'
import { handleSectionLinkClick } from './SectionLink'
import { connections } from '../data/connections'

const agentPortraits = [
  'Astra',
  'Breach',
  'Brimstone',
  'Chamber',
  'Clove',
  'Cypher',
  'Deadlock',
  'Fade',
  'Gekko',
  'Harbor',
  'Hush',
  'Iso',
  'Jett',
  'KAYO',
  'Killjoy',
  'Miks',
  'Neon',
  'Omen',
  'Phoenix',
  'Raze',
  'Reyna',
  'Sage',
  'Skye',
  'Sova',
  'Tejo',
  'Veto',
  'Viper',
  'Vyse',
  'Waylay',
  'Yoru',
]

export function Hero() {
  // const [agent] = useState(() => agentPortraits[Math.floor(Math.random() * agentPortraits.length)])
  let agent = "Hush"
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleAgentMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientY - bounds.top) / bounds.height - 0.5
    const y = (event.clientX - bounds.left) / bounds.width - 0.5

    setTilt({
      x: x * -20,
      y: y * 20,
    })
  }

  return (
    <section className="hero container" id="about">
      <div className="hero-copy">
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
      <div
        className="hero-agent"
        aria-label={`VALORANT agent: ${agent}`}
        onMouseMove={handleAgentMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <img src={`/agent-portraits/${agent}Portrait.webp`} alt={`${agent} from VALORANT`} />
        <span className="hero-agent-name">{agent}</span>
      </div>
    </section>
  )
}