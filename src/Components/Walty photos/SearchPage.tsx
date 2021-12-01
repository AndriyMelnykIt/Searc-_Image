import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'react-tagsinput/react-tagsinput.css';
import { useHistory } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
// @ts-ignore
import TagsInput from 'react-tagsinput';

import { StyledSearchPage } from '../../styled/SearchPage';
import { reqPhoto } from '../../redux/ducks/WaltyPhotos';

interface propsType {
    SearchPicture: (text: string[]) => void;
}

const SearchPage = ({SearchPicture}: propsType ) => {
    const [tags, setTags] = useState([]);
    const history = useHistory();

    const handleClick = (tags:string[]) => {
        // @ts-ignore
        setTags(tags);
    };

    const handleSearch = () => {
        if (tags.length) {
            SearchPicture(tags);
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

const mapStateToProps = (dispatch: (arg0: { type: string }) => void) => ({
    SearchPicture: (tags: string[]) => {
        dispatch(reqPhoto(tags));
    }
});

export default connect(null, mapStateToProps)(SearchPage);
