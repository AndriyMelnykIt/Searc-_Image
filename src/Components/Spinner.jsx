import React from 'react';
import { Row, Spinner as BootstrapSpinner } from 'react-bootstrap';

const Spinner = () => (
	<div>
		<Row className="justify-content-md-center">
			<BootstrapSpinner animation="border" variant="primary"/>
		</Row>
	</div>
);

export default Spinner;
