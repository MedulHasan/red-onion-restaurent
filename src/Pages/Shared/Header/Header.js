import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

import Brand from '../../../images/logo2.png';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className="header" bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <img style={{ width: '300px' }} src={Brand} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">
                            <FontAwesomeIcon icon={faCartPlus} />
                        </Nav.Link>
                        {
                            user?.email ? (
                                <>
                                    <Nav.Link className="logout mx-3" as={HashLink} to="/" onClick={logOut}>Logout</Nav.Link>
                                    <Navbar.Text>
                                        Signed in as: <a href="#login">{user.displayName && user.displayName}</a>
                                    </Navbar.Text>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                                    <Nav.Link className="sign-up" as={HashLink} to="/signup">Sign up</Nav.Link>
                                </>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;