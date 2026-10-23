import React from 'react'
import PCC from '../media/PCC.jpg'
import MGT from '../media/MGT.jpg'
import GEOTAB from '../media/geotab.jpg'
import CIBC from '../media/CIBC.jpg'
import MANULIFE from '../media/manulife.jpg'
import Work from '@material-ui/icons/Work'
import Apple from '@material-ui/icons/Apple'
import { GrReactjs } from 'react-icons/gr'

export const ExperiencesList = [
  {
    title: 'Associate Data Engineer',
    subtitle: 'Toronto, Ontario',
    date: 'June 2026 - Present',
    description: 'Canadian Segment Data Office - Bank Data: ',
    skills:
      'Azure, ADF, Synapse, PowerBI, Databricks, Python, SQL, Git, Azure Data Lake Storage, Unity Catalog, Data Governance',
    link: 'https://www.manulifebank.ca/personal-banking.html',
    application: 'Manulife Bank Data Team',
    img: MANULIFE,
    icon: <Work />,
  },

  {
    title: 'Associate Platform Reliability Engineer',
    subtitle: 'Toronto, Ontario',
    date: 'June 2025 - June 2026',
    description:
      'Enterprise Technology - Observability and Reliability Engineering: ',
    skills: 'Moogsoft, New Relic, APM, PowerBI, ServiceNow, APIs, Postman',
    link: 'https://www.manulife.com/ca/en/about-us/who-we-are/our-story',
    application: 'Observability and Resiliency',
    img: MANULIFE,
    icon: <Work />,
  },

  {
    title: 'Software Engineer Co-op',
    subtitle: 'Toronto, Ontario',
    date: 'May 2024 - April 2025',
    description: 'Global Wealth and Asset Management - Canadian Retirement: ',
    skills: 'Java, Spring, React, Javascript',
    link: 'https://www.manulife.ca/business/group-retirement.html',
    application: 'Group Retirement Solutions',
    img: MANULIFE,
    icon: <Work />,
  },

  {
    title: 'Undergraduate Teaching Assistant - ENGINEER 1P13 and ENGINEER 2PX3',
    subtitle: 'Hamilton, Ontario',
    date: 'January 2024 - April 2024',
    description:
      'Lab A Teaching Assistant for Engineer 1P13 and Design Studio Teaching Assistant for Engineer 2PX3: ',
    skills:
      'Python, Quanser, Autodesk Inventor, D2L Brightspace, Communication, Grading, MS Office, Teaching and Mentoring',
    link: 'https://www.eng.mcmaster.ca/programs/undergraduate-programs-degrees/experiential-learning/1p13/',
    application: 'Faculty of Engineering',
    img: MGT,
    icon: <Work />,
  },

  {
    title: 'Undergraduate Teaching Assistant - ENGINEER 1P13 and ENGMGT 2AA3',
    subtitle: 'Hamilton, Ontario',
    date: 'September 2023 - December 2023',
    description:
      'Lab A Teaching Assistant for Engineer 1P13 and Core Teaching Assistant for EngMgt 2AA3: ',
    skills:
      'Python, Quanser, Autodesk Inventor, D2L Brightspace, Communication, Grading, MS Office, Teaching and Mentoring',
    link: 'https://www.eng.mcmaster.ca/programs/undergraduate-programs-degrees/experiential-learning/1p13/',
    application: 'Faculty of Engineering',
    img: MGT,
    icon: <Work />,
  },

  {
    title: 'Application Developer Co-op',
    subtitle: 'Toronto, Ontario',
    date: 'May 2023 - August 2023',
    description: 'CIBC Commercial Banking & Payments Technology - ',
    skills: 'ServiceNow, Zendesk, MS Office, Enterprise Change Management',
    link: 'https://www.cibc.com/en/commercial.html',
    application: 'CIBC Commercial Banking',
    img: CIBC,
    icon: <Work />,
  },

  {
    title: 'Undergraduate Teaching Assistant - ENGINEER 1P13',
    subtitle: 'Hamilton, Ontario',
    date: 'January 2023 - April 2023',
    description: 'Design Studio Teaching Assistant for Engineer 1P13: ',
    skills:
      'Python, Quanser, Autodesk Inventor, D2L Brightspace, Communication, Grading, MS Office, Teaching and Mentoring',
    link: 'https://www.eng.mcmaster.ca/integrated-cornerstone-design-projects-engineering-1p13',
    application: 'Integrated Cornerstone Design Projects in Engineering',
    img: MGT,
    icon: <Work />,
  },

  {
    title: 'Undergraduate Teaching Assistant - ENGMGT 2AA3',
    subtitle: 'Hamilton, Ontario',
    date: 'September 2022 - December 2022',
    description: 'Teaching Assistant for Engineering and Management: ',
    skills: 'D2L Brightspace, Communication, Grading, MS Office',
    link: 'https://www.eng.mcmaster.ca/engineering-management-program#Curriculum:~:text=ENGNMGT%202AA3%20%2D%20Communication%20Skills',
    application: 'Communication Skills',
    img: MGT,
    icon: <Work />,
  },

  {
    title: 'Software Engineer Co-op',
    subtitle: 'Mississauga, Ontario',
    date: 'May 2022 - August 2022',
    description:
      'iOS Development - Worked with Home Health team X-Men to develop features for ',
    skills: 'Swift, XCode, Azure DevOps, Jira, Confluence',
    link: 'https://pointclickcare.com/industry-solutions/home-health-care/',
    application: 'Care at Home Clinical App',
    img: PCC,
    icon: <Apple />,
  },

  {
    title: 'Web Developer Co-op',
    subtitle: 'Oakville, Ontario',
    date: 'May 2021 - August 2021',
    description:
      'Web Development - Worked with WFM team Griffin to create features for ',
    skills: 'Javascript, React.js, material-UI, SQL, Jira, G-suite',
    link: 'https://marketplace.geotab.com/',
    application: 'Geotab Marketplace',
    img: GEOTAB,
    icon: <GrReactjs />,
  },
]
