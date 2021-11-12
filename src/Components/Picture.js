import React from 'react';
import {Card} from "react-bootstrap";

const Picture = ({photos}) => {
    return (
        <>
            <div className='my-3 p-3 rounded text-center shadow mb-5 bg-while'>
                <Card.Img style={{width: '8rem'}}
                          src={photos.sprites.front_default}
                />
                <Card.Body className={`${photos.types[0].type.name} rounded text-while`}>
                    <Card.Title>
                        <strong>
                            {photos.id} {photos.name}
                        </strong>
                    </Card.Title>
                </Card.Body>
            </div>
        </>
    );
};

export default Picture;