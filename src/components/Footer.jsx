import { Icon } from './Icon'
import { connections } from '../data/connections'

export function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-meta">
        <span>
          © 2026 Tunaa. All rights reserved.
          <br />
          Made with React & coffee. Nevertheless, much 💖.
        </span>
      </div>
      <div>
        {connections
          .filter((connection) => ['GitHub', 'Email'].includes(connection.name))
          .map((connection) => (
            <a
              key={connection.name}
              href={connection.href}
              target={connection.external ? '_blank' : undefined}
              rel={connection.external ? 'noreferrer' : undefined}
            >
              <Icon name={connection.icon} size={16} /> {connection.name}
            </a>
          ))}
      </div>
    </footer>
  )
}