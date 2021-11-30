import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import StyledPicture from '../../styled/Picture';

const Picture = ({photo}:any) => (
    <Card>
        <StyledPicture>
            <Card.Img variant="top" src={photo.webformatURL}/>
        </StyledPicture>
    </Card>
);

Picture.propTypes = {
    product: PropTypes.any.isRequired
};

export default Picture;
