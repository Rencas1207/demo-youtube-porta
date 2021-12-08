import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'
import {darkTheme} from '../components/Themes'

const Icons = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    & > *:not(:last-child){
        margin: 0.5rem 0;
    }
`;

const Line = styled.span`
    width: 2px;
    height: 4rem;
    background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};

`;

export const SocialIcons = (props) => {
    return (
        <Icons>
            <div>
                <NavLink style={{color: "inherit"}} to={{pathname:"https://github.com/Rencas1207"}} target="_blank">
                    <Github witdh={30} height={30} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: "inherit"}} to={{pathname:"https://github.com/Rencas1207"}} target="_blank">
                    <Twitter witdh={30} height={30} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: "inherit"}} to={{pathname:"https://github.com/Rencas1207"}} target="_blank">
                    <Facebook witdh={30} height={30} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: "inherit"}} to={{pathname:"https://github.com/Rencas1207"}} target="_blank">
                    <YouTube witdh={30} height={30} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <Line color={props.theme}/>
        </Icons>
    )
}
