import React from 'react';
import { Card } from 'react-bootstrap';

import { StyledPictureCard } from '../styled/Picture';

const Picture = ({ photos }) => (
	<div className="my-3 p-3 rounded text-center shadow mb-5 bg-while">
		<StyledPictureCard>
			<div>
				<Card.Img src={ photos.sprites.front_default } />
			</div>
		</StyledPictureCard>
		<Card.Body className={`${ photos.types[0].type.name } rounded text-while`}>
			<Card.Title>
				<strong>
					{ photos.id }
					{' '}
					{ photos.name }
				</strong>
			</Card.Title>
		</Card.Body>
	</div>
);

export default Picture;
