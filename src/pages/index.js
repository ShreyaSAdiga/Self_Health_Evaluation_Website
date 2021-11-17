import React from 'react';
import image from './logo.jpeg';

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
		<div>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
        	<form style={{margin:"100px",float:"left",background:"pink",border:"groove"}}>
        	<h3 style={style1}>USERNAME:</h3>  
        	<input type="text" style={style1}/>
        	<br/> 
        	<h3 style={style1}>PASSWORD:</h3>
        	<input type="password" style={style1}/>
        	{/* <i class="far fa-eye" id="togglePassword" style={{cursor: "pointer"}}></i> */}
        	<br/>
        	<h3 style={style1}>ROBOT VERIFICATION:</h3>
        	<input type="checkbox" style={style1}/>
        	<br/>
        	<span style={{margin:"100px"}}><input type="submit" name="Sign in" value="Sign in" style={style1}/></span>
        	</form> 
        </div>

		</span>
	);
};

export default Home;
