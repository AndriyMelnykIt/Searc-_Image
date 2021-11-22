import React, { useState, useEffect } from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

import Picture from './Picture';

import { getPhotosData } from '../api';

const Homepage = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');

  const getPhotosList = async () => {
    const photosArray = [];
    for (let i = 1; i <= 20; i++) {
      photosArray.push(await getPhotosData(i));
    }
    setPhotos(photosArray);
  };

  useEffect(() => {
    getPhotosList();
  }, []);

  return (
    <>
      <FormControl
        placeholder="Поле пошуку"
        aria-label="Username"
        onChange={(event) => {
		setSearch(event.target.value);
        }}
      />
      <Row>
        {photos.filter((result) => {
				  if (search === '') {
				    return result;
				  } if (result.data.name.toLowerCase().includes(search.toLowerCase())) {
				    return result;
				  }
				  return false;
        }).map((p) => (
          <Col key={p.data.name} xs={12} sm={12} md={6} lg={4} xl={3}>
            <Picture photos={p.data} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
