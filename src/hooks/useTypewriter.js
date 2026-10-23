import { useEffect, useState } from 'react'

export function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)'
  const [reduced, setReduced] = useState(
    () => window.matchMedia && window.matchMedia(query).matches
  )

  useEffect(() => {
    if (!window.matchMedia) return undefined
    const mq = window.matchMedia(query)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

// `phrases` must be a stable reference (module constant or memoized).
export function useTypewriter(
  phrases,
  { typeMs = 65, deleteMs = 30, holdMs = 1500, enabled = true } = {}
) {
  const [state, setState] = useState({ index: 0, length: 0, deleting: false })

  useEffect(() => {
    if (!enabled) return undefined
    const { index, length, deleting } = state
    const full = phrases[index]
    let delay
    let next

    if (!deleting && length < full.length) {
      delay = typeMs
      next = { index, length: length + 1, deleting }
    } else if (!deleting) {
      delay = holdMs
      next = { index, length, deleting: true }
    } else if (length > 0) {
      delay = deleteMs
      next = { index, length: length - 1, deleting }
    } else {
      delay = 350
      next = { index: (index + 1) % phrases.length, length: 0, deleting: false }
    }

    const id = setTimeout(() => setState(next), delay)
    return () => clearTimeout(id)
  }, [state, phrases, enabled, typeMs, deleteMs, holdMs])

  return enabled ? phrases[state.index].slice(0, state.length) : phrases[0]
}
