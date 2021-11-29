import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SearchHistory = ({ searchLast }) => (
	<>
		{!searchLast.length && <p>No more photos</p>}
		{searchLast.length > 0 && (
			<>
				<p>History:</p>
				{searchLast.map ((search, i) => (
					<Card className="mt-3" body key={i}>
						{search.map ((tags, index) => (
							<Badge bg="light" className="mr-2" key={index}>
								{tags}
							</Badge>
						))}
					</Card>
				))}
			</>
		)}
	</>
);

SearchHistory.propTypes = {
	searchLast: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	searchLast: state.rootReducer.searchLast
});

export default connect (mapStateToProps, null) (SearchHistory);
