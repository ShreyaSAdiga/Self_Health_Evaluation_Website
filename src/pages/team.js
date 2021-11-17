import React from 'react';
import Fade from 'react-reveal';

const Teams = () => {
	
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
	<link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Lobster&display=swap" rel="stylesheet"/><Fade left>
	<h1 style={{fontFamily:'Lobster',fontFamily:'Fruktur',color:'orange'}}>Welcome to the Health eval</h1>
	</Fade>
	<img src={{url:'D:\web_technologies\miniproject\final\logo.jpeg'}} />
	</div>
);
};

export default Teams;
