import React from 'react';
import Navbar from './components/Navbar';
import image from './logo.jpeg';
import Fade from 'react-reveal';
import wallpaper from './hosp7.jpg'

const Home = () => {
	const style_name={fontstyle:"bold",fontFamily:"PT Sans Narrow",fontSize:"50px",margin:"20px"};
	const styleImg={backgroundImage:`url(${image})`,height:"80px", width:"80px",align:"center"}
	// const style1={fontstyle:"bold", fontFamily:"cursive", display:"inline",margin:"10px",fontSize:"30px"};
	const stylee={backgroundColor:"#F2F3F4",padding:"30px",textAlign:"center",width:"99%",borderRadius:"50px"}
	return (
		<div style={{backgroundImage:`url(${wallpaper})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100%"}}>
			<Navbar/>
		<span style={{float:"left",margin:"100px"}}>

		<img src={image} style={styleImg}/>
		</span>
		<span>		
		<h3 style={style_name}>HEALTH EVAL</h3>
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
        <h1 style={{fontFamily: 'PT Sans Narrow',color:'blue',fontSize:"50px"}}>Welcome to Health eval!!</h1>
        </Fade>
        {/* <Fade right>
	    <img src={image} style={styleImg} />
        </Fade> */}
        <br/>
        <Fade right >
        <h1 style={{fontFamily: 'PT Sans Narrow',color:'#1F618D',fontSize:"50px",float:"left"}}>Are you suffering from any diseases? Want to evaluate it all by yourself?<br/>
        Then you are in the right place!</h1>
        </Fade>
		<Fade left>
        <h1 style={{fontFamily: 'PT Sans Narrow',color:'#1F618D',fontSize:"50px",float:"left",margin:"10px",left:"20px"}}>Sign in to start your quiz!<br/></h1>
	    </Fade>
		</div>
		<footer className="footer" style={stylee}>
			<a href="#" style={{color:"black",border:"10px",padding:"10px"}}><i className="fa fa-facebook-official"></i></a>
			<a href="#" style={{color:"black",border:"10px",padding:"10px"}}><i className="fa fa-pinterest-p"></i></a>
			<a href="#" style={{color:"black",border:"10px",padding:"10px"}}><i className="fa fa-twitter"></i></a>
			<a href="#" style={{color:"black",border:"10px",padding:"10px"}}><i className="fa fa-flickr"></i></a>
			<a href="#" style={{color:"black",border:"10px",padding:"10px"}}><i className="fa fa-linkedin"></i></a>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"/>
		</footer>
		</div>
	);
};

export default Home;
