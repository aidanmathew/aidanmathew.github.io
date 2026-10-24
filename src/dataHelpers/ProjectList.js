export const ProjectList = [
  {
    slug: 'pacemaker',
    name: 'Pacemaker',
    summary: 'Real-time pacemaker control software.',
    icon: 'heartbeat',
    skills: 'Simulink, Python, Git, pyserial, vsCode, real-time software',
    link: 'https://github.com/aidanmathew/SFWRENG-3K04',
    category: 'Embedded',
    problem: 'Pacemaker control software with real-time behaviour.',
    architecture: 'Simulink model with a Python serial interface (pyserial).',
  },

  {
    slug: 'lidar-3d-mapper',
    name: 'LiDAR 3D Mapper',
    summary: 'Capture distance readings and turn them into a 3D map.',
    icon: 'cube',
    skills:
      'MSP432E401Y Microcontroller, I2C and UART communication, VL53L1X Time of Flight (ToF) Sensor, stepper motor, matplotlib, python',
    link: 'https://github.com/aidanmathew/LiDAR-3D-Mapper',
    category: 'Embedded',
    problem: 'Capture distance readings and turn them into a 3D map.',
    architecture:
      'ToF sensor and stepper motor on a microcontroller, read over I2C and streamed over UART to Python for plotting.',
  },

  {
    slug: 'personal-website',
    name: 'Personal Website',
    summary: 'A React portfolio published with GitHub Pages.',
    icon: 'globe',
    skills: 'React.js, HTML, CSS, gh-pages, npm, yarn',
    link: 'https://github.com/aidanmathew/aidanmathew.github.io',
    category: 'Web',
    problem: 'A portfolio presenting my data engineering work.',
    architecture: 'Static React single-page app published with gh-pages.',
  },

  {
    slug: 'post-study-project',
    name: 'POST-study Project',
    summary: 'A Python data preparation and SVM project.',
    icon: 'brain',
    skills: 'Python, SVM, numpy, pandas, VSCode, Zenhub',
    link: 'https://github.com/McMasterAI/POST_study_Project',
    category: 'Data / ML',
    architecture:
      'Python data preparation with pandas and numpy feeding an SVM model.',
  },

  {
    slug: 'covid-counter',
    name: 'Covid Counter',
    summary: 'A Python project using CSV data and machine learning.',
    icon: 'chart',
    skills: 'Python, CSV, numpy, pandas, sk-learn, google colab',
    link: 'https://devpost.com/software/the-covid-counter',
    category: 'Data / ML',
    architecture:
      'CSV data loaded and prepared with pandas and numpy, modelled with scikit-learn in Google Colab.',
  },

  {
    slug: 'q-support',
    name: 'Q-Support',
    summary: 'A rapid-prototyped design validated with simulations.',
    icon: 'support',
    skills:
      'Rapid Prototyping, Autodesk Inventor, project planning, Simulations',
    link: 'https://mathea40.wixsite.com/1p13portfolio/p-4',
    category: 'Design',
    architecture:
      'Prototyped in Autodesk Inventor and validated with simulations.',
  },

  {
    slug: 'recycling-system',
    name: 'Recycling System',
    summary: 'A recycling system designed with Python and Inventor.',
    icon: 'recycle',
    skills: 'Python, Autodesk Inventor, Autodesk, Simulations, Excel',
    link: 'https://mathea40.wixsite.com/1p13portfolio/p-3',
    category: 'Design',
    architecture:
      'Python and Autodesk Inventor design, checked with simulations.',
  },

  {
    slug: 'remote-sensing-system',
    name: 'Remote Sensing System',
    summary: 'A Python-based physical computing project.',
    icon: 'satellite',
    skills: 'Python, Rapid Prototyping, Physical Computing, Excel',
    link: 'https://mathea40.wixsite.com/1p13portfolio/p-2',
    category: 'Design',
    architecture: 'Python-driven physical computing prototype.',
  },
]
