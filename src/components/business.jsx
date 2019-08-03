import React, { Component,Fragment } from "react";
import { Container, Button } from "reactstrap";
import google from "../assets/googlelaunchpad.jpeg";
import ycstartup from "../assets/ycstartup.jpg";
import knowCustomers from "../assets/know-customer.svg";
import smarkMarketing from "../assets/marketing-spend.svg";
import revenue from "../assets/revenue.svg";
import attractCustomer from "../assets/attract-customer.svg";
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
import mtn from "../assets/mtn-logo.png";
import glo from "../assets/glo-logo.png";
import airtel from "../assets/airtel-logo.png";
import phcn from "../assets/PHCN-logo.png";


class Business extends Component {
  state = {};
  render() {
    return (
        <Fragment>
        
        <Container style={{ marginBottom:'18rem'}}>
       
      <Container style={{ marginLeft:'auto',marginTop:'-33rem', position:'absolute'}}>
        
        <div className="business">
          <div className="business-container" id="business-container-left">
            <h2 style={{ marginTop:'5rem'}}>
              We bring the customers,
              <br /> and you say Thank U!
            </h2>
            <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              Thank U Cash is a platform proven to improve <br />
              customer loyalty and increase your sales
            </p>
            <div className="join-now-btn">
              <span style={{ marginLeft: "1.2rem" }}>JOIN NOW</span>{" "}
              <i style={{ marginLeft: "0.6rem" }} class="material-icons">
                arrow_forward
              </i>
            </div>
            <h5>
              Did you hear?
              <br />
              We are now backed by
            </h5>
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
              <div style={{ width: "46%" }}>
                {" "}
                <img
                  style={{
                    height: "70px",
                    width: "200px",
                    borderRadius: "5px"
                  }}
                  src={google}
                  alt="google"
                />
              </div>
              <div style={{ width: "20%" }}>
                {" "}
                <img
                  style={{ height: "70px", width: "70px", borderRadius: "5px" }}
                  src={ycstartup}
                  alt="ycstartup"
                />
              </div>
            </div>
          </div>

          <div className="business-container2" right>
            <div className="business-container-right">
              <div
                className="business-container-right-items"
                id="business-container-right-items-1"
              >
  <div class="cer">
  <span className='business-img' >
            <img src={attractCustomer}  className='business-img-item' alt="attract-customers" />
          </span>
          </div>
          <div class="cert2">
            <p>Attract customers</p>
          </div>
          <div class="cert3">
            <p id="cert3">
              {" "}
              Let us help you drive new customers to your business like never before.
            </p>
          </div>

              </div>
              <div
                className="business-container-right-items"
                id="business-container-right-items-2"
              >
                   <div class="cer">
                   <span className='business-img' >
            <img src={smarkMarketing}  className='business-img-item'  alt="smart-marketing" />
         </span>
          </div>
          <div class="cert2">
            <p>Smart marketing</p>
          </div>
          <div class="cert3">
            <p id="cert3">
              {" "}
              Target directly your customers and build a 1:1 relationship with each customer.
            </p>
          </div>
              </div>
              <div
                className="business-container-right-items"
                id="business-container-right-items-3"
              > <div class="cer">
              <span className='business-img' >
              <img src={knowCustomers} className='business-img-item' alt="know-your-customers" />
              </span>
            </div>
            <div class="cert2">
              <p>Know your customers</p>
            </div>
            <div class="cert3">
              <p id="cert3">
                {" "}
                With our in-house tools you can track your customers behavior.
              </p>
            </div></div>
              <div
                className="business-container-right-items"
                id="business-container-right-items-2"
              > <div class="cer">
                   <span className='business-img' >
              <img src={revenue}  className='business-img-item' alt="revenue" />
              </span>
            </div>
            <div class="cert2">
              <p>Increase your Revenue</p>
            </div>
            <div class="cert3">
              <p id="cert3">
                {" "}
                You can only but increase your revenue month on month.
              </p>
            </div></div>
            </div>
          </div>
        </div>
      </Container>      
      </Container>


      <div className='merchants'>  <h1>We service every sector</h1></div>
     
      <Container>
      <div>      
        <div className="mainVerify">
          <div className="verify3">
            <Container  style={{width:'80%',marginTop:'3rem',marginBottom:'2rem', marginLeft:'auto', marginRight:'auto'}}>
              <h3 >Supermarkets</h3>
            </Container>

            <div style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>
              <Container style={{textAlign:'left'}}>
              Thank U Cash provides everything you need to grow your business and make your customers happy. We make sure you do not worry too much
               about how to manage your customers. Get intouch with us today.
              </Container>
            </div>
            <div style={{background:'#F9FBFD', height:'120px', borderRadius:'0 0 9px 9px' }}>
            <Container style={{display:'flex', flexWrap:'wrap',  marginTop:"4.7rem", backround:'#333'}}>
            <Container style={{width:'30%',marginTop:"1.8rem" }}><img style={{width:'60px', height:"60px"}} src={adiba} alt='adiba' /></Container>
            <Container  style={{width:'30%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src={trebet} alt='trebet' /></Container>
            <Container  style={{width:'30%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src={game} alt='game' /></Container> 
            </Container>
            </div>
          </div>
          <div class="verify3">
          <Container  style={{width:'80%',marginTop:'3rem',marginBottom:'2rem', marginLeft:'auto', marginRight:'auto'}}>
              <h3 >Aviation</h3>
            </Container>

            <div style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>
              <Container style={{textAlign:'left'}}>
              Travelling is already a necessity, and at Thank U Cash we want to make a lifestyle of saying Thank U to customers. With Thank U Cash,
               we have made it easy for airlines to appreciate customers.
              </Container>
            </div>
            <div style={{background:'#F9FBFD', height:'120px',borderRadius:'0 0 9px 9px'  }}>
            <Container style={{display:'flex', flexWrap:'wrap',  marginTop:"4.7rem", backround:'#333'}}>
            <Container style={{width:'30%',marginTop:"1.8rem" }}><img style={{width:'60px', height:"60px"}} src=''alt='' /></Container>
            <Container  style={{width:'30%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src={dana} alt='dana' /></Container>
            <Container  style={{width:'30%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src='' alt='' /></Container> 
            </Container>
            </div>
          </div>

          <div className="verify3">
          <Container  style={{width:'80%',marginTop:'3rem',marginBottom:'2rem', marginLeft:'auto', marginRight:'auto'}}>
              <h3 >Entertainment</h3>
            </Container>

            <div style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>
              <Container style={{textAlign:'left'}}>
              It is important to relax after working so hard, we have made it easy for cinemas, lounges, and businesses to appreciate their customers as they relax.
               Get in touch with us to see how we can help you.
              </Container>
            </div>
            <div style={{background:'#F9FBFD', height:'120px',borderRadius:'0 0 9px 9px'  }}>
            <Container style={{display:'flex', flexWrap:'wrap',  marginTop:"4.7rem", backround:'#333'}}>
            <Container style={{width:'30%',marginTop:"1.8rem" }}><img style={{width:'60px', height:"60px"}} src={genesis} alt='genesis' /></Container>
            <Container  style={{width:'30%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src='' alt='' /></Container>
            <Container  style={{width:'30%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src={sailour} alt='sailour' /></Container> 
            </Container>
            </div>
          </div>
        </div>
      </div>
    </Container>




    
    <Container>
      <div>      
        <div className="mainVerify">
          <div className="verify3">
            <Container  style={{width:'80%',marginTop:'3rem',marginBottom:'2rem', marginLeft:'auto', marginRight:'auto'}}>
              <h3 >Food</h3>
            </Container>

            <div style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>
              <Container style={{textAlign:'left'}}>
              Food is where the heart is. We have partnered with several restaurants to say Thank U, and keep customers coming back for more. Do you run a bukka, a fruit bar, or even a 
              food truck? We can help you. Give us a call to begin the process.
              </Container>
            </div>
            <div style={{background:'#F9FBFD', height:'120px', borderRadius:'0 0 9px 9px',marginTop:"3.2rem" }}>
            <Container style={{display:'flex', flexWrap:'wrap'}}>
            <Container style={{width:'30%',marginTop:"1.8rem" }}><img style={{width:'60px', height:"60px"}} src={everest} alt='everest' /></Container>
            <Container  style={{width:'30%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src={fruit} alt='fruit' /></Container>
            <Container  style={{width:'30%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src={wing} alt='wing' /></Container> 
            </Container>
            </div>
          </div>
          <div class="verify3">
          <Container  style={{width:'80%',marginTop:'3rem',marginBottom:'2rem', marginLeft:'auto', marginRight:'auto'}}>
              <h3 >Utilities</h3>
            </Container>

            <div style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>
              <Container style={{textAlign:'left'}}>
              Whether it is a daily, weekly or monthly bill, you can say Thank U to your customers and 
              expand your base. Get in touch to begin the process.
              </Container>
            </div>
            <div style={{background:'#F9FBFD', height:'120px',borderRadius:'0 0 9px 9px', marginTop:"9.2rem"  }}>
            <Container style={{display:'flex', flexWrap:'wrap'}}>
            <Container style={{width:'23%',marginTop:"1.8rem" }}><img style={{width:'60px', height:"60px"}} src={mtn} alt='mtn' /></Container>
            <Container  style={{width:'23%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src={glo} alt='glo' /></Container>
            <Container  style={{width:'23%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src={airtel} alt='airtel' /></Container>
            <Container  style={{width:'23%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src={phcn} alt='phcn' /></Container> 
            </Container>
            </div>
          </div>

          <div className="verify3">
          <Container  style={{width:'80%',marginTop:'3rem',marginBottom:'2rem', marginLeft:'auto', marginRight:'auto'}}>
              <h3 >Online Merchant</h3>
            </Container>

            <div style={{width:'80%', marginLeft:'auto', marginRight:'auto'}}>
              <Container style={{textAlign:'left'}}>
              It is not only physical stores that have the benefit of saying Thank U to their customers. If your business is online you can say Thank U too. We have created simple plugins and codes that 
              you can integrate online. Get in touch to begin the process.
              </Container>
            </div>
            <div style={{background:'#F9FBFD', height:'120px',borderRadius:'0 0 9px 9px' , marginTop:"3.2rem" }}>
            <Container style={{display:'flex', flexWrap:'wrap', }}>
            <Container style={{width:'30%',marginTop:"1.8rem" }}><img style={{width:'60px', height:"60px"}} src={payporte} alt='payporte' /></Container>
            <Container  style={{width:'30%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src='' alt='' /></Container>
            <Container  style={{width:'30%',marginTop:"1.8rem"}}> <img style={{width:'60px', height:"60px"}} src={lcc} alt='lcc' /></Container> 
            </Container>
            </div>
          </div>
        </div>
      </div>
    </Container>





    <hr/>
   
        <Container>
            <div style={{width:'100%', display:'flex', flexWrap:'wrap', marginTop:'3rem'}}>
            <div style={{width:'45%'}}>
                <h2>Ready to get started?</h2>
                <p>Get in touch, or create an account.</p>
            </div>
            <div style={{width:'45%'}}>
            <Button color="primary" style={{marginLeft:"10rem"}}>Create account</Button>{' '}
            <Button outline color="primary" style={{marginLeft:"1.5rem"}}>Contact sales</Button>{' '}
            </div>
            </div>
        </Container>
        <div className='merchants'>  <h1>Join Our Merchants</h1></div>
<div className='merchant-background'style={{height:'500px',overflow:'hidden',marginBottom:'-5rem'}} >
<div className='merchant-background-image' style={{marginBottom:'-16rem'}}>
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
              <footer className='footer-business'>
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
      </Fragment>
    );
  }
}

export default Business;
