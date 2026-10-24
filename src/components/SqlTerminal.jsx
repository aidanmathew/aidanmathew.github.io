import React, { useCallback, useEffect, useState } from 'react'

const AUTO_RUN_MS = 10000

const QUERY = `SELECT name, role, stack
FROM engineers
WHERE name = 'Aidan Mathew';`

const ROWS = [
  ['name', 'Aidan Mathew'],
  ['role', 'Associate Data Engineer'],
  ['stack', 'Azure, Synapse, Databricks, Power BI, Postman'],
]

function SqlTerminal() {
  const [status, setStatus] = useState('idle')

  const run = useCallback(() => setStatus('running'), [])

  useEffect(() => {
    if (status !== 'idle') return undefined
    const id = setTimeout(run, AUTO_RUN_MS)
    return () => clearTimeout(id)
  }, [status, run])

  useEffect(() => {
    if (status !== 'running') return undefined
    const id = setTimeout(() => setStatus('done'), 700)
    return () => clearTimeout(id)
  }, [status])

  return (
    <section
      className="sql-terminal"
      aria-label="Sample query returning my details"
    >
      <div className="sql-bar">
        <span className="sql-title">warehouse.sql</span>
        <button
          type="button"
          className="sql-run"
          onClick={run}
          disabled={status === 'running'}
        >
          {status === 'running' ? 'Running...' : 'Run query'}
        </button>
      </div>
      <pre className="sql-query">{QUERY}</pre>
      <div className="sql-result" aria-live="polite">
        {status === 'done' && (
          <table>
            <caption className="sr-only">Query result</caption>
            <tbody>
              {ROWS.map(([key, value]) => (
                <tr key={key}>
                  <th scope="row">{key}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {status === 'idle' && (
          <p className="sql-status">Press Run query to execute.</p>
        )}
        {status === 'running' && <p className="sql-status">Executing...</p>}
        {status === 'done' && <p className="sql-status">1 row returned</p>}
      </div>
    </section>
  )
}

export default SqlTerminal
