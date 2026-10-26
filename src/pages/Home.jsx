import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'
import Aidan from '../media/aidanPFP.jpg'
import { Link } from 'react-router-dom'
import TypedLine from '../components/TypedLine'
import SqlTerminal from '../components/SqlTerminal'
import PipelineDiagram from '../components/PipelineDiagram'
import SkillsMatrix from '../components/SkillsMatrix'

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="hero-copy">
          <div className="hero-id">
            <img
              className="hero-portrait"
              src={Aidan}
              alt="Portrait of Aidan Mathew"
              width="140"
              height="140"
            />
            <p className="eyebrow">
              <span>Data engineering</span>
              <span>Azure / Databricks / Python / SQL</span>
            </p>
          </div>
          <h1>Aidan Mathew, Data Engineer</h1>
          <TypedLine />
          <p className="hero-intro">
            I build data pipelines and warehouse models using Azure, Databricks,
            Python, and SQL.
          </p>
          <div className="hero-actions">
            <Link className="action-link action-link-primary" to="/projects">
              Explore projects <span aria-hidden="true">↗</span>
            </Link>
            <Link className="action-link" to="/experience">
              View experience <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="social-links" aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/aidan-mathew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:mathea40@mcmaster.ca" aria-label="Email">
              <EmailIcon />
            </a>
            <a
              href="https://github.com/aidanmathew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
        <SqlTerminal />
      </section>

      <section className="home-section" aria-labelledby="pipeline-title">
        <p className="section-marker">01 / Pipeline</p>
        <h2 id="pipeline-title">
          How data moves, and what I use at each stage.
        </h2>
        <PipelineDiagram />
      </section>

      <section className="home-section" aria-labelledby="skills-title">
        <p className="section-marker">02 / Skills</p>
        <h2 id="skills-title">Skills and tools.</h2>
        <SkillsMatrix />
      </section>

      <section className="home-section" aria-labelledby="about-title">
        <p className="section-marker">03 / About</p>
        <h2 id="about-title">A little about me.</h2>
        <div className="about-copy">
          <p>
            I&apos;m a Computer Engineering and Management graduate from
            McMaster University. During my degree, I completed 16 months of
            co-op across four industries. I joined Manulife&apos;s new graduate
            program in 2025, completed a rotation in platform reliability
            engineering, and now work as an Associate Data Engineer on the
            Manulife Bank data team, building data pipelines and warehouse
            models with Azure, Databricks, Python, and SQL.
          </p>
          <p>
            I started this site after my first co-op to practice web development
            and keep track of my projects and work experience. It&apos;s built
            with React and React Router and deployed with GitHub Pages.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home
