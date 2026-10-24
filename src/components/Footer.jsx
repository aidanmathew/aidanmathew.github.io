import React from 'react'
import { Link } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <p>
        My work includes data engineering, software, embedded systems, and
        design projects.
      </p>
      <div className="socialMedia">
        <Link
          href="https://www.linkedin.com/in/Aidan-Mathew/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </Link>

        <Link
          href="https://github.com/aidanmathew"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </Link>
        <Link
          href="https://www.instagram.com/aidan.math3w/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </Link>

        <Link href="mailto:mathea40@mcmaster.ca" aria-label="Email">
          <EmailIcon />
        </Link>
      </div>
      <p> &copy; {new Date().getFullYear()} Aidan Mathew.</p>
    </div>
  )
}

export default Footer
