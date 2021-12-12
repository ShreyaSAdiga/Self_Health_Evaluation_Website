import React from 'react';
import { useNavigate } from 'react-router-dom';
import hosp10 from './hosp10.jpg'

const Check1 = () => {
    const navigate=useNavigate();
    const Covid=()=>{
        var x1=window.document.getElementById("RunningNose");
        var x2=window.document.getElementById("SoreThroat");
        var x3=window.document.getElementById("LossOfTasteSmell");
        var x4=window.document.getElementById("BodyAche");
        var x5=window.document.getElementById("Fever");
        var x6=window.document.getElementById("Cough");
        var x7=window.document.getElementById("Tiredness");
        if(x1.checked==true && x2.checked==true && x3.checked==true)
        {
           navigate("/CovidConfirm");
        }
        else
        {
            navigate("/CovidNotConfirm");
        }
    }
    // const style1={border:"0px", align:"left",width:"100%",height:"2em",top:0};
    const style2={fontSize:"30px",display:"inline"};
return (
    <div style={{backgroundImage:`url(${hosp10})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100vh",margin:"0px",top:"0px",padding:"0px"}}>
        <h1>Welcome to the start page of the test!!</h1>
        <br/>
        <h2>First let's start the test for Covid 19</h2>
        <h2>Please tick the checkboxes below if you have any of the following symptoms</h2>
        <h2 style={style2}>Running nose:</h2><pre style={{display:"inline"}}>                            </pre><input type="checkbox" id="RunningNose" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Sore throat: </h2><pre style={{display:"inline"}}>                               </pre><input type="checkbox" id="SoreThroat" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Loss of taste and smell: </h2><pre style={{display:"inline"}}>           </pre><input type="checkbox" id="LossOfTasteSmell" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Body ache: </h2><pre style={{display:"inline"}}>                                 </pre><input type="checkbox" id="BodyAche" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Fever: </h2><pre style={{display:"inline"}}>                                         </pre><input type="checkbox" id="Fever" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Cough: </h2><pre style={{display:"inline"}}>                                       </pre><input type="checkbox" id="Cough" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Tiredness: </h2><pre style={{display:"inline"}}>                                  </pre><input type="checkbox" id="Tiredness" style={{transform:"scale(2)"}}/><br/>
        <input type="button" value="Submit" name="submit" onClick={Covid} style={{fontSize:"30px"}}/>
    </div>
);
};

export default Check1;
