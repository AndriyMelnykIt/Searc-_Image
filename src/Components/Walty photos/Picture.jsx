import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import StyledPicture from '../../styled/Picture';

const Picture = ({ photo }) => (
	<Card>
		<StyledPicture>
			<Card.Img variant="top" src={photo.webformatURL}/>
		</StyledPicture>
	</Card>
);

Picture.propTypes = {
	product: PropTypes.object.isRequired
};

export default Picture;
