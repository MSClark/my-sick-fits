import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
    background: red;
    font-size: ${props => (props.huge ? '100px' : '50px')}; 
    .stuff{
        font: 100px;
    }
`; // ternary if huge exists make it 100px otherwise 50px

class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                <MyButton huge="100">CLick me </MyButton> {/* huge is an attribute accessed via MyButton.props */}
                {this.props.children}
            </div>
        );
    }
}

export default Page;