import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProjectIcon from './ProjectIcon'

function ProjectCard({ project }) {
  const stackLabels = project.skills
    .split(',')
    .map((skill) => skill.trim())
    .filter(Boolean)
    .slice(0, 4)

  return (
    <article className="project-card">
      <Link className="project-card-main" to={`/projects/${project.slug}`}>
        <ProjectIcon name={project.icon} />
        <div className="project-card-body">
          <span className="project-tag">{project.category}</span>
          <h2>{project.name}</h2>
          <p className="project-summary">{project.summary}</p>
          <ul className="project-stack" aria-label={`${project.name} stack`}>
            {stackLabels.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </Link>
      <div className="project-card-footer">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Source{' '}
          <span className="sr-only">
            for {project.name} (opens in a new tab)
          </span>
        </a>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectCard
