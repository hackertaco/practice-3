import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'
export default function Header(){
    return (
        <>
            <HeaderStyle className="Header-container">
            <Nav />
            {/* <div>
                <h1>ABOUT TINY</h1>
                <p>Powerful and easy-to-use tools for online content creation</p>
            </div> */}
        </HeaderStyle>
        </>
    )
}
const HeaderStyle = styled.div `
background-color: #2276d2;
background-image:url("https://about.tiny.cloud/wp-content/uploads/2015/12/ephox-background.svg");
background-position: 50% 0%;
position: absolute;
 top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
`