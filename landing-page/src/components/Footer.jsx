import React from 'react';
import FooterLogo from '../images/FooterLogo.png';

function Footer(){
    return (
        <div style={{backgroundColor:"rgb(247, 247, 247)"}}>
            <div className='container' style={{paddingTop:"40px"}}>
                <div className='row'>
                    <div className='col-6' >
                        <img src={FooterLogo} style={{height:"150px",width:"250px"}}></img>
                        <p sstyle={{color:"grey"}}>Headquartered in Singapore, Napier Healthcare is leading provider globally for innovative, technology-enabled solutions for hospitals, long term care providers, nursing homes, health insurance and other industries with healthcare touchpoints.</p>
                    </div>
                    <div className='col-3' >
                        <h3 style={{color:"#0D2381"}}>Solutions</h3>
                        <ul style={{ listStyleType: 'none' ,color:"grey",marginTop:"50px" }}>
                            <li style={{margin:"10px 0"}}>Hospitals</li>
                            <li style={{margin:"10px 0"}}>Nursing Homes</li>
                            <li style={{margin:"10px 0"}}>Home care</li>
                            <li style={{margin:"10px 0"}}>Occupational Health and Safety</li>
                            <li style={{margin:"10px 0"}}>Remote Monitoring</li>
                        </ul>
                    </div>
                    <div className='col-3' >
                        <h3 style={{color:"#0D2381"}}>Products</h3>
                        <ul style={{ listStyleType: 'none',color:"grey",marginTop:"50px" }}>
                            <li style={{margin:"10px 0"}}>Hospital Information System</li>
                            <li style={{margin:"10px 0"}}>Intermediatte And Long Term Care Suite</li>
                            <li style={{margin:"10px 0"}}>Home Care</li>
                            <li style={{margin:"10px 0"}}>Regulatory Medical System</li>
                            <li style={{margin:"10px 0"}}>Remote Patient Monitoring</li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className='row d-flex' style={{ whiteSpace: 'nowrap',marginTop:"10px",marginBottom:"10px"}}>
                  <div className='col-2 '> <a href="" style={{textDecoration:"none",color:"grey"}}>About Us</a></div>
                  <div className='col-2 '><a href="" style={{textDecoration:"none",color:"grey"}}>Our Expertise</a></div>
                  <div className='col-2 '><a href="" style={{textDecoration:"none",color:"grey"}}>Careers</a></div>
                  <div className='col-2 '><a href="" style={{textDecoration:"none",color:"grey"}}>Partners</a></div>
                  <div className='col-2 '><a href="" style={{textDecoration:"none",color:"grey"}}>Meaningful Use</a></div>
                  <div className='col-2 '><a href="" style={{textDecoration:"none",color:"grey"}}>Contact Us</a></div>
                </div>
                <hr></hr>
                <div className='row' style={{marginTop:"10px",marginBottom:"10px"}}>
                    <div className='col-6'>
                        <div>Copyright © 1996-2023 Napier Healthcare Solutions Pte. Ltd. All rights reserved.</div>
                        <a href="" style={{textDecoration:"none",color:"blue"}}>Privacy Policy</a>
                        <span style={{color:"blue",marginLeft:"5px",marginRight:"5px"}}>  | </span>
                        <a href="" style={{textDecoration:"none",color:"blue"}}>Disclaimer</a>
                    </div>
                    <div className='col-6'></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;