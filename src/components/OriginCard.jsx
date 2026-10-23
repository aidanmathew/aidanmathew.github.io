import React, { useState } from 'react'

const PROFILE = [
  ['Interests', 'Basketball, soccer, chess, and reading'],
  ['Currently learning', 'Azure and Databricks'],
]

function OriginCard() {
  const [open, setOpen] = useState(false)

  return (
    <div className="origin-card">
      <h3 className="vertical-timeline-element-title">Before high school</h3>
      <p className="experience-text">
        I spent time playing basketball and soccer, and reading and playing
        chess.
      </p>
      <button
        type="button"
        className="project-toggle"
        aria-expanded={open}
        aria-controls="origin-profile"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{open ? 'Show less' : 'Show more'}</span>
        <span aria-hidden="true">{open ? '-' : '+'}</span>
      </button>
      <div id="origin-profile" hidden={!open}>
        <table className="origin-table">
          <caption className="sr-only">Personal profile</caption>
          <tbody>
            {PROFILE.map(([key, value]) => (
              <tr key={key}>
                <th scope="row">{key}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OriginCard
