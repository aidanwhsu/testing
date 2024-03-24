import React from 'react';
import './resume.css';
import bclogo from "../assets/images/bclogo.jpg";

function Resume() {
	return (
		<>
		  <h1 className='resume-header'>Education</h1>

			<div className='education-block'>
				<div class="img-wrap">
					<img className="education-picture" alt="boston-college" src={bclogo} />
				</div>
				<div className='education-content'>
					<h1 className='education-title'>B.A. Computer Science at Boston College</h1>
					<p> Minor in Biology, Math</p>
				</div>
			</div>
          


		  <h1 className='resume-header'>Experience</h1>
		</>
	);
}

export default Resume;