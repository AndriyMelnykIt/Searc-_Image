import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { SearchHistory } from '../../Components/index';

import { store } from '../../redux/store';

configure({adapter: new Adapter()});

const searchLast ={
    searchLast: ''
}


let wrapper: any;

describe('SearchHistory', () => {

    beforeAll(() => {
        wrapper = shallow(<Provider store={store} ><SearchHistory searchLast={searchLast} /></Provider>);
    });

    it('should take a snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});