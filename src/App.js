import React from 'react';
import Navbar from './navbar';
import AppCss from './App.css'
import Main from './main/main'
import AboutMe from './aboutMe/aboutMe'
import Projects from './projects/projects'
import Skills from './skills/skills'
import Experience from './experience/experience'
import Footer from './footer/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Footer/>
    </div>
  );
}

export default App;
