import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball'
import OriginCard from '../components/OriginCard'
import { ExperiencesList } from '../dataHelpers/Experiences'
import STA from '../media/STA.jpg'
import MGT from '../media/MGT.jpg'
import '../styles/Experience.css'

function Experience() {
  return (
    <main className="experience-page">
      <header className="experience-heading">
        <p className="section-marker">Experience</p>
        <h1>Experience &amp; education</h1>
        <p>Roles, teaching and education behind my data engineering work.</p>
      </header>
      <div className="experience">
        <VerticalTimeline lineColor="#c9c5b8">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{
              background: 'var(--surface-2)',
              color: 'var(--accent)',
            }}
            icon={<SchoolIcon />}
          >
            <img
              style={{
                maxWidth: '12rem',
                maxHeight: 'none',
                objectFit: 'contain',
                padding: '0.5rem',
                border: '0.1rem solid black',
                borderRadius: '10px',
              }}
              src={MGT}
              alt="McMaster University"
            />
            <h3 className="vertical-timeline-element-title">
              McMaster University (M.B.A. Candidate)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: 'var(--muted)' }}
            >
              Burlington, Ontario
            </h4>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ color: 'var(--muted)' }}
            >
              Sept. 2025 - Apr. 2027 (Expected)
            </h5>
            <p className="experience-text">Master of Business Administration</p>
            <p className="experience-text">
              <b>GPA:</b> 3.9/4.0 | Accelerated, part-time program, specializing
              in Data Analytics.
            </p>
          </VerticalTimelineElement>

          {ExperiencesList.map((experience) => {
            return (
              <VerticalTimelineElement
                key={`${experience.title}-${experience.date}`}
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: 'var(--accent)',
                  color: 'var(--on-accent)',
                }}
                icon={experience.icon}
              >
                <img
                  style={{
                    // height: "3.3rem",
                    // width: "10rem",
                    maxWidth: '12rem',
                    maxHeight: 'none',
                    objectFit: 'contain',
                    padding: '0.5rem',
                    border: '0.1rem solid black',
                    borderRadius: '10px',
                  }}
                  src={experience.img}
                  alt={experience.application}
                />
                <h3 className="vertical-timeline-element-title">
                  {' '}
                  {experience.title}{' '}
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  style={{
                    color: 'var(--muted)',
                  }}
                >
                  {' '}
                  {experience.subtitle}{' '}
                </h4>
                <h5
                  className="vertical-timeline-element-subtitle"
                  style={{
                    color: 'var(--muted)',
                  }}
                >
                  {' '}
                  {experience.date}{' '}
                </h5>
                <p className="experience-text">
                  {experience.description}
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.application}
                  </a>
                  .
                </p>
                <p className="experience-text">
                  <b>Skills:</b> {experience.skills}
                </p>
              </VerticalTimelineElement>
            )
          })}

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{
              background: 'var(--surface-2)',
              color: 'var(--accent)',
            }}
            icon={<SchoolIcon />}
          >
            <img
              style={{
                maxWidth: '12rem',
                maxHeight: 'none',
                objectFit: 'contain',
                padding: '0.5rem',
                border: '0.1rem solid black',
                borderRadius: '10px',
              }}
              src={MGT}
              alt="McMaster University"
            />
            <h3 className="vertical-timeline-element-title">
              {' '}
              McMaster University, B.Eng.Mgt
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{
                color: 'var(--muted)',
              }}
            >
              {' '}
              Hamilton, Ontario{' '}
            </h4>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{
                color: 'var(--muted)',
              }}
            >
              {' '}
              Sept 2020 - April 2025{' '}
            </h5>
            <p className="experience-text">
              {' '}
              <b>Awards:</b> McMaster Honor Award, Dean's Honor List{' '}
            </p>
            <p className="experience-text">
              <b>Relevant Courses:</b> Data Structures and Algorithms,
              Microprocessor Systems, Principals of Programming, Logic Design,
              Integrated Engineering Design Projects.{' '}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{
              background: 'var(--surface-2)',
              color: 'var(--accent)',
            }}
            icon={<SchoolIcon />}
          >
            <img
              style={{
                maxWidth: '12rem',
                maxHeight: 'none',
                objectFit: 'contain',
                padding: '0.5rem',
                border: '0.1rem solid black',
                borderRadius: '10px',
              }}
              src={STA}
              alt="St. Thomas Aquinas Catholic Secondary School"
            />
            <h3 className="vertical-timeline-element-title">
              {' '}
              St. Thomas Aquinas Catholic Secondary School
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{
                color: 'var(--muted)',
              }}
            >
              {' '}
              Oakville, Ontario{' '}
            </h4>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{
                color: 'var(--muted)',
              }}
            >
              {' '}
              Sept 2016 - June 2020{' '}
            </h5>
            <p className="experience-text">
              {' '}
              Completed Ontario Secondary School Diploma and International
              Baccalaureate Diploma.{' '}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{
              background: 'var(--surface-2)',
              color: 'var(--accent)',
            }}
            icon={<SportsBasketballIcon />}
          >
            <OriginCard />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </main>
  )
}

export default Experience
