import React from 'react';
import threeSixty from "../images/360-svg.svg";
import dollar from "../images/dollar.svg";
import quality from "../images/quality.svg";
import padlock from "../images/padlock.svg";
import scalability from "../images/scalability.svg";
import tap from "../images/tap.svg";

function KeyFeatures(){
   return (
       <div>
         <h1 style={{textAlign:"center",color:"#0D2381",fontSize:"45px",marginTop:"70px"}}>Key Features of MyNapier</h1>
         <div className='container' style={{textAlign:"center",marginTop:"100px",marginBottom:"100px"}}>
            <div className='row'>
                <div className='col-md-4' style={{padding:"20px 30px"}}>
                    <img src={threeSixty}></img>
                    <h3 style={{color:"rgb(39, 174, 96)"}}>360° Solution</h3>
                    <p style={{color:"#3A4562"}}>All-in-one clinic management solution with over 20 modules to cover every requirement for efficient operations and management of hospital</p>
                </div>
                <div className='col-md-4' style={{padding:"20px 30px"}}>
                    <img src={quality}></img>
                    <h3 style={{color:"rgb(39, 174, 96)"}}>Tested & Proven</h3>
                    <p style={{color:"#3A4562"}}>myNapier is a proven clinic management platform that has been implemented in reputable healthcare facilities. Backed with over 20 years of implementation experience, myNapier is a clear choice.</p>
                </div>
                <div className='col-md-4' style={{padding:"20px 30px"}}>
                <img src={scalability}></img>
                    <h3 style={{color:"rgb(39, 174, 96)"}}>Highly Scalable</h3>
                    <p style={{color:"#3A4562"}}>myNapier can fulfil most of the requirements of hospitals and chain of clinics. Our solution grows with your business. As your business scale up, our solution can easily support it.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4' style={{padding:"20px 30px"}}>
                    <img src={tap}></img>
                    <h3 style={{color:"rgb(39, 174, 96)"}}>Ease of Use</h3>
                    <p style={{color:"#3A4562"}}>Built with the customer needs in mind, myNapier is easy to learn and use. Functions within the modules have been tailored to meet the needs of most hospitals.</p>
                </div>
                <div className='col-md-4' style={{padding:"20px 30px"}}>
                    <img src={dollar}></img>
                    <h3 style={{color:"rgb(39, 174, 96)"}}>Cost Effective</h3>
                    <p style={{color:"#3A4562"}}>Subscription model removes the need for capital expenditure spending. No upfront total licence fee and minimal infra cost involved. We have an option for those that want to go one time licence fee too.</p>
                </div>
                <div className='col-md-4' style={{padding:"20px 30px"}}>
                    <img src={padlock}></img>
                    <h3 style={{color:"rgb(39, 174, 96)"}}>Enhanced Security</h3>
                    <p style={{color:"grey"}}>An experienced clinic management implementation services team ensures extensive protection from security breaches. This includes protecting computers, networks, programs and data from unauthorised access or damage.</p>
                </div>
            </div>
         </div>
         <hr></hr>
       </div>
   );
}

export default KeyFeatures;