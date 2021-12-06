import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SearchPage } from '../../Components';

configure({adapter: new Adapter()});

const searchPhotos = 'test';

const handleClick = jest.fn();

const handleSearch = jest.fn();

let wrapper: string;

describe('SearchPage', () => {

    beforeAll(() => {
        wrapper = shallow(<SearchPage>
            searchPhotos={searchPhotos}
            onChangePhotos = {() => handleClick('testAfterHandler')}
            onSearchPhotos = {handleSearch}</SearchPage>);
    });

    it('should take a snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
