import React from 'react';
import './home.css';
import pic from "../assets/images/pic.jpg";

function More() {
	return (
		<>
		  <h1>More about me!</h1>
          <div className="sbsBox">
		  	<img className="picture" alt="picture_of_me" src={pic} />
		  </div>
		</>
	);
}

export default More;