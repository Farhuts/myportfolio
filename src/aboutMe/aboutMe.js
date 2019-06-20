import React from 'react';
import AboutMeCss from './AboutMeCss.css'

const About = () => (
  <div id='content' className='header'>
    <div className='aboutMeH1'>
        <h1>About Me</h1>
    </div>
      <div className='flex'>
          <div id='aboutMe'>
            <img className='meImg' src='assets/me2.jpg'/>
          </div>
            <p className='aboutMeP'>
              "Fullstack developer, specializing in Javascript, React.js, Redux.js, Node.js, PostgreSQL, and
              Sequelize, with experience in the field of accounting and audit. As a current Fullstack Academy
              fellow, I serve as the project advisor and mentor for 2 teams, explaining technical
              concepts to students and pair-programming to debug issues within the stack. I hope to use these
              experiences to collaborate with other developers to build tools that bridge the gap between
              complex processes and user interface."
            </p>
      </div>
  </div>
)
export default About
