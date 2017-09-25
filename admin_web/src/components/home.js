import React, { Component } from 'react';
import { Title, Wrapper } from './helpers';
import * as Color from './helpers/color';


export default class Home extends Component {
    render() {
        return (
        <Wrapper bgcolor={Color.page_bg_color}>
            <Title color={Color.label_text_color}>Welcome to UMA Administration</Title>
        </Wrapper>
        );
    }
}       