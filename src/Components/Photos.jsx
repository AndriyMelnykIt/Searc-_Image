import React, { useEffect, useState } from 'react';
import { Col, FormControl, Row } from 'react-bootstrap';

import { getPhotosData } from '../api';

import { Picture, Spinner } from './Pages';

const Photos = () => {
	const [photos, setPhotos] = useState ([]);
	const [loading, setLoading] = useState (true);
	const [search, setSearch] = useState ('');

	const getPhotosList = async () => {
		const photosArray = [];
		for (let i = 1; i <= 20; i++) {
			photosArray.push (await getPhotosData (i));
		}
		setLoading (false);
		setPhotos (photosArray);
	};

	useEffect (() => {
		getPhotosList ();
	}, []);


	return (
		<div>
			<FormControl
				placeholder="Поле пошуку"
				aria-label="Username"
				onChange={(event) => {
					setSearch (event.target.value);
				}}
			/>
			{loading ? (
				<Spinner/>
			) : (
				<Row>
					{photos.filter ((result) => {
						if (search === '') {
							return result;
						}
						if (result.data.name.toLowerCase ().includes (search.toLowerCase ())) {
							return result;
						}
						return false;
					}).map ((p) => (
						<Col key={p.data.name} xs={12} sm={12} md={6} lg={4} xl={3}>
							<Picture photos={p.data}/>
						</Col>
					))}
				</Row>
			)}
		</div>
	);
};

export default Photos;