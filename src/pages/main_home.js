import React from 'react';
import image from './logo.jpeg';
import Fade from 'react-reveal';

const Home = () => {
	const style_name={fontstyle:"bold",fontFamily:"cursive",fontSize:"50px",margin:"20px"};
	const styleImg={backgroundImage:`url(${image})`,height:"200px", width:"200px",margin:"100px"}
	const style1={fontstyle:"bold", fontFamily:"cursive", display:"inline",margin:"10px",fontSize:"30px"};
	return (
		<span>
		<span style={{float:"left",background:"pink",margin:"100px",border:"dotted"}}>

		<h3 style={style_name}>HEALTH EVAL</h3>
		<img src={image} style={styleImg}/>
		</span>
        <div
	    style={{
	    	// display: 'flex',
	    	justifyContent: 'Right',
	    	alignItems: 'Right',
	    	height: '100vh'
	    }}
	    >
		<link rel="preconnect" href="https://fonts.googleapis.com"/>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
		<link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Lobster&family=Open+Sans+Condensed:wght@300&family=PT+Sans+Narrow&family=Petemoss&display=swap" rel="stylesheet"/>
        <Fade left>
        <h1 style={{fontFamily: 'PT Sans Narrow',color:'#5499C7',fontSize:"50px"}}>Welcome to Health eval!!</h1>
        </Fade>
        {/* <Fade right>
	    <img src={image} style={styleImg} />
        </Fade> */}
        <br/>
        <Fade right >
        <h1 style={{fontFamily: 'PT Sans Narrow',color:'#1F618D',fontSize:"50px"}}>Are you suffering from any diseases? Want to evaluate it all by yourself?<br/>
        Then you are in the right place!</h1>
        </Fade>
	    </div>
		</span>
	);
};

export default Home;
