import React, { Component, Fragment } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import solidCircle from "../assets/solid-gradient-circle.svg";

class Login extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container className="login-form">
          <img
            style={{
              marginBottom: "-5.1rem",
              marginLeft: "52.9%",
              position: "sticky"
            }}
            src={solidCircle}
            alt="solidCircle"
          />
          <div className="business-container-right-items" id="login-form-div">
            <Container>
              <Form>
                <FormGroup>
                  <Label className="form">
                    <h3 style={{ marginLeft: "193px", marginTop: "2rem" }}>
                      Login
                    </h3>
                  </Label>
                  <br />
                  <Label for="username">Username</Label>
                  <Input type="text" name="username" id="username" required />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    required
                  />
                </FormGroup>
              
                <Button style={{ float: "right",marginBottom:'1rem' }} color="info" block>
                  Login
                </Button>
              
                <a  href="#">
                  <h6 >Forget Password?</h6>
                </a>
              
              </Form>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Login;
