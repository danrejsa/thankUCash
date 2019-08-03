import React, { Component } from 'react';
import Phone from './phone';
import FrontText from './frontText';
import HowItWorks from "./howItWorks";
import HowItWorks2 from "./howItWorks2";
import HowContainer from "./howContainer";
import HowContainer2 from "./howContainer2";
import HowContainer3 from "./howContainer3";
import four11 from "../assets/411.png";
import adiba from "../assets/Adiba.png";
import dana from "../assets/Dana-Air.png";
import everest from "../assets/Eve-Rest.png";
import fruit from "../assets/Fruit2go.png";
import game from "../assets/Game.png";
import lasgidi from '../assets/Lasgidi-Buka.png'
import genesis from "../assets/Genesis.png";
import payporte from "../assets/Payporte.png";
import sailour from "../assets/Sailour.png";
import rx from "../assets/Rx.png";
import lcc from "../assets/lcc.png";
import meat from "../assets/meat-Up.png";
import green from "../assets/green-grill.png";
import trebet from "../assets/Trebet.png";
import wing from "../assets/WingsnSides.png";
import bubble from  "../assets/bubble-tii.png";
import coffe from  "../assets/coffe-plus.png";
import instagram from "../assets/instagram-icon.svg";
import facebook from "../assets/facebook-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import {
  Button, Form, FormGroup, Label, Input,
  Container
   } from 'reactstrap';

class Home extends Component {
    state = {  }
    render() { 
        return ( <div>

             <FrontText />
          <Phone />
         
        <div style={{width:'100%',  marginTop:'15rem'}}>
        <div className="main-container" >
          <h3>How It Works</h3></div>
         <div className="container-fluid" ></div>
         
            <div style={{marginTop:'-51rem'}}>
              <HowItWorks />             

              <Container>
                <HowContainer />
              </Container>
              <HowItWorks />  
              <Container>
              <HowContainer2 />
              </Container>
              <div className='merchants'>  <h1>See some of our Merchants</h1></div>
              <div className='merchant-background'>

<div className='merchant-background-image'>
<span className='icons' id='icon1'><img  src={four11} alt='411'/></span> 
<span className='icons' id='icon2'> <img src={dana} alt='dana-air'/></span> 
             <span className='icons' id='icon3'>   <img src={everest} alt='everest'/></span>
             <span className='icons' id='icon4'> <img src={fruit} alt='fruit'/></span>
             <span className='icons' id='icon12'>  <img src={wing} alt='wing'/></span> 
              <span className='icons' id='icon5'>  <img src={game} alt='game'/></span>
              <span className='icons' id='icon6'> <img src={genesis} alt='genesis'/></span>
                <span className='icons' id='icon7'><img src={lasgidi} alt='lasgidi'/></span>
               <span className='icons' id='icon8'> <img src={payporte} alt='payporte'/></span>
               <span className='icons' id='icon9'> <img src={rx} alt='rx-drugs'/></span>
                <span className='icons' id='icon10'><img src={sailour} alt='sailour'/></span>
                <span className='icons' id='icon11'> <img src={trebet} alt='trebet'/></span>
           
               <span className='icons' id='icon13'> <img src={bubble} alt='bubble'/></span>
               <span className='icons' id='icon14'> <img src={coffe} alt='coffe'/></span>
                <span className='icons' id='icon15'><img src={green} alt='green'/></span>
                <span className='icons' id='icon16'> <img src={lcc} alt='lcc'/></span>
             <span className='icons' id='icon17'>   <img src={meat} alt='meat'/></span>
             <span className='icons' id='icon18'>   <img src={everest} alt='everest'/></span>
               <span className='icons' id='icon19'> <img src={fruit} alt='fruit'/></span>
              <span className='icons' id='icon20'>  <img src={game} alt='game'/></span>
              <span className='icons' id='icon21'> <img src={genesis} alt='genesis'/></span>
                <span className='icons' id='icon22'><img src={lasgidi} alt='lasgidi'/></span>
               <span className='icons' id='icon23'> <img src={payporte} alt='payporte'/></span>
               <span className='icons' id='icon24'> <img src={rx} alt='rx-drugs'/></span>	
               <span className='icons' id='icon25'>  <img src={adiba} alt='adiba'/></span>	
      </div>


             
              </div>
              <div className='merchants'>  <h1>People love our product.</h1></div>
              <HowContainer3 />
              <div className='subscribe'>  <h5>Be the first to get the latest update</h5></div>
             <Container style={{  marginBottom:'7rem'}}>
             <Form inline style={{  justifyContent:'center'}}>       
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">          
          <Input style={{width:'300px'}} type="text" name="subscribe" id="subscribe" placeholder="Enter your email address" />
        </FormGroup>
        <Button style={{background:'#442563'}}>Subscribe</Button>
      </Form>
             </Container>
        </div>

        </div>
        <footer>
          <div className='footer-div'>
            <h6><strong>Company</strong></h6>
            <p><a className='footer-text' href='#'>About us</a></p>
            <p><a className='footer-text' href='#'>Blog</a></p>
          </div>
          <div className='footer-div'>
          <h6><strong>Products</strong></h6>
            <p><a className='footer-text' href='#'>Merchants</a></p>
            <p><a className='footer-text' href='#'>Features</a></p>
            <p><a className='footer-text' href='#'>Android App</a></p>
            <p><a className='footer-text' href='#'>iOS App</a></p>
            <p><a className='footer-text' href='#'>LCC Redeem</a></p>
          </div>
          <div className='footer-div'>
          <h6><strong>Legal</strong></h6>
            <p><a className='footer-text' href='#'>Terms of Service</a></p>
            <p><a className='footer-text' href='#'>Privacy Policy</a></p>
          </div>
          <div className='footer-div'>
          <h6><strong>Connect with us</strong></h6>
          <div style={{display:'flex', wrapFlex:'wrap', marginBottom:'1rem'}}>          
                <img className='social' src={instagram} alt='instagram'/>
                <img  className='social'  src={facebook} alt='facebook'/>
                <img  className='social'  src={twitter} alt='twitter'/>
               
          </div>
          <p className='footer-text'>hello@thankucash.com</p>
            <p><a className='footer-text' href='tel:+ 234 809 042 6105'>+ 234 809 042 6105</a></p>
            <p><a className='footer-text' href='tel:+ 234 809 042 3576'>+ 234 809 042 3576</a></p>
          </div>
        </footer>
      </div>
      );
    }
}
 
export default Home;