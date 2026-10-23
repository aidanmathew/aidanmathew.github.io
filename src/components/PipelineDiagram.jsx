import React, { useState } from 'react'
import { PipelineStages } from '../dataHelpers/Pipeline'

function PipelineDiagram() {
  const [activeId, setActiveId] = useState(PipelineStages[0].id)
  const active = PipelineStages.find((s) => s.id === activeId)

  return (
    <div className="pipeline">
      <ol className="pipeline-track">
        {PipelineStages.map((stage, i) => (
          <li key={stage.id} className="pipeline-step">
            <button
              type="button"
              className="pipeline-node"
              aria-pressed={stage.id === activeId}
              aria-controls="pipeline-detail"
              onClick={() => setActiveId(stage.id)}
              onMouseEnter={() => setActiveId(stage.id)}
            >
              <span className="pipeline-index">0{i + 1}</span>
              <span className="pipeline-label">{stage.label}</span>
            </button>
            {i < PipelineStages.length - 1 && (
              <span className="pipeline-link" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
      <div id="pipeline-detail" className="pipeline-detail" aria-live="polite">
        <h3>{active.label}</h3>
        <p>{active.summary}</p>
        <ul className="tool-list">
          {active.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PipelineDiagram
