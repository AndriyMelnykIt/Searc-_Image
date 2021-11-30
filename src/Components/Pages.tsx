import React from 'react';
import { Container } from 'react-bootstrap';

import { Header } from './index';

const Pages = (props:any) => (
	<>
		<Container>
			<Header/>
			{props.children}
		</Container>
	</>
);

export default Pages;
