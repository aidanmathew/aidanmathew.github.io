import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
      <Link className="brand" to="/" aria-label="Aidan Mathew, home">
        <span className="brand-mark">AM</span>
        <span className="brand-name">Aidan Mathew</span>
      </Link>
      <div className="toggleButton">
        <button
          type="button"
          aria-label={
            expandNavbar ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={expandNavbar}
          aria-controls="primary-navigation"
          onClick={() => {
            setExpandNavbar((prev) => !prev)
          }}
        >
          <ReorderIcon />
        </button>
      </div>

      <div className="links" id="primary-navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/resume" className="pageLink">
          Resume
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
