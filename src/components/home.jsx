import React from 'react';
import './home.css';
import dice from "../assets/images/dice.png";
import News from './news.jsx';
import pic from "../assets/images/pic.jpg";

const greetings = [
  "Hello! I am ",
  "你好! 我是",
  "Hola! soy",
  "안녕! 나는야",
  "Bonjour ! Je suis",
  "Здравствуйте! Я",
  "Hallo! Ich bin"
];

function randomLanguage() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}


function Home() {

	const [greeting, setGreeting] = React.useState(greetings[0]);

	const handleChangeGreeting = () => {
      const newGreeting = randomLanguage();
      setGreeting(newGreeting);
    };
	return (
		<div className="home-content">
		  <img className="picture" alt="picture_of_me" src={pic} />
		  <div className="home-header">
			<header>
				<span>
				  <h1>{greeting}</h1>
				  <h1><span>Aidan Hsu</span></h1>
				</span>
				<img onClick={handleChangeGreeting} className="dice" src={dice} alt="dice"/>
			</header>
			<p> I am a Senior at Boston College, working towards a B.A. in Computer Science with a minor in biology and math. I am looking to start my career in Software Engineering.</p>
			<p> I am based in Boston and Las Vegas.</p>
			<p> Check out some of my projects on the side!</p>
			<News/>
		  </div>
		  
		</div>
	);
}

export default Home;