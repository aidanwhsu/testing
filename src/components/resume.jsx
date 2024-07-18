import React from 'react';
import ExperienceBlock from './blocks/experienceblock.jsx';

import noimg from "src/assets/images/building.jpg";
import './resume.css';
import bclogo from "../assets/images/bclogo.jpg";

function Resume() {
	return (
		<div className='resume-content'>
		  <h1 className='resume-header'>Education</h1>

			<div className='education-block'>
				{/* <div class="img-wrap"> */}
					<img className="education-picture" alt="boston-college" src={bclogo} />
				{/* </div> */}
				<div className='education-content'>
					<h1 className='education-title'>B.A. Computer Science at Boston College</h1>
					<p> Minor in Biology, Math</p>
				</div>
			</div>
          


		  <h1 className='resume-header'>Experience</h1>
		  <ExperienceBlock 
				picture = {{alt: "no image", src: noimg}}
				text = {{
					title: 'Software Engineering Intern', 
					company: 'Inwell International',
					p: [
						'Developed a prototype front-end member rewards mobile application utilizing flutter and prioritizing compatibility through adaptive UI design principles for the foundation of future development',
						'Developed a script to query the Point of Sale (POS) system API which enabled the effective retrieval of rewards information for over 65,000 members across 12+ global locations',
						'Detected and addressed security vulnerabilities within the companys POS system, including stale accounts, absence of expiry limits, and unauthorized account sharing to enhance operational security measures'
					]
				}}
			/>
			<ExperienceBlock 
				picture = {{alt: "no image", src: noimg}}
				text = {{
					title: 'Data Analyst Intern', 
					company: 'Inwell International',
					p: [
						'Conducted sales analysis on 20k transactions to facilitate decisions on the future product roadmap, supporting Inwells 20% YoY revenue goal, and contributing to the companys US expansion initiative',
						'Employed machine learning models, specifically regression analysis, to predict product sales considering factors like discounts and seasonality, resulting in informed adjustments to pricing and discount strategies',
						'Leveraged data modeling and analytics software to provide actionable insights, facilitating strategic decisionmaking, with 2019 marking the companys largest revenue increase of 21.3% post-IPO'
					]
				}}
			/>
		</div>
	);
}

export default Resume;