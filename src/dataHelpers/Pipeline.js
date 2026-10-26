export const PipelineStages = [
  {
    id: 'source',
    label: 'Source',
    summary: 'Where data originates: files, APIs, databases and device feeds.',
    tools: [
      'CSV / flat files',
      'Sensor streams (UART, I2C)',
      'Power BI exports',
    ],
  },
  {
    id: 'ingest',
    label: 'Ingest',
    summary:
      'Move raw data into a platform with Azure Data Factory, Python, or pyserial.',
    tools: ['Azure Data Factory', 'Python', 'pyserial'],
  },
  {
    id: 'transform',
    label: 'Transform',
    summary: 'Clean, validate, and shape data for analysis.',
    tools: ['Databricks', 'Python', 'SQL', 'pandas', 'numpy'],
  },
  {
    id: 'warehouse',
    label: 'Warehouse',
    summary: 'Governed storage and modelled tables for analytics.',
    tools: ['Azure Synapse', 'Azure Data Lake Storage', 'Unity Catalog'],
  },
  {
    id: 'serve',
    label: 'Serve',
    summary: 'Deliver data through dashboards, applications, and models.',
    tools: ['Power BI', 'Java', 'Spring', 'React.js', 'scikit-learn'],
  },
]

export const SkillCategories = [
  'All',
  'Language',
  'Library',
  'Platform',
  'Practice',
  'Tool',
  'Learning',
]

export const AdditionalSkills = [
  { name: 'JavaScript', group: 'Programming', category: 'Language' },
  { name: 'Node.js', group: 'Programming', category: 'Library' },
  { name: 'C/C++', group: 'Programming', category: 'Language' },
  { name: 'HTML5/CSS3', group: 'Programming', category: 'Language' },
  { name: 'Swift', group: 'Programming', category: 'Language' },
  { name: 'Matlab/R', group: 'Programming', category: 'Language' },
  { name: 'ServiceNow', group: 'Tools', category: 'Tool' },
  { name: 'Realm', group: 'Tools', category: 'Tool' },
  { name: 'PgAdmin', group: 'Tools', category: 'Tool' },
  { name: 'XCode', group: 'Tools', category: 'Tool' },
  { name: 'Moogsoft', group: 'Tools', category: 'Tool' },
  { name: 'New Relic', group: 'Tools', category: 'Tool' },
  {
    name: 'Technical Project Management',
    group: 'Looking to Learn',
    category: 'Learning',
  },
  { name: 'Docker', group: 'Looking to Learn', category: 'Learning' },
  { name: 'CI/CD', group: 'Looking to Learn', category: 'Learning' },
  { name: 'Golang', group: 'Looking to Learn', category: 'Learning' },
  { name: 'AWS', group: 'Looking to Learn', category: 'Learning' },
  { name: 'AI Engineering', group: 'Looking to Learn', category: 'Learning' },
  {
    name: 'Distributed Systems',
    group: 'Looking to Learn',
    category: 'Learning',
  },
  {
    name: 'Apache Spark',
    group: 'Looking to Learn',
    category: 'Learning',
  },
  { name: 'ML', group: 'Looking to Learn', category: 'Learning' },
  { name: 'Agentic AI', group: 'Looking to Learn', category: 'Learning' },
]

export const Skills = [
  { name: 'CSV / flat files', stage: 'source', category: 'Practice' },
  { name: 'Sensor data (UART, I2C)', stage: 'source', category: 'Practice' },
  { name: 'Azure Data Factory', stage: 'ingest', category: 'Platform' },
  { name: 'Python', stage: 'ingest', category: 'Language' },
  { name: 'pyserial', stage: 'ingest', category: 'Library' },
  { name: 'Databricks', stage: 'transform', category: 'Platform' },
  { name: 'SQL', stage: 'transform', category: 'Language' },
  { name: 'pandas', stage: 'transform', category: 'Library' },
  { name: 'numpy', stage: 'transform', category: 'Library' },
  { name: 'Azure Synapse', stage: 'warehouse', category: 'Platform' },
  {
    name: 'Azure Data Lake Storage',
    stage: 'warehouse',
    category: 'Platform',
  },
  { name: 'Unity Catalog', stage: 'warehouse', category: 'Platform' },
  { name: 'Data governance', stage: 'warehouse', category: 'Practice' },
  {
    name: 'Hive to Unity Catalog migration',
    stage: 'warehouse',
    category: 'Practice',
  },
  { name: 'Power BI', stage: 'serve', category: 'Platform' },
  { name: 'Java', stage: 'serve', category: 'Language' },
  { name: 'Spring', stage: 'serve', category: 'Library' },
  { name: 'React.js', stage: 'serve', category: 'Library' },
  { name: 'scikit-learn', stage: 'serve', category: 'Library' },
  { name: 'Git', stage: 'serve', category: 'Practice' },
]
