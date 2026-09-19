import { useState } from 'react'
import { Icon } from './Icon'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard?.writeText('hi@tunaa.io.vn')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="contact section container" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">
          Have a project in mind, or wanna do some collabs?
        </p>
        <h2>
          Let's make something
          <br />
          <span>worth clicking.</span>
        </h2>
        <p>
          I'm open to internships, collaborations, Valorant games or conversations about
          everything in the world.
        </p>
      </div>
      <div className="contact-actions">
        <a className="email-link" href="mailto:hi@tunaa.io.vn">
          <Icon name="mail" size={18} /> hi@tunaa.io.vn
        </a>
        <button className="copy-button" type="button" onClick={copyEmail}>
          <Icon name="copy" size={16} /> {copied ? 'Copied' : 'Copy email'}
        </button>
      </div>
    </section>
  )
}