import React, { useState } from 'react'
import {
  AdditionalSkills,
  PipelineStages,
  SkillCategories,
  Skills,
} from '../dataHelpers/Pipeline'

function SkillsMatrix() {
  const [category, setCategory] = useState('All')
  const skillGroups = [
    ...PipelineStages,
    ...['Programming', 'Tools', 'Looking to Learn'].map((label) => ({
      id: label.toLowerCase().replaceAll(' ', '-'),
      label,
      additional: true,
    })),
  ]

  return (
    <div className="skills">
      <div
        className="chips"
        role="group"
        aria-label="Filter skills by category"
      >
        {SkillCategories.map((c) => (
          <button
            key={c}
            type="button"
            className="chip"
            aria-pressed={c === category}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="skills-grid">
        {skillGroups.map((stage) => {
          const groupSkills = stage.additional
            ? AdditionalSkills.filter((skill) => skill.group === stage.label)
            : Skills.filter((skill) => skill.stage === stage.id)
          const items = groupSkills.filter(
            (skill) => category === 'All' || skill.category === category
          )
          if (items.length === 0) return null

          return (
            <section
              key={stage.id}
              className="skills-stage"
              aria-labelledby={`skills-${stage.id}`}
            >
              <h3 id={`skills-${stage.id}`}>{stage.label}</h3>
              <ul>
                {items.map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsMatrix
