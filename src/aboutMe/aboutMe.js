import React from 'react';
import AboutMeCss from './AboutMeCss.css'

const About = () => (
  <div id='content' className='header'>
      <img className='meImg' src='assets/me2.jpg'/>
          <h1 className='aboutMeH1'>About Me</h1>
            <p className='aboutMeP'>
              "Fullstack developer, specializing in Javascript, React.js, Redux.js, Node.js, PostgreSQL, and
              Sequelize, with experience in the field of accounting and audit. As a current Fullstack Academy
              fellow, I serve as the project advisor and mentor for 2 teams, explaining technical
              concepts to students and pair-programming to debug issues within the stack. I hope to use these
              experiences to collaborate with other developers to build tools that bridge the gap between
              complex processes and user interface."
            </p>
  </div>
)
export default About
