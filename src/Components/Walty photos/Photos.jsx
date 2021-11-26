import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Picture, Spinner } from '../index';

const Photos = (props) => {
    const { photos, loading } = props;

    if (loading) {
        return <Spinner/>;
    }

    return (
        <div>
            {photos.length ? (
                <Card className="mb-3">
                    {photos.map (photo => {
                        return <Picture key={photo.id} photo={photo}/>;
                    })}
                </Card>
            ) : (
                <span>No picture</span>
            )}
        </div>
    );
};

Photos.propTypes = {
    photos: PropTypes.array.isRequired,
    loading: PropTypes.bool
};
const mapStateToProps = state => {
    return {
        photos: state.rootReducer.photos,
        loading: state.rootReducer.loading
    };
};

export default connect (mapStateToProps, null) (Photos);
