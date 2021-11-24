import React from 'react';
import { Container } from 'react-bootstrap';

import { Header } from './AllComponents';

const Pages = (props) => (
	<>
		<Container>
			<Header/>
			{props.children}
		</Container>
	</>
);

export default Pages;