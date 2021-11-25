import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SearchHistory = ({ searchLast }) => {
	return (
		<>
			{!searchLast.length && <p>No more photos</p>}
			{searchLast.length > 0 && (
				<>
					<p>Search:</p>
					{searchLast.map ((search, i) => (
						<Card className="mt-3" key={i}>
							{search.map ((tag, index) => (
								<Badge variant="primary" className="mr-2" key={index}>
									{tag}
								</Badge>
							))}
						</Card>
					))}
				</>
			)}
		</>
	);
};

SearchHistory.propTypes = {
	searchLast: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	searchLast: state.reducer.searchLast
});

export default connect(mapStateToProps, null)(SearchHistory);