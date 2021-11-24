import React from 'react';
import { Card } from 'react-bootstrap';


const Picture = ({ photo }) => (
	<Card>
		<Card.Img variant='top' src={ photo.webformatURL} />
	</Card>
);

export default Picture;
