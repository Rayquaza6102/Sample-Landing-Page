import React from 'react';
import TrialForm from "./TrialForm";
import inpatientThumb1 from "../images/inpatient-video-thumb-1.png";
import inpatientThumb2 from "../images/inpatient-video-thumb-2.png";
import logo from "../images/orive-logo.png";
import bannerLogo from "../images/banner-logo.png";
import bgsvg from '../images/large-triangles.svg';

function Intro() {
  return (
    <div className="container intro-cont mx-0" style={{backgroundImage: `url(${bgsvg})`}}>
       <div className="wrapper">
       <div className="row">
        <img src={logo} style={ {height : "150px" , width : "550px", marginTop : "20px",marginLeft:"20px"}} alt="Company Logo" />
      </div>
      <div className="row">
        <div className="col-7">
          <img src={bannerLogo} style={{marginTop : "80px",marginLeft : "30px",height : "50px" , width : "200px"}} alt="Company Logo" />
          <h2 style={{fontSize:"50px",color: "white",paddingTop:"30px",paddingLeft:"35px"}}>Cloud-Based Hospital <br /> Information System</h2>
          <div style={{fontSize:"20px",color: "white",paddingTop:"10px",paddingLeft:"35px"}}>An all-encompassing solution that allows the transformation of<br /> hospital operations and delivery of enhanced patient care.</div>
          <div className="container">
            <div className="row" style={{fontSize:"20px",color: "white",paddingTop:"35px",paddingLeft:"25px"}}>
              <div className='col-6'>
                <a href="https://www.youtube.com/watch?v=D2iA-hW2eeM" style={{textDecoration: "none"}}>
                  <img src={inpatientThumb1} alt="Inpatient photo" style={{borderRadius : "10px",display: "inline"}} />
                  <h5 style={{ display: "inline",marginLeft:"10px",color: "white"  }}>Inpatient demo</h5>
                </a>
              </div>   
              <div className='col-6'>
                <a href="https://www.youtube.com/watch?v=D2iA-hW2eeM" style={{textDecoration: "none"}}>
                  <img src={inpatientThumb2} alt="Outpatient photo" style={{borderRadius : "10px",display: "inline"}} />
                  <h5 style={{ display: "inline",marginLeft:"10px",color: "white" }}>Outpatient  demo</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
          <div className="col-5"><TrialForm /></div>
        </div>
       </div>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#FFFFFF" fillOpacity="1" d="M0,160L30,138.7C60,117,120,75,180,85.3C240,96,300,160,360,181.3C420,203,480,181,540,160C600,139,660,117,720,96C780,75,840,53,900,53.3C960,53,1020,75,1080,101.3C1140,128,1200,160,1260,170.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>

    </div>
  );
}

export default Intro;
