import React from 'react';
import { NavLink } from 'react-router-dom';

import { StylePageNotFound } from '../styled/PageNotFound';

const PageNotFound = () => (
        <StylePageNotFound>
           <div>404 Error Page</div>
            <div>Sorry, this page does't exist</div>
            <NavLink to='/'> Go Back </NavLink>
        </StylePageNotFound>
    );

export default PageNotFound;