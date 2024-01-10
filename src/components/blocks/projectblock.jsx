import React from 'react';

function ProjectBlock({picture, text, link}) {
  const image = picture.src
    return (
        <div className= "project-block">
          <img className="picture" alt={picture.alt} src={image} />
		      <div className="project-content">
            <header>
              <h1>{text.header}</h1>
              <p>{text.p}</p>
              <p>Github:<a href={link} target="_blank" rel="noreferrer"> Link </a></p>
            </header>
          </div>
        </div>
    )
}

export default ProjectBlock;