import React from 'react';
// import './home.css';
import './more.css';

if ('noModule' in HTMLScriptElement.prototype) {
    const d=document,s=d.createElement('script');s.type='module';
    s.src='https://w.behold.so/widget.js';d.body.appendChild(s);
}


function More() {
	return (
		<>
		  <h1 className="more-header">More about me!</h1>
		  <behold-widget feed-id="b9nye6Pg04m0rVUUD0nf"></behold-widget>
		  
		</>
	);
}

export default More;