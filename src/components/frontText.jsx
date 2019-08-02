import React, { Component } from "react";
import background from "../assets/gradient-ring.svg";
import appStore from "../assets/appstore-button@2x.png";
import playStore from "../assets/playstore-button@2x.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Fronttext extends Component {
  state = {};
  render() {
    return (
      <Container className="frontText">
        <div
        className='home-link-bckgrd'
         
        />
        <h4 style={{fontSize:'44px'}}>Get Instant Cash, When you spend</h4>
        <p>No Gimmicks, One Point equals One Naira (1 point = N1)</p>
        <div>
          <img
            src={appStore}
            style={{ width: "150px", height: "50px", margin: "12px" }}
            alt="appStore"
          />
          <img
            src={playStore}
            style={{ width: "150px", height: "50px", margin: "12px" }}
            alt="playStore"
          />
        </div>
      </Container>
    );
  }
}

export default Fronttext;
