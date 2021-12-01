import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

const SearchHistory = ({ searchLast }) => (
    <>
        {!searchLast.length && <p>No more photos</p>}
        {searchLast.length > 0 && (
            <>
                <p>History:</p>
                {searchLast.map((search: string[], i: number) => (
                    <Card className="mt-3" body key={i}>
                        {search.map((tags: string, index: number) => (
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

const mapStateToProps = (state: { rootReducer: { searchLast: string }; }) => ({
    searchLast: state.rootReducer.searchLast
});

export default connect(mapStateToProps, null)(SearchHistory);
