import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'
export default function Header(){
    return (
        <>
            <HeaderStyle className="Header-container">
            <Nav />
            <div>
                <h1>ABOUT TINY</h1>
                <p>Powerful and easy-to-use tools for online content creation</p>
            </div>
        </HeaderStyle>
        </>
    )
}
const HeaderStyle = styled.div `
background: rgba(34,118,210,0.2);
`