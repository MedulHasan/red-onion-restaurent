import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

import Brand from '../../../images/logo2.png';
import './Header.css'

const Header = () => {
    return (
        <Navbar className="header" bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <img style={{ width: '100px' }} src={Brand} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">
                            <FontAwesomeIcon icon={faCartPlus} />
                        </Nav.Link>
                        <Nav.Link href="#home">Login</Nav.Link>
                        <Nav.Link className="sign-up" href="#link">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;