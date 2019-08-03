import React, { Component , Fragment} from 'react';
import { Container } from 'reactstrap';
import members from '../assets/users.svg';
import founded from '../assets/sunset.svg';
import merchant from '../assets/package.svg';
import saved from '../assets/credit-card.svg';
import simeon from '../assets/simeon.png';
import madonna from '../assets/Madonna.png';
import suraj from '../assets/Suraj.png';
import damilola from '../assets/Damilola.png';
import harshal from '../assets/Harshal.png';
import abdullahi from '../assets/abdullahiolakunleegunjobi.png';
import emeka from '../assets/Emeka-Okoye.jpeg';
import idris from '../assets/Idris-Alubankudi-Saliu.jpg';
import nike from '../assets/Nike-Anani.jpeg';
import onyeka from '../assets/Onyeka-Akumah.jpg';
import rasheed from '../assets/Rasheed-Olaoluwa.png';
import tunji from '../assets/Tunji-Eleso.jpg';
import yele from '../assets/Yele.jpg';
import niche from '../assets/niche.png';
import guan from '../assets/guan.png';
import venture from '../assets/VenturesPlatform.jpg';
import capital from '../assets/click-capital.png'
import micro from '../assets/Microtraction-logo.jpg';
import victor from '../assets/victor.png';
import instagram from "../assets/instagram-icon.svg";
import facebook from "../assets/facebook-icon.svg";
import twitter from "../assets/twitter-icon.svg";


