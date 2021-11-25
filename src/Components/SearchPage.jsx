import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Row } from 'react-bootstrap';
import TagsInput from 'react-tagsinput';

import { reqPhoto } from '../redux/ducks/ducksGeneration';
import { StyledSearchPage } from '../styled/SearchPage';

const SearchPage = (props) => {
	const [tags, setTags] = useState ([]);
	const history = useHistory ();

	const handleClick = tags => {
		setTags (tags);
	};

	const handleSearch = () => {
		if (tags.length) {
			props.SearchPage (tags);
			history.push ('/photos');
		}
		return;
	};

	return (
		<StyledSearchPage>
			<TagsInput value={tags} onChange={handleClick}/>
			<Row className='justify-content-md-center'>
				<Button className='mt-2' size='lg' onClick={handleSearch}>Search</Button>
			</Row>
		</StyledSearchPage>
	);
};

SearchPage.propTypes = {
	SearchPage: PropTypes.func.isRequired
};

const mapStateToProps = dispatch => ({
	SearchPage: tags => {
		dispatch (reqPhoto (tags));
	}
});
export default connect (null, mapStateToProps) (SearchPage);