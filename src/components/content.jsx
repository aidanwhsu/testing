import React from 'react';
// import { Routes, Route } from "react-router";
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import Home from './home.jsx';
import Projects from './projects.jsx';
import Resume from './resume.jsx';
import Navbar from "./navbar.jsx";
import More from "./more.jsx";
import './content.css';

function Content() {
	return (
		<BrowserRouter>
        <Routes>
          <Route path = "/" element={<NavbarAndOutlet/>}>
	        <Route path="/" element={<Home />} />
	        <Route path="/projects" element={<Projects />} />
			<Route path="/resume" element={<Resume />} />
	      </Route>
        </Routes>
        </BrowserRouter>

	)
}

function NavbarAndOutlet() {
	return (
		<>
		<Navbar/>
		<div className="content">
			<Outlet/>
		</div>
		</>
	)
}


export default Content;