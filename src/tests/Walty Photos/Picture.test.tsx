import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Picture } from '../../Components/index';

import { store } from '../../redux/store';

configure({adapter: new Adapter()});

const photo ={
    photo: '',
    webformatURL: ''
}

let wrapper: any;

describe('SearchHistory', () => {

    beforeAll(() => {
        wrapper = shallow(<Provider store={store} ><Picture photo={photo}  /></Provider>);
    });

    it('should take a snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
