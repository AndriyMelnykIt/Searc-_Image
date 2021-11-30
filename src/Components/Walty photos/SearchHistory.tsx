import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SearchHistory = ({searchLast}: any) => (
    <>
        {!searchLast.length && <p>No more photos</p>}
        {searchLast.length > 0 && (
            <>
                <p>History:</p>
                {searchLast.map((search: any[], i: React.Key | null | undefined) => (
                    <Card className="mt-3" body key={i}>
                        {search.map((tags, index: React.Key | null | undefined) => (
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
    searchLast: PropTypes.any.isRequired
};

const mapStateToProps = (state: { rootReducer: { searchLast: any; }; }) => ({
    searchLast: state.rootReducer.searchLast
});

export default connect(mapStateToProps, null)(SearchHistory);
