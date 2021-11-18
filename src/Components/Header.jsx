import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {StyledHeader} from '../styled/Header';

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                    <Navbar.Brand>
                        Walty Photos
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/photo'>Photo</Link></Nav.Link>
                    </Nav>
                </Navbar>
            </StyledHeader>
        </>
    );
};

export default Header;

