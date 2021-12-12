import React from 'react';
import { useNavigate } from 'react-router-dom';
import hosp11 from './hosp11.jpg'
const CovidConfirm = () => {
    const navigate=useNavigate();
    // const style2={fontSize:"30px",display:"inline"};
    const style2={fontFamily: 'PT Sans Narrow',fontSize:"30px",display:"inline",justifyContent:"center",color:"white"};
    const back=()=>{navigate("/");}
    const next=()=>{navigate("/check2");}
return (
    <div style={{backgroundImage:`url(${hosp11})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100vh",textAlign:"center"}}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Lobster&family=Open+Sans+Condensed:wght@300&family=PT+Sans+Narrow&family=Petemoss&display=swap" rel="stylesheet"/>
        <h1 style={style2}>TEST REPORT:</h1>
        <h1 style={style2}><br/><br/>Looking at the symptoms you have selected, <br/>it seems that you might not be having any serious disease.<br/>
        But it is better that you go for a checkup to a general physician.<br/><br/>Do connect with the doctor by clicking the link below!<br/></h1><br/>
        <a href="https://www.practo.com/search/doctors?results_type=doctor&q=%5B%7B%22word%22%3A%22general%20physician%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22subspeciality%22%7D%5D&city=Bangalore" target="blank"><i class="fa fa-user-md" style={{color:"white",fontSize:"80px",border:"10px",padding:"10px",textAlign:"center",width:"100%"}}></i></a>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"/>
        <button value="back" onClick={back} style={{fontSize:"30px",margin:"10px"}}>Home</button>
        {/* <button value="back" onClick={back} style={{fontSize:"30px",margin:"10px"}}>Back</button><button value="next" onClick={next} style={{fontSize:"30px"}}>Next</button> */}
    </div>
);
};

export default CovidConfirm;
