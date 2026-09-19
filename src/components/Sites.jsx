import { sites } from '../data/sites'
import { Icon } from './Icon'

function SiteCard({ site }) {
  return (
    <article className="site-card">
      <div className="site-card-top">
        <span className="site-index">0{sites.indexOf(site) + 1}</span>
        <span className={`site-status site-status-${site.statusColor}`}>
          <i /> {site.status}
        </span>
      </div>
      <h3>{site.name}</h3>
      <p>{site.description}</p>
      <div className="site-role-list">
        {site.roles.map((role) => (
          <span key={role}>{role}</span>
        ))}
      </div>
      <a
        className="site-link"
        href={site.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${site.name}`}
      >
        Visit platform <Icon name="external" size={15} />
      </a>
    </article>
  )
}

export function Sites() {
  return (
    <section className="section container" id="sites">
      <div className="section-heading sites-heading">
        <div>
          <p className="eyebrow">Platforms I work on</p>
          <h2>
            Sites under my care<span className="accent">.</span>
          </h2>
        </div>
      </div>

      <div>
        <p>
          Teaching, monitoring, moderating, and building the infrastructure
          behind competitive programming practice.
        </p>

        <span>
          *Thank you so much to the teachers and students of:
        </span>
        <ul>
          <li>(Quang Ngai) Nguyen Tat Thanh High School for the Gifted</li>
          <li>(Ha Noi) Nguyen Thi Minh Khai High School</li>  
        </ul>
        <p>
          for trusting me with these platforms and allowing me to contribute to the community.
        </p>
      </div>

      <div className="site-grid">
        {sites.map((site) => (
          <SiteCard key={site.name} site={site} />
        ))}
      </div>
    </section>
  )
}
