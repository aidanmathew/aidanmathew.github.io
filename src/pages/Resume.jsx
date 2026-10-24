import React from 'react'
import '../styles/Resume.css'

function Resume() {
    return (
        <main className="resume-page">
            <article className="resume-sheet" aria-labelledby="resume-name">
                <header className="resume-header">
                    <h1 id="resume-name">Aidan Mathew</h1>
                    <address className="resume-contact">
                        <a href="tel:+16479893736">647-989-3736</a>
                        <a href="mailto:mathea40@mcmaster.ca">mathea40@mcmaster.ca</a>
                        <a
                            href="https://www.linkedin.com/in/Aidan-Mathew"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://aidanmathew.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            aidanmathew.github.io
                        </a>
                    </address>
                </header>

                <section className="resume-section" aria-labelledby="resume-education">
                    <h2 id="resume-education">Education</h2>
                    <div className="resume-entry">
                        <div className="resume-entry-heading">
                            <h3>McMaster University (M.B.A. Candidate)</h3>
                            <p>Sept. 2025 - Apr. 2027 (Expected)</p>
                        </div>
                        <p className="resume-entry-subheading">
                            <span>Master of Business Administration</span>
                            <span>Burlington, ON</span>
                        </p>
                        <ul>
                            <li>
                                <strong>GPA: 3.9/4.0</strong> | Accelerated, part-time program,
                                specializing in Data Analytics.
                            </li>
                        </ul>
                    </div>
                    <div className="resume-entry">
                        <div className="resume-entry-heading">
                            <h3>McMaster University (B.Eng.Mgt)</h3>
                            <p>Sept. 2020 - Apr. 2025</p>
                        </div>
                        <p className="resume-entry-subheading">
                            <span>Bachelor of Computer Engineering and Management</span>
                            <span>Hamilton, ON</span>
                        </p>
                        <ul>
                            <li>
                                Summa Cum Laude | <strong>GPA: 3.7/4.0</strong> | McMaster Honor
                                Award | Dean&apos;s Honor List | 8x Teaching Assistant
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section" aria-labelledby="resume-skills">
                    <h2 id="resume-skills">Skills</h2>
                    <p className="resume-skill-line">
                        <strong>Programming:</strong> Python, JavaScript (React.js,
                        Node.js), SQL, Java, C/C++, HTML5/CSS3, Swift, Matlab/R
                    </p>
                    <p className="resume-skill-line">
                        <strong>Tools:</strong> Git, Azure, ServiceNow, Databases (Realm,
                        PgAdmin), PowerBI, XCode, Moogsoft, New Relic
                    </p>
                </section>

                <section className="resume-section" aria-labelledby="resume-experience">
                    <h2 id="resume-experience">Experience</h2>
                    <div className="resume-entry">
                        <div className="resume-entry-heading">
                            <h3>
                                <a
                                    href="https://id.manulife.ca/sponsor/?ui_locales=en-CA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Associate Full-stack Software Engineer - Platform Engineer
                                </a>
                            </h3>
                            <p>Jun. 2025 - Jun. 2026</p>
                        </div>
                        <p className="resume-entry-subheading">
                            <span>Manulife - Observability and Resiliency</span>
                            <span>Toronto, ON</span>
                        </p>
                        <ul>
                            <li>
                                Onboarded <strong>10+</strong> engineering teams to centralized
                                incident management via Moogsoft, integrating alerts from
                                various integrations, enabling faster incident correlation and
                                reducing mean time to detection (MTTD).
                            </li>
                            <li>
                                Developed a <strong>Power BI dashboard</strong> for senior
                                leadership to track key observability metrics, including alert
                                ingestion, incident creation, MTTA, integrations breakdown, and
                                team paging activity.
                            </li>
                        </ul>
                    </div>

                    <div className="resume-entry">
                        <div className="resume-entry-heading">
                            <h3>
                                <a
                                    href="https://id.manulife.ca/sponsor/?ui_locales=en-CA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Software Engineer Co-op
                                </a>
                            </h3>
                            <p>May. 2024 - Aug. 2024</p>
                        </div>
                        <p className="resume-entry-subheading">
                            <span>Manulife - GWAM Sponsor Samurai</span>
                            <span>Toronto, ON</span>
                        </p>
                        <ul>
                            <li>
                                Updated the AdZone marketing content within the Sponsor Site
                                React application by implementing JavaScript code changes over
                                two repositories, generating a <strong>30% increase</strong> in
                                sponsor engagement.
                            </li>
                            <li>
                                Modified Sponsor Financial Summary Report stored procedure in
                                Microsoft SQL Server, reducing query time from{' '}
                                <strong>33 min to 3 min</strong>, successfully resolving
                                production defects where queries exceeded the accepted time
                                limit.
                            </li>
                            <li>
                                Updated automated email stored procedure response, notifying
                                Sponsors if a plan member has reached or exceeded the
                                contribution limit, resulting in{' '}
                                <strong>increased sponsor awareness</strong> and{' '}
                                <strong>compliance</strong> with contribution limits.
                            </li>
                        </ul>
                    </div>

                    <div className="resume-entry">
                        <div className="resume-entry-heading">
                            <h3>
                                <a
                                    href="https://www.cibc.com/en/commercial.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Application Developer Co-op
                                </a>
                            </h3>
                            <p>May. 2023 - Aug. 2023</p>
                        </div>
                        <p className="resume-entry-subheading">
                            <span>CIBC - Commercial Banking and Payments Techonology</span>
                            <span>Toronto, ON</span>
                        </p>
                        <ul>
                            <li>
                                Created, closed, and managed <strong>50+</strong> change
                                requests in <strong>ServiceNow</strong>, documenting changes,
                                conducting impact analysis, and developing implementation plans
                                for streamlined change management.
                            </li>
                            <li>
                                Presented new changes to the{' '}
                                <strong>Enterprise Change Management team</strong>,
                                demonstrating a deep understanding of the informed
                                decision-making and approval processes regarding Fastlane change
                                requests.
                            </li>
                        </ul>
                    </div>

                    <div className="resume-entry">
                        <div className="resume-entry-heading">
                            <h3>
                                <a
                                    href="https://pointclickcare.com/industry-solutions/home-health-care/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Software Engineer Co-op
                                </a>
                            </h3>
                            <p>May. 2022 - Aug. 2022</p>
                        </div>
                        <p className="resume-entry-subheading">
                            <span>PointClickCare - Care at Home Clinical</span>
                            <span>Mississauga, ON</span>
                        </p>
                        <ul>
                            <li>
                                Contributed to the development of a cutting-edge iOS
                                application, leveraging <strong>Swift</strong> to devise
                                innovative solutions for user-reported issues, resulting in an
                                enhanced user experience and{' '}
                                <strong>increased customer satisfaction</strong>.
                            </li>
                            <li>
                                Orchestrated the seamless migration of the{' '}
                                <strong>database schema (Realm)</strong> to accommodate new
                                property additions and changes during app version upgrades,
                                ensuring uninterrupted functionality and data integrity.
                            </li>
                            <li>
                                Enhanced clinicians&apos; ability to record patient data by
                                implementing document questions into{' '}
                                <strong>25+ charting assessments</strong>, streamlining data
                                capture, and improving overall completeness.
                            </li>
                        </ul>
                    </div>

                    <div className="resume-entry">
                        <div className="resume-entry-heading">
                            <h3>
                                <a
                                    href="https://marketplace.geotab.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Software Engineer Co-op
                                </a>
                            </h3>
                            <p>May. 2021 - Aug. 2021</p>
                        </div>
                        <p className="resume-entry-subheading">
                            <span>Geotab Inc. - Web for Marketing</span>
                            <span>Oakville, ON</span>
                        </p>
                        <ul>
                            <li>
                                Translated Figma designs into production-level code using{' '}
                                <strong>React.js</strong>, enhancing overall user experience.
                            </li>
                            <li>
                                Leveraged <strong>Geotab APIs</strong> and adhered to{' '}
                                <strong>REST principles</strong> to seamlessly fetch and
                                integrate data from new table, enabling the creation of dynamic
                                web pages with real-time information and enhanced functionality.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section" aria-labelledby="resume-interests">
                    <h2 id="resume-interests">Interests</h2>
                    <p className="resume-skill-line">
                        <strong>Looking to Learn:</strong> Data Engineering, Technical
                        Project Management, Databricks, Docker, CI/CD, Golang, AWS, AI
                        Engineering, Distributed Systems, Apache Spark, Data Pipelines
                        (ETL), ML, Agentic AI
                    </p>
                </section>
            </article>
        </main>
    )
}

export default Resume
