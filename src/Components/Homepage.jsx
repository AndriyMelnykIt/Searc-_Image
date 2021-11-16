import React, {useState, useEffect} from 'react';
import {Row, Col, Container, FormControl, Navbar} from 'react-bootstrap';
import Picture from './Picture';
import {getPhotosData} from '../api/api';


const Homepage = () => {

    const [photos, setPhotos] = useState([]);
    const [search, setSearch] = useState('');

    const getPhotosList = async () => {
        let photosArray = [];
        for (let i = 1; i <= 20; i++) {
            photosArray.push(await getPhotosData(i))
        }
        setPhotos(photosArray)
    }

    useEffect(() => {
        getPhotosList();
    }, [])


    return (

        <>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container fluid>
                    <FormControl
                        placeholder='Поле пошуку'
                        aria-label='Username'
                        onChange={ (event)=> {
                            setSearch(event.target.value)
                        }}
                        vaule={search}
                    />
                </Container>
            </Navbar>

            <Row>
                {photos.filter( result => {
                    if (search === "") {
                        return result;
                    } else if (result.data.name.toLowerCase().includes(search.toLowerCase())) {
                        return result;
                    }
                }).map(p => (
                    <Col key={p.data.name} xs={12} sm={12} md={6} lg={4} xl={3}>
                        <Picture photos={p.data}/>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Homepage;