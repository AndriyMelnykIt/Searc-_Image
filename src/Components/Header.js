import React from 'react';
import {Navbar, Container, FormControl} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container fluid>
                    <FormControl
                        placeholder="Поле пошуку"
                        aria-label="Username"
                    />
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;