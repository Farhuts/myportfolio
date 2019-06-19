import React from 'react';
import SkillsCss from './SkillsCss.css'
import Languages from './languages';
import Software from './software';
import Frameworks from './frameworks';
import Tools from './tools';
import SpokenL from './spokenL';

const Skills = () => {
  return (
    <div id='skills' className="skillsContainer">
      <h1 className='projectsH1'>Skills</h1>
          <div className='row'>
            <Languages />
            <Frameworks />
            <Tools />
            <Software />
            <SpokenL />
        </div>
    </div>
  )}
export default Skills
