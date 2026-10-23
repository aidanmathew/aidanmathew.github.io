import React, { useState } from 'react'
import '../styles/Projects.css'
import { ProjectList } from '../dataHelpers/ProjectList'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const categories = [
    'All',
    ...new Set(ProjectList.map((project) => project.category)),
  ]
  const normalizedSearch = search.trim().toLowerCase()
  const visibleProjects = ProjectList.filter((project) => {
    const matchesCategory = category === 'All' || project.category === category
    const searchableText = [
      project.name,
      project.summary,
      project.category,
      project.skills,
    ]
      .join(' ')
      .toLowerCase()

    return matchesCategory && searchableText.includes(normalizedSearch)
  })

  return (
    <main className="projects">
      <header className="projects-heading">
        <p className="section-marker">Projects</p>
        <h1>Selected projects</h1>
        <p>
          A mix of data, software, embedded, machine-learning, and design
          projects.
        </p>
      </header>
      <section className="project-controls" aria-label="Filter projects">
        <label className="project-search-label" htmlFor="project-search">
          Search projects
        </label>
        <input
          id="project-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Name, summary, category, or stack"
        />
        <div
          className="project-filters"
          role="group"
          aria-label="Filter by category"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className="project-filter"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="project-count" aria-live="polite">
          {visibleProjects.length}{' '}
          {visibleProjects.length === 1 ? 'project' : 'projects'}
        </p>
      </section>
      <div className="projectList">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {visibleProjects.length === 0 && (
        <div className="project-empty" role="status">
          <h2>No projects found</h2>
          <p>Try another search or category.</p>
          <button
            type="button"
            className="project-reset"
            onClick={() => {
              setSearch('')
              setCategory('All')
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  )
}

export default Projects
