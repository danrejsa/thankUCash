import React, { Component } from "react";
import phoneCase from "../assets/phone-case.png";
import Poster from "../assets/poster.png";
import phoneCard from "../assets/card-group.png";
import thankuVid from "../ThankUCashAlert.mp4";
import thankuVid2 from "../ThankUCashAlert.webm";
import { Container } from "reactstrap";

class Phone extends Component {
  state = {  }

  componentDidMount = () => {
    this.player();
  }

  player = ()=> {
    this.refs.video.play();
  }

  render() { 
    return ( <Container className="phone">
    <img
      src={phoneCase}
      style={{ position: "absolute", width: "238px", height: "500px" }}
      alt="phoneCase"
    />


  <video  ref='video' autoplay muted loop
      style={{
        position: "absolute",
        width: "800px",
        borderRadius: "10px",
        height: "350px",
        marginTop: "-1rem"
      }}
          
    >
      <source src={thankuVid} type="video/mp4" />
      <source src={thankuVid2} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  
    <img
      src={phoneCard}
      style={{
        position: "absolute",
        width: "280px",
        borderRadius: "10px",
        height: "140px",
        marginTop: "3.5rem"
      }}
      alt="phoneCard"
    />
  </Container> );
  }
}
 
export default Phone;
