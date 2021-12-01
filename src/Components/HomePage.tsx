import React from 'react';

import { SearchHistory, SearchPage } from './index';

const HomePage = () => (
    <>
        <SearchPage/>
        <SearchHistory searchLast={null} />
    </>
);

export default HomePage;
