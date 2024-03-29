import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import TypeIt from 'typeit-react'
import "../styles/Home.css"
import Aidan from "../media/aidanPFP.jpg"
import { Link } from '@material-ui/core'
function Home() {
  return (
    <div className="home">

      <div className="about">

        <img
          className="aidanImage"
          src={Aidan}
          alt=""
        />
        
        
        <h2> Hello! I'm <span className="gradient">Aidan</span>! </h2>

        <div className="prompt">
          <p>I am <TypeIt
          options={{
            speed: 90,
            waitUntilVisible: true,
            loop: true,
          }}
          getBeforeInit={(instance) => {
            instance.type("a Computer Engineer.")
            .pause(1000)
            .delete()
            .type("a Web Developer.")
            .pause(1000)
            .delete()
            .type("an Athlete.")
            .pause(1000)
            .delete()
            .type("a Software Developer.")
            .pause(1000)
            .delete()
            .type("a Problem Solver.")
            .pause(1000)
            .delete()
            .type("an Analytical Thinker.")
            .pause(1000)
            .delete()
            // Remember to return it!
            return instance;

          }}></TypeIt></p>
          
          <Link href="http://www.linkedin.com/in/aidan-mathew" target='_blank' rel='noopener'>
            <LinkedInIcon />
          </Link>

          <Link href="mailto:mathea40@mcmaster.ca">
            <EmailIcon />
          </Link>

          <Link href="https://github.com/aidanmathew">
            <GitHubIcon />
          </Link>

        </div>
      </div>

      <div className="skills">
        <h1> About Me </h1>
        <ol className="list">
          <li className="item">
            <span>
              I am a 4th year Computer Engineering and Management student at McMaster University. With a passion for technology, I have already completed 12-months of co-op and I am looking to gain more experience in my next work term (May 2024).
              
              I created this website to practice my web development skills, while also displaying my personal projects and work experiences. <br /><br />

              This portfolio is built on react.js, styled with Material-UI, and implements multi-page functionality using react-router-dom for simple and efficient site navigation. For simplicity, I have used github pages for quick and easy deployments with every push to github. <br /><br />

              As I near the end of my academic journey and my final work term approaches, I am eager to take on a challenging and rewarding role that will set me up for success in my future career. With a passion for software development and a proven track record of success, I believe that I am the best fit for any SDE/SWE role.<br /><br />

              Throughout my undergraduate career, I have gained extensive experience in software development, project management, managing timelines, and collaborating with cross-functional teams. In my previous co-op roles, I have had the opportunity to work on complex projects, consistently delivering high-quality work on time.
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home