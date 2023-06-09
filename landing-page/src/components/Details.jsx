import React from 'react';
import LandingPageImage from "../images/landing-page-image-1.png"

function Details(){
   return (
     <div>
        <div style={{textAlign:"center",marginBottom:"60px"}}>
        <h1 style={{color:"#0D2381",fontSize:"45px"}}>Achieving Operational Efficiency & Optimal Revenue</h1>
        <p style={{color:"grey",fontSize:"18px"}}>The myNapier Hospital Information System (HIS) is a modern solution that enables medical facilities to overcome the biggest challenges in <br/>healthcare delivery today. It was created with a special focus on affordability, scalability and ease-of-use.</p>
        </div>
        <div className='container details-cont'>
            <div className='row'>
                <div className='col-6'>
                    <img src={LandingPageImage} />
                </div>
                <div className='col-6' style={{marginTop:"7.5%",marginBottom:"7.5%"}}>
                    <div className='row' style={{height:"20%",margin:"35px 10px"}}>
                        <div className='col'>
                            <h3 style={{color:"rgb(39, 174, 96)"}}>Ease of Management</h3>
                            <p style={{color:"grey"}}>The solution allows a hospital to manage all departments, patients, and staff with ease.</p>
                        </div>
                    </div>
                    <div className='row' style={{height:"20%",margin:"35px 10px"}}>
                        <div className='col'>
                            <h3 style={{color:"rgb(39, 174, 96)"}}>Increased Revenue</h3>
                            <p style={{color:"grey"}}>The increased operational efficiency will reduce revenue leakages and stock pilferage, bringing about increased revenue.</p>
                        </div>
                    </div>
                    <div className='row' style={{height:"20%",margin:"35px 10px"}} >
                        <div className='col'>
                            <h3 style={{color:"rgb(39, 174, 96)"}}>Improved Patient Experience</h3>
                            <p style={{color:"grey"}}>A comprehensive Patient Management Portal ensures that patient wait times are minimised and better care is provided.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
     </div>

   );
}

export default Details;