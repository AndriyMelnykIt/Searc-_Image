import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import StyledPhotos from '../../styled/Photos';
import { Picture, Spinner } from '../index';

const Photos = (props) => {
	const { photos, loading } = props;

	if (loading) {
		return <Spinner/>;
	}

	return (
		<div>
			{photos.length ? (
				<StyledPhotos className="mb-3" xs={12} sm={12} md={6} xl={3}>
					{photos.map (photo => {
						return <Picture key={photo.id} photo={photo}/>;
					})}
				</StyledPhotos>
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
const mapStateToProps = state => ({
	photos: state.rootReducer.photos,
	loading: state.rootReducer.loading
	}
);

export default connect (mapStateToProps, null) (Photos);
