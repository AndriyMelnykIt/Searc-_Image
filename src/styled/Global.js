import styled, {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }`;

const StyleText = styled.div`
    color: ${props => props.color || props.theme.colors.primary};
    @media ${props => props.theme.media.phone} {
       background-color: #EBC2AF;
         color: #000;
    }
     @media ${props => props.theme.media.tablet} {
        background-color: #D2B48C;
        color: #fff;
    }
    @media ${props => props.theme.media.screen} {
        background: #FF3A393B;
        color: #000;
    }
`

const theme = {
    colors: {
        primary: '#752dbb'

    },
    media: {
        phone: '(max-width: 767px) and (min-width: 576px)',
        tablet: '(max-width: 991px) and (min-width: 768px)',
        screen: '(max-width: 1199px) and (min-width: 992px)'
    }
};
export {Global, StyleText, theme};