import React from 'react';
import Navbar from './components/Navbar';
import hosp5 from './hosp6.jpg';
import Fade from 'react-reveal';

const About = () => {
	const stylee={backgroundColor:"#F2F3F4",padding:"30px",textAlign:"center",width:"99%",borderRadius:"50px",bottom:"0%"}
	const style_name={fontstyle:"bold",fontFamily:"PT Sans Narrow",fontSize:"50px",margin:"20px"};
return (
  			<div className = "container emp-profile" style={{backgroundImage:`url(${hosp5})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100vh"}}>
          <Navbar/>
				<form method = "">
					<div className = "row">
						<div className = "col-md-4">
							{/* <img src = {aboutus} style={{width:"100%"}} alt="about" /> */}
						</div>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
		        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
		        <link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Lobster&family=Open+Sans+Condensed:wght@300&family=PT+Sans+Narrow&family=Petemoss&display=swap" rel="stylesheet"/>
						<div className = "col-md-4">
							<div className = "profile-head">
              <Fade left>
                <h1 style={style_name}>ABOUT US</h1>
                </Fade>
                <Fade right>
								<p style={style_name}>We are an organization started in april of 2020.<br/>
                  We aim to make health evaluation accessible even to the remote areas, at a time when we are succumed to our houses.<br/>
                  We have put together this website where you can check your health at just your fingertips.<br/>
                  What are you waiting for??<br/>
                  Sign in to keep in track with your health!!
                </p>
                </Fade>
						</div>
					</div>
          </div>
				</form>
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

export default About;

