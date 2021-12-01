import React from 'react';
import { Card } from 'react-bootstrap';

import StyledPicture from '../../styled/Picture';

type propsType = {
    photo: {webformatURL: string}
}

const Picture = ({photo}: propsType)  => (
    <Card>
        <StyledPicture>
            <Card.Img variant="top" src={photo.webformatURL}/>
        </StyledPicture>
    </Card>
);

export default Picture;
