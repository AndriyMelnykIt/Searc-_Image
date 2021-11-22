import React from 'react';
import { NavLink } from 'react-router-dom';

import { StylePageNotFound } from '../styled/PageNotFound';

const PageNotFound = () => (
<StylePageNotFound>
		<div>404 Error Page</div>
		<NavLink to="/"> Go Back </NavLink>
	</StylePageNotFound>
);

export default PageNotFound;
