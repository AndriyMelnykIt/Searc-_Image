import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Picture = ({photos}) => {
    return (
        <>
            <Card className='my-3 p-3 rounded text-center shadow mb-5 bg-while'>
                <Link to={`/photos/${photos.id}`}>
                    <Card.Img style={{width: '150px'}}
                        src={photos.sprites.front_default} variant='top'
                    />
                </Link>
            </Card>
        </>
    );
};

export default Picture;