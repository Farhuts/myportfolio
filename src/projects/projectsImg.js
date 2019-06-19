import React from 'react';

const ProjectImg =({state, onMouseEnter, onMouseOut}) => {
  return (
    <div>
          <h3 className='projectsImgH3'>Pandance</h3>
            <img
              id='1'
              className='projectsImg'
              src={state.img}
              onMouseEnter={onMouseEnter}
              onMouseOut={onMouseOut}
            />
        <div className='projectOne'>
          <p className='projectsImgPOne'>
            A 3D keyboard game created with Babylon JS, where users  make 3D characters dance with unique sounds.
            The main emphases of the application are 3D objects and 3D scenes, which use visual elements to make learning fun and enjoyable.
          </p>
        </div>
        <div className='projectIcon'>
          <div><a href="https://pandance.herokuapp.com/" target="_blank">Visit</a></div>
          <div><a href="https://github.com/rosas-unicorns/pandance/" target="_blank">GitHub</a></div>
        </div>
          <h3 className='projectsImgH3Two'>VS-Code extension: Web Page Boilerplate</h3>
            <img
              id='2'
              className='projectsImg2'
              src={state.img2}
              onMouseEnter={onMouseEnter}
              onMouseOut={onMouseOut}
            />
          <div className='projectTwo' >
            <p className='projectsImgPOne'>
              VS-Code extension which allows web-developers to get templates of fully
              styled and responsive web pages with a simple command.
            </p>
        </div>
        <div className='projectIcon'>
          <div><a href="https://marketplace.visualstudio.com/items?itemName=tfarguts.template-web-page" target="_blank">Visit</a></div>
          <div><a href="https://github.com/Farhuts/web-page-boilerplate" target="_blank">GitHub</a></div>
        </div>
    </div>
  )
}

export default ProjectImg
