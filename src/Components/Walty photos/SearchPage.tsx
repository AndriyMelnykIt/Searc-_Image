import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'react-tagsinput/react-tagsinput.css';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Row } from 'react-bootstrap';
// @ts-ignore
import TagsInput from 'react-tagsinput';

import { StyledSearchPage } from '../../styled/SearchPage';
import { reqPhoto } from '../../redux/ducks/WaltyPhotos';

const SearchPage = (props: any) => {
    const [tags, setTags] = useState([]);
    const history = useHistory();

    const handleClick = (tags: any) => {
        setTags(tags);
    };

    const handleSearch = () => {
        if (tags.length) {
            props.SearchPicture(tags);
            history.push('/photos');
        }
    };

    return (
        <StyledSearchPage>
            <TagsInput value={tags} onChange={handleClick}/>
            <Row className="justify-content-md-center">
                <Button className="mt-5" size="lg" onClick={handleSearch}>Search</Button>
            </Row>
        </StyledSearchPage>
    );
};

SearchPage.propTypes = {
    SearchPicture: PropTypes.func.isRequired
};

const mapStateToProps = (dispatch: (arg0: { type: string; payload: any; }) => void) => ({
    SearchPicture: (tags: any) => {
        dispatch(reqPhoto(tags));
    }
});

export default connect(null, mapStateToProps)(SearchPage);
