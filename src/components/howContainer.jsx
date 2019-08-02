import React, { Component } from "react";
import fundsMoney from "../assets/funds--money.svg";
import Globe from "../assets/globe.svg";
import Pos from "../assets/pos.svg";
import solidCircle from "../assets/solid-gradient-circle.svg";
import { Container } from "reactstrap";

const HowContainer = () => {
  return (
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
        <div className="verify">
          <div className="cert">
            <img src={fundsMoney} alt="funds--money" />
          </div>
          <div className="cert2">
            <p>Pay With Cash</p>
          </div>
          <div class="cert3">
            <span>
              In the Thank U Cash app, take a picture of your receipt to earn
              your reward. You will get an SMS notifying you of points earned.
            </span>
          </div>
        </div>
        <div class="verify">
          <div class="cert">
            <img src={Globe} alt="globe" />
          </div>
          <div class="cert2">
            <p>Pay Online</p>
          </div>
          <div class="cert3">
            <p id="cert3">
              {" "}
              After an online purchase, enter your Thank U Cash number or phone
              number to earn your rewards. You will get an SMS notifying you of
              points earned.
            </p>
          </div>
        </div>

        <div className="verify">
          <div className="cert">
            <img src={Pos} alt="pos" />
          </div>
          <div className="cert2">
            <span>Pay with Debit Card</span>
          </div>
          <div className="cert3">
            <p id="cert3">
              {" "}
              After a purchase with your debit card at any location that accepts
              Thank U Cash, enter your phone number to get your reward
              instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowContainer;
