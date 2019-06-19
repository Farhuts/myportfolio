import React from 'react';
import ExperienceCss from './ExperienceCss.css';

const Experience = () => (
  <div id='experience' className='experience'>
    <h1 className='experienceH1'>Experience</h1>
    <div className="timeline">
      <div className="container left">
        <div className="content">
          <h2>October 2017 - December/2018</h2>
          <h3>Software Engineering Teaching Fellow (Senior)</h3>
            <ul>* Advised 2 engineering teams by leading standup and conducting code reviews </ul>
            <ul>* Pair-programmed and explained technical concepts of the stack to 60 students daily</ul>
            <ul>* Led admissions interviews in Javascript for prospective students 3 times a week</ul>
            <ul>* Taught algorithm approaches weekly to 60 students</ul>
          </div>
      </div>
      <div className="container right">
        <div className="content">
          <h2>April 2019 - Present</h2>
            <h3>Workers’ Compensation Biller</h3>
              <ul>* Created a database for radiology CPT codes</ul>
              <ul>* Participated in front-end design of the company’s website</ul>
              <ul>* Trained and supported new employees in the company’s software technologies</ul>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>January 2017 - October 2017</h2>
            <h3>NY Aquarium</h3>
              <ul> Volunteer Scuba Diver</ul>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>December 2018 - April 2019</h2>
              <h3>Grace Hopper Program at Fullstack Academy of Code</h3>
              <ul> Software Engineer</ul>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>2001 - 2006</h2>
              <h3>NMetAU (National Academy of Ukraine)</h3>
                <ul> Masters in Accounting and Audit </ul>
            </div>
          </div>
      </div>
  </div>
)
export default Experience

// <embed src="email.pdf" width="800px" height="2100px" />
