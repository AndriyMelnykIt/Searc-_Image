import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Spinner } from '../Components/index';

import { store } from '../redux/store';

configure({adapter: new Adapter()});

let wrapper: any;

describe('Spinner', () => {

    beforeAll(() => {
        wrapper = shallow(<Provider store={store}> <Spinner /></Provider>);
    })

    it('should take a snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
