import React from 'react';
import './navbar.css';
import { useLocation, Link } from "react-router-dom";
import linkedin_icon from "../assets/images/linkedin.png";
import github_icon from "../assets/images/github.png";

function Navbar() {
	return (
		<div className="nav">
			<div className="title">AIDAN HSU</div>
			<Link to="/testing/">Home</Link>
			<Link to="/testing/projects">Projects</Link>
			<Link to="/testing/resume">Resume</Link>
			<a id="linkedin" href="https://www.linkedin.com/in/aidan-hsu-ahwc/" target="_blank" rel="noreferrer">
			  LinkedIn
			  <img className="icon" src={linkedin_icon} alt="linkedin_icon"/>
			</a>
			<a id="github" href="https://github.com/aidanwhsu" target="_blank" rel="noreferrer">
			  Github
			  <img className="icon" src={github_icon} alt="github_icon"/>
			</a>
			<a href="/testing/more">More About Me!</a>
		</div>
	);
}

export default Navbar;