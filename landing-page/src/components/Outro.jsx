import React from 'react';
import TrialForm from './TrialForm';

function Outro(){
   return (
    <div>
        <div className='container' style={{marginTop:"80px",width:"80%",marginLeft:"10%",marginRight:"10%",marginBottom:"5%"}}>
            <div className='row'>
                <div className='col-6' style={{marginTop:"15%"}}>
                    <h3 style={{color:"#0D2381",fontSize:"45px"}}>Get Started Today</h3>
                    <p style={{color:"grey",fontSize:"17px"}}>We look forward to helping your healthcare organisation along with the all important process of digital transformation. Regardless your situation,<br/> we have a solution awaiting.</p>
                   <ul style={{ listStyleType: 'none' }}>
                       <li className="green-checkmark" style={{color:"grey",fontSize:"17px"}}>Tailored Solutions</li>
                       <li className="green-checkmark" style={{color:"grey",fontSize:"17px"}}>Responsive in 24 hours</li>
                       <li className="green-checkmark" style={{color:"grey",fontSize:"17px"}}>comprehensive trial and demo</li>
                       <li className="green-checkmark" style={{color:"grey",fontSize:"17px"}}>Quick setup</li>
                   </ul>
                </div>
                <div className='col-6' style={{marginLeft:"50px",width:"45%"}}><TrialForm /></div>
            </div>
        </div>
        <hr/>
    </div>
   );
}

export default Outro;