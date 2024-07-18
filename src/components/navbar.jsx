import React from 'react';
import './navbar.css';
import { useLocation, Link } from "react-router-dom";
import linkedin_icon from "../assets/images/linkedin.png";
import github_icon from "../assets/images/github.png";

function Navbar() {
	return (
		<div className="nav">
			<div className="title">
				<div className="titletext">AIDAN</div>
				<div className="titletext">HSU</div>
			</div>
			
			<Link to="/">Home</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/resume">Resume</Link>
			<Link to="/more">More</Link>
			<a className = "navlink" id="linkedin" href="https://www.linkedin.com/in/aidan-hsu-ahwc/" target="_blank" rel="noreferrer">
			  LinkedIn
			  <img className="icon" src={linkedin_icon} alt="linkedin_icon"/>
			</a>
			<a className = "navlink" id="github" href="https://github.com/aidanwhsu" target="_blank" rel="noreferrer">
			  Github
			  <img className="icon" src={github_icon} alt="github_icon"/>
			</a>
		</div>
	);
}

export default Navbar;