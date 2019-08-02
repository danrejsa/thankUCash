import React, { Component } from "react";
import shop from "../assets/shop--icon.svg";
import reward from "../assets/rewards-phone.svg";
import tablet from "../assets/tablet.svg";
import solidCircle from "../assets/solid-gradient-circle.svg";
import { Container } from "reactstrap";

const HowContainer2 = () => {
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
            <img src={shop} alt="shop--icon" />
          </div>
          <div className="cert2">
            <p>Rewards In-store</p>
          </div>
          <div class="cert3">
            <span>
              Before a purchase, enter your phone number or Thank U Cash number
              into the POS machine to get your balance and spend.
            </span>
          </div>
        </div>
        <div class="verify">
          <div class="cert">
            <img src={reward} alt="reward" />
          </div>
          <div class="cert2">
            <p>Rewards Online</p>
          </div>
          <div class="cert3">
            <p id="cert3">
              {" "}
              When making a payment online, you will be asked for your Thank U
              Cash number or phone number, enter it and get your balance to
              spend.
            </p>
          </div>
        </div>

        <div className="verify">
          <div className="cert">
            <img src={tablet} alt="tablet" />
          </div>
          <div className="cert2">
            <span>Rewards In App</span>
          </div>
          <div className="cert3">
            <p id="cert3">
              {" "}
              Under the BIll Payment option in the Thank U Cash app, select the
              bill you want to pay for and your Thank U Cash account will be
              debited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowContainer2;
