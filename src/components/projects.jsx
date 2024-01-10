import React from 'react';
import ProjectBlock from './blocks/projectblock.jsx';
import './projects.css';
import multiplication from "src/assets/images/multiplication.png";
import highway from "src/assets/images/highway.jpg";
import brain from "src/assets/images/brain.jpg";

function Projects() {
	return (
		<>
			<ProjectBlock 
				picture = {{alt: 'Multiplication Complexity Analysis', src: multiplication}}
				text = {{
					header: 'Multiplication Complexity Analysis', 
					p: 'Explaination, analysis on the runtime, and python implementation of the gradeschool, Karatsuba, and the Toom-3 multiplication algorithms.'
				}}
				link = "https://github.com/aidanwhsu/multiplication-runtime-analysis"
			/>
			<ProjectBlock 
				picture = {{alt: 'Metro Interstate', src: highway}}
				text = {{
					header: 'Profiling and model on the Metro Interstate Traffic Volume dataset', 
					p: 'Profiling and Scikit-Learn machine learning models on the Metro Interstate Traffic Volume Dataset.'
				}}
				link = "https://github.com/aidanwhsu/metrointerstate-profiling-and-model"
			/>
			<ProjectBlock 
				picture = {{alt: 'fMRI Emotion Classification', src: brain}}
				text = {{
					header: 'fMRI Emotion Classification', 
					p: 'Implemented a 3D-CNN model for functional magnetic resonance imaging (fMRI) classification using pytorch, collaborated in preprocessing and analyzing fMRI datasets'
				}}
				link = "https://github.com/aidanwhsu/emotionalbrain"
			/>
		</>
	);
}

export default Projects;