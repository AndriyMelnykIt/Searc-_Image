import React from 'react';
import { StylePageNotFound } from '../styled/PageNotFound';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => (
        <StylePageNotFound>
           <div>404 Error Page</div>
            <div>Sorry, this page does't exist</div>
            <NavLink to='/'> Go Back </NavLink>
        </StylePageNotFound>
    );
export default PageNotFound;