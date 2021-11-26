import React from 'react';
import { Container } from 'react-bootstrap';

import { Header } from './index';

const Pages = (props) => (
	<>
		<Container>
			<Header/>
			{props.children}
		</Container>
	</>
);

export default Pages;
