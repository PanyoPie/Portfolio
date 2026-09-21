import { useEffect, useState } from 'react'
import { Icon } from './Icon'
import { handleSectionLinkClick } from './SectionLink'

export function Header() {
  const [isLinksFloating, setIsLinksFloating] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setIsLinksFloating(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['about', 'work', 'sites', 'contact']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-18% 0px -58% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={(event) => handleSectionLinkClick(event, 'home')} aria-label="Tunaa home">
        <span>
          tunaa<span className="brand-dot">.</span>io<span className="brand-dot">.</span>vn
        </span>
      </a>
      <div className={`nav-links${isLinksFloating ? ' nav-links-floating' : ''}`}>
        <a className={activeSection === 'about' ? 'active' : ''} href="#about" onClick={(event) => handleSectionLinkClick(event, 'about')} aria-current={activeSection === 'about' ? 'page' : undefined}>
          About
        </a>
        <a className={activeSection === 'work' ? 'active' : ''} href="#work" onClick={(event) => handleSectionLinkClick(event, 'work')} aria-current={activeSection === 'work' ? 'page' : undefined}>
          Work
        </a>
        <a className={activeSection === 'sites' ? 'active' : ''} href="#sites" onClick={(event) => handleSectionLinkClick(event, 'sites')} aria-current={activeSection === 'sites' ? 'page' : undefined}>
          Sites
        </a>
        <a className={activeSection === 'contact' ? 'active' : ''} href="#contact" onClick={(event) => handleSectionLinkClick(event, 'contact')} aria-current={activeSection === 'contact' ? 'page' : undefined}>
          Contact
        </a>
        <a
          className="nav-status"
          href="https://status.tunaa.io.vn"
          target="_blank"
          rel="noreferrer"
        >
          Status <Icon name="external" size={14} />
        </a>
      </div>
      <a
        className="nav-status mobile-nav-status"
        href="https://status.tunaa.io.vn"
        target="_blank"
        rel="noreferrer"
      >
        Status <Icon name="external" size={14} />
      </a>
    </nav>
  )
}
