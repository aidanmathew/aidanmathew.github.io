import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ProjectList } from '../dataHelpers/ProjectList'
import ProjectIcon from '../components/ProjectIcon'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
  const { slug } = useParams()

  const project = ProjectList.find((item) => item.slug === slug)
  const legacyProject = /^\d+$/.test(slug) ? ProjectList[Number(slug)] : null

  if (legacyProject) {
    return <Navigate to={`/projects/${legacyProject.slug}`} replace />
  }

  if (!project) {
    return (
      <main className="project">
        <h1>Project not found</h1>
        <Link className="project-back" to="/projects">
          Back to projects
        </Link>
      </main>
    )
  }

  const projectFacts = [
    ['Problem', project.problem],
    ['Architecture', project.architecture],
    ['Stack', project.skills],
    ['Impact', project.impact],
  ].filter(([, value]) => value)

  return (
    <main className="project">
      <Link className="project-back" to="/projects">
        &larr; All projects
      </Link>
      <ProjectIcon name={project.icon} size={64} />
      <span className="project-tag">{project.category}</span>
      <h1>{project.name}</h1>
      <p className="project-summary">{project.summary}</p>
      <dl className="project-facts">
        {projectFacts.map(([label, value]) => (
          <React.Fragment key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </React.Fragment>
        ))}
      </dl>
      <a
        className="project-visit"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View source <span className="sr-only">(opens in a new tab)</span>
      </a>
    </main>
  )
}

export default ProjectDisplay
