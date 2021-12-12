import React from 'react';
import { useNavigate } from 'react-router-dom';
import hosp11 from './hosp11.jpg'

const CovidConfirm = () => {   
    const navigate=useNavigate();
    const style2={fontFamily: 'PT Sans Narrow',fontSize:"30px",display:"inline",justifyContent:"center",color:"white"};
    const back=()=>{navigate("/check1");}
    const next=()=>{navigate("/check2");}
    return (
    <div style={{backgroundImage:`url(${hosp11})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100vh",textAlign:"center"}}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Lobster&family=Open+Sans+Condensed:wght@300&family=PT+Sans+Narrow&family=Petemoss&display=swap" rel="stylesheet"/>
        <h1 style={style2}>TEST REPORT:</h1>
        <h1 style={style2}><br/><br/>Looking at the symptoms you are having, there is a high probability<br/>
        that you are infected with covid.<br/><br/>
        Please visit the nearby testing center soon.<br/>
        <br/>
        Take care of your health and do click on the link below to see the number of people infected near your place.<br/>You can also click on the bottomost link to get in contact with general physician.<br/>
        </h1><br/>
        <button value="back" onClick={back} style={{fontSize:"30px",margin:"10px"}}>Back</button><button value="next" onClick={next} style={{fontSize:"30px"}}>Next</button>
        <br/><br/>
            <a href="https://www.aarogyasetu.gov.in/" style={{color:"white",border:"10px",padding:"10px",fontSize:"80px",bottom:"0%"}}><i class="fa fa-heartbeat"></i></a>
            <a href="https://www.practo.com/search/doctors?results_type=doctor&q=%5B%7B%22word%22%3A%22general%20physician%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22subspeciality%22%7D%5D&city=Bangalore" target="blank"><i class="fa fa-user-md" style={{color:"white",fontSize:"80px",border:"10px",padding:"10px",marginRight:"0px"}}></i></a>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"/>
        
    </div>
);
};

export default CovidConfirm;
