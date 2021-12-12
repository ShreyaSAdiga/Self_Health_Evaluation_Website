import React from 'react';
import { useNavigate } from 'react-router-dom';
import hosp9 from './hosp9.jpg'

const Instructions = () => {
	const navigate=useNavigate();
    const nextpg=()=>{navigate("/check1");}
return (
<div style={{backgroundImage:`url(${hosp9})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100%",margin:"0px",marginTop:"0px"}}>
                <h1 style={{fontFamily: 'PT Sans Narrow',color:'#5499C7',fontSize:"50px"}}>INSTRUCTION PAGE</h1>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Lobster&family=Open+Sans+Condensed:wght@300&family=PT+Sans+Narrow&family=Petemoss&display=swap" rel="stylesheet"/>

                    <h2 style={{fontFamily: 'PT Sans Narrow',color:'#5499C7',fontSize:"50px"}}>Health Health Health</h2>
                    <p style={{fontFamily: 'PT Sans Narrow',color:'white',fontSize:"50px"}}> Instructions:-<br/>
                        We have provided you with checkboxes of possible symptoms you might have.<br/>
                        You will have to CHECK ALL SYMPTOMS that concern you at the moment.<br/>
                        We will then use that information to create a health report and display the disease you might have.<br/>
                    </p>
                    <br/>
                    <button onClick={nextpg} style={{fontSize:"30px",textAlign:"centre",marginLeft:"700px",marginBottom:"20px",border:"none",borderRadius:"10px"}}>Next</button>
</div>
);
};

export default Instructions;
