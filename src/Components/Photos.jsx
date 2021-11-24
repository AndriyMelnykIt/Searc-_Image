import React from 'react';
import { CardGroup } from 'react-bootstrap';

import { Picture, Spinner } from './AllComponents';

const Photos = (props) => {
	const [photos, loading] = props;

	if (loading) {
		return <Spinner />;
	}

	return (
		<div>
			{photos.length ? (
				<CardGroup>
					{photos.map (photo => {
						return <Picture key={photo.id} photo={photo}/>;
					})}
				</CardGroup>
			) : (
				<span>No photos more</span>
			)}
		</div>
	);
};

export default Photos;