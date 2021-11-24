import React from 'react';
import { Badge, Card } from 'react-bootstrap';

const SearchHistory = ({ searchHistory }) => {
	return (
		<>
			{!searchHistory.length && <p>No more photos</p>}
			{searchHistory.length > 0 && (
				<>
					<p>Search:</p>
					{searchHistory.map ((search, i) => (
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

export default SearchHistory;