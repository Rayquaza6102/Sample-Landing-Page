import React from 'react';
import slideOne from "../images/slide1.png";
import slideTwo from "../images/slide2.png";
import slideThree from "../images/slide3.png";
import slideFour from "../images/slide4.png";

function Carousel() {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1 style={{ color: "#0D2381", fontSize: "45px" }}>Experiencing the Platform</h1>
        <h6 style={{ color: "#0D2381", textAlign: "center", marginTop: "20px", color: "#3A4562", marginBottom: "40px" }}>With out-of-the-box features and an easy to use interface, the platform is designed for rapid implementation.</h6>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={slideOne} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slideTwo} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slideThree} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slideFour} alt="Fourth slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
