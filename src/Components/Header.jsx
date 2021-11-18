import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
            <div>
                <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                    <Navbar.Brand>
                        Walty Photos
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href='/Home'>Home</Nav.Link>
                        <Nav.Link href='/Photos'>Photos</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
    );
};

export default Header;