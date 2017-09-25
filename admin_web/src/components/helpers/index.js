import React from 'react';
import styled from 'styled-components';

export const Button = styled.button `
    color: white;
    background-color: ${props => props.bgcolor};
    border-color: ${props => props.bgcolor};
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25;
    border-radius: .25rem;
    transition: all .15s ease-in-out;

    :hover {
        background-color: ${props => props.hoverColor};
    }
    :focus {
        outline: none;
    }
`

export const NavTop = styled.nav `
            background-color: ${props => props.bgcolor};
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1030;
            `
export const Title = styled.h1`
            font-size: 1.5em;
            text-align: center;
            color: ${props => props.color};
            `;

export const Wrapper = styled.section`
            padding: 4em;
            background: ${props => props.bgcolor};
            `;
            
export const PageContentSection = styled.div`
            margin-top: 3em;
            margin-right: auto;
            margin-left: auto;
            padding-right: 5%;
            padding-left: 5%;
            width: 100%;
        `
export const PageCommandSection = styled.div `
            margin-top: 2em;
            margin-bottom: 2em;
            margin-right: auto;
            margin-left: auto;
`
export const Card = styled.div`
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: ${props => props.bgcolor};
            background-clip: border-box;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: .25rem;
        `
export const StyledLink = styled.div`
        a {
            color: ${props => props.color};
            font-weight: 500;
            text-decoration:none;
        }
        a:hover {
            color: ${props => props.hoverColor}
        }
    `
export const StyledTable = styled.div`
    margin-top : 2em;
    
    th {
        color: ${props => props.color};
        font-weight: bold;
    }
    td {
        color: ${props => props.color};
        font-weight: 400;
    }
`
export const ErrorFeedBack = styled.div`
    color: red; 
`

export const Label = styled.label`
    color: ${props => props.color}
`