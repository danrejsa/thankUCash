import React, { Component } from 'react';
import logo from "../assets/thanku-logo.svg";
import About from './about';
import Business from './business';
import Blog from './blog';
import Login from './login';
import Home from './home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    DropdownItem } from 'reactstrap';

class NavBar extends Component {
    state = {
        isOpen: false
      };
    
    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() { 
        return ( 
          <Router>
          <header className="App-header">
        <Container >
            <Navbar light expand="md">
              <NavbarBrand><Link to='/'> <img src={logo} className="" alt="logo" /></Link><b/>
              <span style={{display:'flex', fontSize:'12px', color:'#fff'}}>a Connected Analytics ltd. Product</span>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                                   
                    <NavItem >
                    <NavLink style={{color:'#fff',margin:'20px', fontSize:'18px'}} ><Link className='link' to='/'>Home</Link></NavLink>
                  </NavItem>                 
                  <NavItem >
                    <NavLink  style={{color:'#fff',margin:'20px',fontSize:'18px'}} ><Link className='link' to='/business'>Business</Link></NavLink>
                  </NavItem> 
                  <NavItem >
                    <NavLink  style={{color:'#fff',margin:'20px',fontSize:'18px'}}  ><Link className='link' to='/about'>About us</Link></NavLink>
                  </NavItem> 
                  <NavItem > 
                    <NavLink  style={{color:'#fff',margin:'20px',fontSize:'18px'}} ><Link className='link' to='/blog'>Blog</Link></NavLink>
                  </NavItem> 
                  <NavItem>
                    <NavLink style={{color:'#fff',margin:'20px',fontSize:'18px'}}  ><Link className='link' to='/login'>Login</Link></NavLink>
                  </NavItem>                
                </Nav>
              </Collapse>
            </Navbar>
          </Container>
          </header>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/business' component={Business}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/login' component={Login}/>
          </Router>  );
    }
}
 
export default NavBar;