import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { StyledHeader } from '../styled/Header';

const Header = () => (
	<StyledHeader>
		<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
			<Container to='/'>
				<Navbar.Brand>
					Walty Photos
				</Navbar.Brand>
			</Container>
			<Nav className='mr-auto'>
				<Nav.Link as={Link} to='/'>
					Home
				</Nav.Link>
				<Nav.Link as={Link} to='/photos'>
					Photos
				</Nav.Link>
			</Nav>
		</Navbar>
	</StyledHeader>
);

export default Header;
