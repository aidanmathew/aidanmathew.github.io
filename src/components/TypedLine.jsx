import React from 'react'
import { usePrefersReducedMotion, useTypewriter } from '../hooks/useTypewriter'

const PHRASES = [
  'builds data pipelines.',
  'writes SQL models.',
  'works with Azure and Databricks.',
  'checks data quality.',
]

function TypedLine() {
  const reduced = usePrefersReducedMotion()
  const text = useTypewriter(PHRASES, { enabled: !reduced })

  return (
    <p className="typed-line">
      <span className="sr-only">Aidan {PHRASES.join(' ')}</span>
      <span aria-hidden="true">
        <span className="typed-lead">Aidan </span>
        {text}
        {!reduced && <span className="typed-cursor">|</span>}
      </span>
    </p>
  )
}

export default TypedLine
