import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
/* 
    Theme provider  allows usage of react context api so you can reference things multiple levels down in components and not have to pass things down many times 
    Inject global brings in that react context api. has to do with global styling
    Only components inside the theme provider have access to the theme
*/
const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth}; 
    margin: 0 auto;
    padding: 2rem;
    background: ${props => props.theme.red};
`; // props.theme will grab the max width from the theme object

//inject global refers to global css
// set everything to border box and have pseudoelements inherit that so you can be sure of default styles
injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('static\radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html{
        box-sizing: border-box;
        font-size: 10px; /* set font size to 10 so you have a baseline from which all other font calculations can be made off*/
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    body{
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika_next';
    }
    a{
        text-decoration: none;
        color: ${theme.black}; /*accessed like this because theme is in this file. If it were not in the file we would need to export it and reference it. 
                                (not using props reference because we're outside the theme provider)*/
        
    }
`;


class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}
export default Page;