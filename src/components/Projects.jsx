import { projects } from '../data/projects'
import { Icon } from './Icon'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="card-top">
        <span className="repo-icon">
          <Icon name={project.icon} size={16} />
        </span>
        <div className="repo-links">
          {project.urls.map((url) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} repository`}
            >
              <Icon name="external" size={16} />
            </a>
          ))}
        </div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="repo-meta">
        <span>
          <i style={{ background: project.color }} /> {project.language}
        </span>
        <span>
          <Icon name="github" size={14} /> GitHub
        </span>
        <span>
          <Icon name="folder" size={14} /> {project.urls.length} {project.urls.length === 1 ? 'repo' : 'repos'}
        </span>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section className="section container" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>
            Things I've shipped<span className="accent">.</span>
          </h2>
        </div>
        <a
          className="text-link"
          href="https://github.com/PanyoPie"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub <Icon name="external" size={15} />
        </a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}