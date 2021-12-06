import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Pages } from '../Components'

import { store } from '../redux/store';

configure({adapter: new Adapter()});

let wrapper: string;

describe('Pages', () => {

    beforeAll(() => {
        wrapper = shallow(<Provider store={store}> <Pages/></Provider>);
    });

    it('should take a snapshot ', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