class About extends Component {
    state = {  }
    render() { 
        return ( <Fragment>
            <Container >
            <Container style={{position:'absolute', marginTop:'-40rem' }}>
            <div className='subscribe' style={{color:'#fff'}}>  <h1>About us</h1></div>
            <div style={{display:'flex', flexWrap:'wrap', width:'100%', color:"#fff",  marginTop:'6rem'}}>
                <div style={{width:"40%", height:'200px', marginRight:'20%'}}>
                    <h2>Mission</h2>
                    <p>Our mission is simple. Connect businesses to their customers like never before where 
                        customers save on every purchase, and businesses grow through every transaction.</p>
                </div>
                <div style={{width:"40%",height:'200px'}}>
                <h2>Our Story</h2>
                    <p>We are a group of young enthusiasts, that believe in one vision:
                         to help businesses thrive with happy and loyal customers.</p>
                </div>
                
            </div>
            <div style={{background:"#fff"}}><hr /></div>            
            <div className='icons'>
                <div className="icons-div" >
                    <img className="icons-div-image" src={members} alt='members'/><br/>
                    <p>24,363 members</p>
                </div>
                <div className="icons-div" >
                <img className="icons-div-image"  src={saved} alt='saved'/><br/>
                    <p>N13,000,345 saved</p>
                </div>
                <div className="icons-div" >
                <img className="icons-div-image"  src={founded} alt='founded'/><br/>
                    <p>Founded 2018</p>
                </div>
                <div className="icons-div" >
                <img className="icons-div-image"  src={merchant} alt='merchants'/><br/>
                    <p>150 merchants</p>
                </div>
            </div>
            </Container>


            <div className='subscribe' > 
             <h5 className='about-header'>Management Team</h5>
             </div>
            <div style={{display:'flex', flexWrap:'wrap', width: '100%'}}>
                <Container className="image-container">
                    <div className='image-vector' >
                        <div className='image-vector-inner' >
                    <img className='image-vector-inner-image' src={simeon} alt='simeon'/></div></div><br/>
                   <a href="#"> <h6>Simeon Ononobi</h6></a>
                    <p>Co-founder/Deputy CTO</p>
                </Container >
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={madonna} alt='madonna'/></div></div><br/>
                    <a href="#"><h6>Madonna Ononobi</h6></a>
                    <p>Co-founder/CSO/CMO</p>
                </Container>
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={suraj} alt='suraj'/></div></div><br/>
                    <a href="#"><h6>Suraj Supekar</h6></a>
                    <p>Co-founder/CTO</p>
                </Container>
            </div>



            <div style={{display:'flex', flexWrap:'wrap', width: '100%', marginTop:'3rem'}}>
                <Container className="image-container">
                    <div className='image-vector' >
                        <div className='image-vector-inner' >
                    <img className='image-vector-inner-image' src={harshal} alt='harshal'/></div></div><br/>
                    <a href="#"><h6>Harshal Gandole</h6></a>
                    <p>Co-founder/Deputy CTO</p>
                </Container >
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={damilola} alt='damilola'/></div></div><br/>
                    <a href="#"><h6>Damilola  Ojurongbe</h6></a>
                    <p>Head of Operations</p>
                </Container>
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={abdullahi} alt='abdullahi'/></div></div><br/>
                   <a href='#'> <h6>Abdullahi Olakunle Egunjobi</h6></a>
                    <p>Merchant Success Manager</p>
                </Container>
            </div>


            <div className='subscribe' >  
            <h5 className='about-header'>Team Members</h5></div>


            <div style={{display:'flex', flexWrap:'wrap', width: '100%'}}>
                <Container className="image-container">
                    <div className='image-vector' >
                        <div className='image-vector-inner' >
                    <img className='image-vector-inner-image' src={simeon} alt='simeon'/></div></div><br/>
                   <a href="#"> <h6>Simeon Ononobi</h6></a>
                    <p>Co-founder/Deputy CTO</p>
                </Container >
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={madonna} alt='madonna'/></div></div><br/>
                    <a href="#"><h6>Madonna Ononobi</h6></a>
                    <p>Co-founder/CSO/CMO</p>
                </Container>
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={suraj} alt='suraj'/></div></div><br/>
                    <a href="#"><h6>Suraj Supekar</h6></a>
                    <p>Co-founder/CTO</p>
                </Container>
            </div>







            <div className='subscribe' > 
             <h5 className='about-header'>Board / Advisory</h5>
             </div>
            <div style={{display:'flex', flexWrap:'wrap', width: '100%'}}>
                <Container className="image-container">
                    <div className='image-vector' >
                        <div className='image-vector-inner' >
                    <img className='image-vector-inner-image' src={rasheed} alt='rasheed'/></div></div><br/>
                   <a href="#"> <h6>Rasheed Olaoluwa</h6></a>
                    <p>Board Chairman</p>
                </Container >
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={nike} alt='nike'/></div></div><br/>
                    <a href="#"><h6>Nike Anani</h6></a>
                    <p>Board Member</p>
                </Container>
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={tunji} alt='tunji'/></div></div><br/>
                    <a href="#"><h6>Tunji Elesor</h6></a>
                    <p>Advisory Board Member</p>
                </Container>
            </div>



            <div style={{display:'flex', flexWrap:'wrap', width: '100%', marginTop:'5rem'}}>
                <Container className="image-container">
                    <div className='image-vector' >
                        <div className='image-vector-inner' >
                    <img className='image-vector-inner-image' src={onyeka} alt='onyeka'/></div></div><br/>
                    <a href="#"><h6>Onyeka Akumah</h6></a>
                    <p>Advisory Board Member</p>
                </Container >
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={idris} alt='idris'/></div></div><br/>
                    <a href="#"><h6>Idris Alubankudi Saliu</h6></a>
                    <p>Advisory Board Member</p>
                </Container>
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={emeka} alt='emeka'/></div></div><br/>
                   <a href='#'> <h6>Emeka okoye</h6></a>
                    <p>Advisory Board Member</p>
                </Container>
            </div>
            <div style={{display:'flex', flexWrap:'wrap', width: '100%', marginTop:'5rem'}}>
                <Container className="image-container">
                    <div  >
                        <div  >
                    <img className='image-vector-inner-image' src="" alt=''/></div></div><br/>
                   
                </Container >
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner' >
                <img className='image-vector-inner-image' src={yele} alt='yele'/></div></div><br/>
                    <a href="#"><h6>Yele Badamosi</h6></a>
                    <p>Advisory Board Member</p>
                </Container>
                <Container className="image-container">
                <div >
                        <div  >
                <img className='image-vector-inner-image' src="" alt=''/></div></div><br/>
                  
                </Container>
            </div>






            <div className='subscribe' > 
             <h5 className='about-header'>Investors</h5>
             </div>
            <div style={{display:'flex', flexWrap:'wrap', width: '100%'}}>
                <Container className="image-container">
                    <div  >
                        <div >
                    <img className='image-vector-inner-image' src={niche} alt='niche'/></div></div><br/>
                   <a href="#"> <h6>Niche Capital</h6></a>
                    
                </Container >
                <Container className="image-container">
                <div >
                        <div  >
                <img className='image-vector-inner-image' src={micro} alt='micro'/></div></div><br/>
                    <a href="#"><h6>Microtraction</h6></a>
                   
                </Container>
                <Container className="image-container">
                <div  >
                        <div  >
                <img className='image-vector-inner-image' src={venture} alt='venture'/></div></div><br/>
                    <a href="#"><h6>Ventures Platform</h6></a>
                  
                </Container>
            </div>



            <div style={{display:'flex', flexWrap:'wrap', width: '100%', marginTop:'5rem'}}>
                <Container className="image-container">
                    <div  >
                        <div  >
                    <img className='image-vector-inner-image' src={guan} alt='guan'/></div></div><br/>
                    <a href="#"><h6>Guan Comapany LTD</h6></a>
                    
                </Container >
                <Container className="image-container">
                <div className='image-vector' >
                        <div className='image-vector-inner'>
                <img className='image-vector-inner-image' src={victor} alt='victor'/></div></div><br/>
                    <a href="#"><h6>Victor Ohioze Imevbore</h6></a>
                    <p>Advisory Board Member</p>
                </Container>
                <Container className="image-container">
                <div  >
                        <div  >
                <img className='image-vector-inner-image' src={capital} alt='capital'/></div></div><br/>
                   <a href='#'> <h6>Click Capital</h6></a>
                                    </Container>
            </div>








            
            </Container>
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
        </Fragment> );
    }
}
 
export default About;