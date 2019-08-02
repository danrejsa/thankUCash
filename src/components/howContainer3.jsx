import React, { Component } from "react";
import shop from "../assets/shop--icon.svg";
import reward from "../assets/rewards-phone.svg";
import tablet from "../assets/tablet.svg";
import quoteLeft from "../assets/quote-sign-left.svg";
import quoteRight from "../assets/quote-sign-right.svg";
import solidCircle from "../assets/solid-gradient-circle.svg";
import { Container } from "reactstrap";
import temi from "../assets/temitope-sailors-lounge.jpeg";
import dola from "../assets/dola-wings-sides.jpeg";
import amadi from "../assets/amadi.jpeg";

const HowContainer3 = () => {
  return (
    <Container>
      <div>
        <img
          style={{
            marginBottom: "-5rem",
            marginLeft: "43.9%",
            position: "sticky"
          }}
          src={solidCircle}
          alt="solidCircle"
        />
        <div className="mainVerify">
          <div className="verify3">
            <Container className="cert_cont3">
              <img src={quoteLeft} alt="quote-left" />
            </Container>

            <div class="cert3">
              <span>
                Definitely the best customer rewarding platform we have used at
                our outlet. It truly delivers on its promise and I will always
                recommend Thank U Cash to any online or offline merchant or
                store. You won’t find a better deal.
              </span>
            </div>
            <Container className="cert_cont3">
              <img src={quoteRight} alt="quote-right" />
            </Container>
            <Container style={{display:'flex', flexWrap:'wrap',  marginTop:"4.7rem"}}>
            <div style={{width:'23%'}}><img style={{width:'60px', height:"60px"}} src={temi} alt='temi' /></div>
            <div  style={{width:'68%'}}><h6 style={{marginTop:'.6rem'}}>Temitope Orilua</h6>
            <p style={{fontSize:'12px'}}>General Manager, Sailors Lounge</p></div>
              
            </Container>
          </div>
          <div class="verify3">
            <Container className="cert_cont3">
              <img src={quoteLeft} alt="quote-left" />
            </Container>

            <div class="cert3">
              <p id="cert3">
                {" "}
                It was the first rewards platform we have used and we got hooked
                on it. It is a great solution and we love it. The Uniqueness is
                that they upgrade the solution and try to offer more and more to
                a retailer like me
              </p>
            </div>
            <Container className="cert_cont3">
              <img src={quoteRight} alt="quote-right" />
            </Container>
            <Container style={{display:'flex', flexWrap:'wrap', marginTop:"4.6rem"}}>
            <div style={{width:'23%'}}><img style={{width:'60px', height:"60px"}} src={dola} alt='dola' /></div>
            <div  style={{width:'68%'}}><h6 style={{marginTop:'.6rem'}}>Dola</h6>
            <p style={{fontSize:'12px'}}>Founder Wings’n’Sides</p></div>
              
            </Container>
          </div>

          <div className="verify3">
            <Container className="cert_cont3">
              <img src={quoteLeft} alt="quote-left" />
            </Container>
            
            <div className="cert3">
              <p id="cert3">
                {" "}
                We love it and it has really changed our business. We started
                our lagos store and tried Thank U Cash, our customers love it,
                we love it and it’s always rewarding. We have seen growth in the
                businesses and customers keeps coming back to earn and shop. I
                personally love it.
              </p>
            </div>
            <Container className="cert_cont3">
              <img src={quoteRight} alt="quote-right" />
            </Container>
            <Container style={{display:'flex', flexWrap:'wrap', marginTop:"3.2rem"}}>
            <div style={{width:'23%'}}><img style={{width:'60px', height:"60px"}} src={amadi} alt='amadi' /></div>
            <div  style={{width:'68%'}}><h6 style={{marginTop:'.6rem'}}>Amadi Lawrence</h6>
            <p style={{fontSize:'12px'}}>Customer, ThankUCash</p></div>
              
            </Container>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowContainer3;
