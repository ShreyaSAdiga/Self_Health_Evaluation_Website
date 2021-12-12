import React from 'react';

import hosp2 from './hosp3.jpg';
import Navbar from './components/Navbar';
import Fade from 'react-reveal';

const Contact = () => {
	const style1={fontFamily: "'Libre Baskerville', serif",fontSize: "30px"};
	const style2={fontFamily:" 'Ubuntu', sans-serif",fontSize: "50px"};
	const style3={backgroundImage:`url(${hosp2})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"150vh"};
	const style_name1={fontstyle:"bold",fontFamily:"PT Sans Narrow",fontSize:"50px",margin:"20px",color:"red"};
	const style_name={fontstyle:"bold",fontFamily:"PT Sans Narrow",fontSize:"30px",margin:"20px"};
	const style_name2={fontstyle:"bold",fontFamily:"PT Sans Narrow",fontSize:"30px",margin:"20px",color:"#1F618D"};
	const stylee={backgroundColor:"#F2F3F4",padding:"30px",textAlign:"center",width:"96%",borderRadius:"50px"}
return (
	<div style={style3}>
	<Navbar/>
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
	<link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Lobster&family=Open+Sans+Condensed:wght@300&family=PT+Sans+Narrow&family=Petemoss&display=swap" rel="stylesheet"/>
   	   <div>

		<div className = "col-md-4">
			<div className = "profile-head">
				<Fade right>
				<h1 style={style_name1}>Thank you for visiting HEALTH EVAL</h1><br/><br/>
				</Fade>
				<Fade left>
				<h3 style={style_name2}>We hope you are satisfied with our services.<br/> IN CASE OF ANY QUERIES FEEL FREE TO CONTACT US :D</h3>
				</Fade>
				<Fade right>
				<p style={style_name}> LANDLINE NUMBER :<br/> <a href> 080-26547875 </a>
						<br/><br/>
						PHONE NUMBERS : <br/>
						1.<a href> +91 9876543210 </a><br/>
						2.<a href> +91 9874563828 </a>
						<br/>
						<br/>
						E-MAIL : <br/>
						<a href>health.eval@gmail.com</a>
						<br/><br/>
						Head office address:<br/> #420,<br/>3rd cross,<br/>5th main,<br/>near PES University,<br/>Ring road,<br/>Bengaluru, 560060
				</p>
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
	</div>
	</div>
);
};

export default Contact;
