import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Picture = ({ photo }) => (
	<Card>
		<Card.Img variant="top" src={photo.webformatURL}/>
	</Card>
);

Picture.propTypes = {
	product: PropTypes.object.isRequired
};

export default Picture;
