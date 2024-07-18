import React from 'react';

function ExperienceBlock({picture, text}) {

    const description = document.createElement('div');
    // console.log(text.p.length)
    for (var i=0; i < text.p.length; i++) {
        const bullet = document.createElement('p');
        bullet.innerHTML = text.p[i];
        description.appendChild(bullet);
    }
    console.log(description);

    const image = picture.src
      return (
          <div className= "experience-block">
            <div> 
                <h1 className="experience-title">{text.title}</h1>
                <h1 className="experience-company">at {text.company}</h1>
                <img className="picture" alt={picture.alt} src={image} />
            </div>
            
            <div className="experience-content">
                    <header>
                        
                        {text.p.map(function(desc) {
                            return <p> - {desc}</p>
                        }
                    )
                        }
                    </header>
            </div>
          </div>
      )
  }
  
  export default ExperienceBlock;