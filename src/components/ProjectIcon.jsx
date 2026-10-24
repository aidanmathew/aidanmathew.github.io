import React from 'react'
import PropTypes from 'prop-types'
import {
  FaBrain,
  FaChartLine,
  FaCube,
  FaGlobe,
  FaHandsHelping,
  FaHeartbeat,
  FaRecycle,
  FaSatelliteDish,
} from 'react-icons/fa'

const ICONS = {
  brain: FaBrain,
  chart: FaChartLine,
  cube: FaCube,
  globe: FaGlobe,
  heartbeat: FaHeartbeat,
  recycle: FaRecycle,
  satellite: FaSatelliteDish,
  support: FaHandsHelping,
}

function ProjectIcon({ name, size = 56 }) {
  const Icon = ICONS[name]

  if (!Icon) return null

  return (
    <span className="project-icon" aria-hidden="true">
      <Icon size={size} focusable="false" />
    </span>
  )
}

ProjectIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
}

export default ProjectIcon
