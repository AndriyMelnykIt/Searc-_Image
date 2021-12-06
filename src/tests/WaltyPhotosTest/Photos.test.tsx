import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Photos } from '../../Components';

import { store } from '../../redux/store';

configure({adapter: new Adapter()});

const photos: any = {
    photo: ''
};

let wrapper: string;

describe('Photos', () => {

    beforeAll(() => {
        wrapper = shallow(<Provider store={store}><Photos photos={photos} loading={photos}/></Provider>);
    });

    it('should take a snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
