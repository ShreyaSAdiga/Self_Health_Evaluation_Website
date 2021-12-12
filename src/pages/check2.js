import React from 'react';
import { useNavigate } from 'react-router-dom';
import hosp10 from './hosp10.jpg'

const Check1 = () => {
    const navigate=useNavigate();
    const CheckList=()=>{
        const x1=window.document.getElementById("ChestPain");
        const x2=window.document.getElementById("ProfuseSweating");
        const x3=window.document.getElementById("Palpitations");
        const x4=window.document.getElementById("Rashes");
        const x5=window.document.getElementById("SkinItching");
        const x6=window.document.getElementById("SkinDecoloration");
        const x7=window.document.getElementById("Giddiness");
        const x8=window.document.getElementById("Tiredness");
        const x9=window.document.getElementById("Nausea");
        const x10=window.document.getElementById("LossOfAppetite");
        const x11=window.document.getElementById("IrregularSleep");
        const x12=window.document.getElementById("Forgetfulness");
        const x13=window.document.getElementById("LackMovements");
        const x14=window.document.getElementById("JointPain");
        const x15=window.document.getElementById("SwollenLimbs");
        const x16=window.document.getElementById("BackPain");
        if(x1==null && x2==null && x3==null && x10==null && x8==null && x9==null && x11==null && x7==null && x13==null && x12==null && x14==null && x15==null && x16==null)
        {
            navigate("/thank");
        }
        else{
        if(x1.checked==true || x2.checked==true || x3.checked==true)
        {
           navigate("/cardio");
        }
        else if(x4.checked==true || x5.checked==true || x6.checked==true)
        {
            navigate("/dermato");
        }
        else if(x10.checked==true || x8.checked==true || x9.checked==true ||x11.checked==true)
        {
            navigate("/general");
        }
        else if(x7.checked==true || x13.checked==true || x12.checked==true)
        {
            navigate("/neurologist");
        }
        else if(x14.checked==true || x15.checked==true || x16.checked==true)
        {
            navigate("/orthopaedic");
        }
        else
        {
            navigate("/thank");
        }
    }
    }
    const style2={fontSize:"30px",display:"inline",margin:"20px"};
    const style3={fontSize:"20px",margin:"20px"};
return (
    <div style={{backgroundImage:`url(${hosp10})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100%",margin:"0px",top:"0px",padding:"0px"}}>
        <br/><br/>
        <h1 style={style2}>Continue to check the checkboxes!!</h1>
        <br/><br/>
        <h2 style={style3}>Please tick the checkboxes below if you have any of the following symptoms:</h2>
        <h2 style={style2}>Chest Pain:<pre style={{display:"inline"}}>                   </pre></h2><input type="checkbox" id="ChestPain" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Profuse sweating: </h2><pre style={{display:"inline"}}>                               </pre><input type="checkbox" id="ProfuseSweating" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Palpitations: </h2><pre style={{display:"inline"}}>                                        </pre><input type="checkbox" id="Palpitations" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Rashes: </h2><pre style={{display:"inline"}}>                                                 </pre><input type="checkbox" id="Rashes" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Skin Itching: </h2><pre style={{display:"inline"}}>                                        </pre><input type="checkbox" id="SkinItching" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Skin Decoloration: </h2><pre style={{display:"inline"}}>                              </pre><input type="checkbox" id="SkinDecoloration" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Giddiness: </h2><pre style={{display:"inline"}}>                                            </pre><input type="checkbox" id="Giddiness" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Forgetfulness: </h2><pre style={{display:"inline"}}>                                      </pre><input type="checkbox" id="Forgetfulness" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Lack of coordination in movements:</h2><pre style={{display:"inline"}}></pre><input type="checkbox" id="LackMovements" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Joint Pain: </h2><pre style={{display:"inline"}}>                                            </pre><input type="checkbox" id="JointPain" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Swollen limbs: </h2><pre style={{display:"inline"}}>                                     </pre><input type="checkbox" id="SwollenLimbs" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Back pain: </h2><pre style={{display:"inline"}}>                                            </pre><input type="checkbox" id="BackPain" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Tiredness: </h2><pre style={{display:"inline"}}>                                             </pre><input type="checkbox" id="Tiredness" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Nausea: </h2><pre style={{display:"inline"}}>                                                 </pre><input type="checkbox" id="Nausea" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Loss Of Appetite: </h2><pre style={{display:"inline"}}>                                </pre><input type="checkbox" id="LossOfAppetite" style={{transform:"scale(2)"}}/><br/>
        <h2 style={style2}>Irregular Sleep Cycle: </h2><pre style={{display:"inline"}}>                        </pre><input type="checkbox" id="IrregularSleep" style={{transform:"scale(2)"}}/><br/>
        <input type="button" value="Submit" name="submit" onClick={CheckList} style={{fontSize:"30px",marginLeft:"200px"}}/>
    </div>
);
};

export default Check1;
