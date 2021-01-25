import React from 'react';
import 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

// style sheets 
import '../Styles/Header.css';


class Header extends React.Component{


    render(){

    
        return(

            <>
                {/* Made a custom navbar, currently not linked to sections. just for visuals */}
                <Navbar id="navbar" className="fixed-top" expand='md'>
                        <Navbar.Toggle />
                        {/* Home */}
                        <Nav.Item className="navbar-nav nav-justified w-200 text-center">
                            <Link to='/' className="nav-link d-flex flex-column" > <span className="navbar-brand nav-brand mb-0 h1">THE GALLERY</span></Link>
                            </Nav.Item>
                        <Navbar.Collapse>
                        <Nav className="navbar-nav mr-auto">
                            {/* About  */}
                            <Nav.Item className="navbar-nav nav-justified w-200 text-center">
                            <Link to='/about' className="nav-link d-flex flex-column"> <span className="navbar-brand nav-links mb-0 h1">ABOUT</span></Link>
                            </Nav.Item>
                            {/* Events */}
                            <Nav.Item className="navbar-nav nav-justified w-200 text-center">
                            <Link to='/events' className="nav-link d-flex flex-column" ><span className="navbar-brand nav-links mb-0 h1">EVENTS</span></Link>
                            </Nav.Item>
                            {/* Shop */}
                            <Nav.Item className="navbar-nav nav-justified w-200 text-center">
                            <Link to='/shop' className="nav-link d-flex flex-column" ><span className="navbar-brand nav-links mb-0 h1">SHOP</span></Link>
                            </Nav.Item>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>


            </>

        );
    }
} export default Header;