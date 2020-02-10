import React from 'react';
import styled, { css } from 'styled-components';
import Logo from '../assets/images/myLogo.png';

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px
    grid-template-columns: 50px 100px auto  100px 100px 100px;
    align-items: center;

`
const Mydiv = styled.div`
    color: blue;
    font-size: 23px;
`
const MyLogo = styled.img`
    height: 55px;
`
const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-decoration: underline
    `}
`

function toProperCase(lower){
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}
function ControlButton({ name, active }) {
    return (
        <ControlButtonElem active={active}>
            {toProperCase(name)}
        </ControlButtonElem>
    )
}
export default function () {
    return (
        <Bar>
            <MyLogo src={Logo} alt="My Logo" />
            <Mydiv> STOCKIFY </Mydiv>
            <div />
            <ControlButton active name="dashboard"/>
            <ControlButton name="settings"/>            
            <ControlButton name="myAccount"/>            
        </Bar>
    )
}