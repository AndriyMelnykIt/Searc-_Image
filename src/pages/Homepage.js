import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Row, Col} from "react-bootstrap";
import Picture from "../Components/Picture";


const Homepage = () => {

    const [photos, setPhotos] = useState([]);

    const getPhotosList = async () => {
        let photosArray = [];
        for (let i = 1; i <= 20; i++) {
            photosArray.push(await getPhotosData(i))
        }
        setPhotos(photosArray)
    }

    const getPhotosData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return res;
    }

    useEffect(() => {
        getPhotosList();
    }, [])

    return (
        <>
            <Row>
                {photos.map(p => (
                    <Col key={p.data.name} xs={12} sm={12} md={6} lg={4} xl={3}>
                        <Picture photos={p.data}/>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Homepage;