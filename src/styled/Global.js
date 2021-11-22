import styled, { createGlobalStyle } from 'styled-components';

import * as palette from './variables';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }`;

const StyleText = styled.div`
    color: ${ (props) => props.color || props.theme.colors.primary };
    @media ${ (props) => props.theme.media.phone } {
       background-color: ${ palette.backroundPhone };
       color: ${ palette.darkColor };
    }
     @media ${ (props) => props.theme.media.tablet } {
        background-color: ${ palette.backroundTablet };
        color: ${ palette.whiteColor};
    }
    @media ${ (props) => props.theme.media.screen } {
        background-color: ${ palette.backroundScreen };
        color: ${ palette.darkColor };
    }
`;

const theme = {
  colors: {
    primary: `${ palette.purpleColor }`,
  },
  media: {
    phone: `${ palette.mediaPhone }`,
    tablet: `${ palette.mediaTablet }`,
    screen: `${ palette.mediaScreen }`,
  },
};

export { Global, StyleText, theme };
