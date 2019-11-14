import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../media/Logo.png';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';


function MainNav() {
    return (
        <Navbar bg="light" expand="md">
            <LinkContainer to='/'>
                <Navbar.Brand>
                    <img src={Logo} alt='Home' className='LogoImage' />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link > <FaShoppingCart />  Cart</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainNav;