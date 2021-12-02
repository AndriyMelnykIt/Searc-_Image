import React from 'react';
import { connect } from 'react-redux';

import StyledPhotos from '../../styled/Photos';

import { Picture, Spinner } from '../index';

type propsType = {
    photos: string[],
    loading: string[]
}

const Photos = (props: propsType) => {
    const {photos, loading} = props;

    if (loading) {
        return <Spinner/>;
    }

    return (
        <div>
            {photos.length ? (
                <StyledPhotos className="mb-3">
                    {photos.map((photo: string) => {
                        // @ts-ignore
                        return <Picture key={photo.id} photo={photo}/>;
                    })}
                </StyledPhotos>
            ) : (
                <span>No picture</span>
            )}
        </div>
    );
};

const mapStateToProps = (state: { rootReducer: { photos: string; loading: boolean; }; }) => ({
    photos: state.rootReducer.photos,
    loading: state.rootReducer.loading
});

export default connect(mapStateToProps, null)(Photos);
