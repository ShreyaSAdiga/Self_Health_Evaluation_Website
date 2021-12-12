import React from 'react';
import { useNavigate } from 'react-router-dom';
import hosp11 from './hosp11.jpg'
const CovidNotConfirm = () => {
    const navigate=useNavigate();
    // const style2={fontSize:"30px",display:"inline"};
    const style2={fontFamily: 'PT Sans Narrow',fontSize:"30px",display:"inline",justifyContent:"center",color:"white"};
    const back=()=>{navigate("/check1");}
    const next=()=>{navigate("/check2");}
return (
    <div style={{backgroundImage:`url(${hosp11})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100vh",textAlign:"center"}}>
        <h1 style={style2}>TEST REPORT:</h1>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Lobster&family=Open+Sans+Condensed:wght@300&family=PT+Sans+Narrow&family=Petemoss&display=swap" rel="stylesheet"/>
        <h1 style={style2}><br/><br/>Looking at the symptoms you have selected, <br/>it seems that you might not be having Covid.<br/><br/>Do take up the next quiz also for having a check on your health!<br/></h1><br/>
        <button value="back" onClick={back} style={{fontSize:"30px",margin:"10px"}}>Back</button><button value="next" onClick={next} style={{fontSize:"30px"}}>Next</button>
    </div>
);
};

export default CovidNotConfirm;
