import React from 'react';
import ProjectImg from './projectsImg'
import ProjectsCss from './ProjectsCss.css'

class Projects extends React.Component {
    state = {
      img: "assets/monitor_panda-1.png",
      img2: "assets/monitor-1.png"
    };
  onMouseEnter=(evt) => {
    if(evt.target.id === '1'){
      this.setState({
        img:
          "assets/panda_tech.png"
      })
    } else {
      this.setState({
        img2:
          "assets/vs-code.png"
      })
    }
  }
  onMouseOut=(evt) => {
    if(evt.target.id === '1'){
      this.setState({
        img: "assets/monitor_panda-1.png"
      });
    } else {
      this.setState({
        img2: "assets/monitor-1.png"
      });
    }
  }
  render() {
    return (
      <div id='projects'>
        <div className='projectsDiv'>
          <h1 className='projectsH1'>Projects</h1>
            <ProjectImg
              state = {this.state}
              onMouseEnter={this.onMouseEnter}
              onMouseOut={this.onMouseOut}
            />
        </div>
    </div>
    );
  }
}

export default Projects

// <hr/>
