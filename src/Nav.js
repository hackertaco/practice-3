import React from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components'

export default function Nav(){
    return (
        <NavStyle>
            <div className="Nav-container">
                <div className="Nav-bar">
                    <div className="Nav-main">
                        <img src="https://about.tiny.cloud/wp-content/uploads/2018/07/tiny-color-ondark-rgb.svg" alt=""/>
                        <div className="Nav-items">
                            <div className="Nav-item">Products  ⌄</div>
                            <div className="Nav-item">Support  ⌄</div>
                            <div className="Nav-item">About  ⌄</div>
                            <div className="Nav-item">Blog</div>
                        </div>
                    </div>
                    <div className="Nav-login">
                        <div className="Nav-login-items">
                            <span>Login</span>
                            <div>dd</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </NavStyle>    
    )
}

const NavStyle = styled.div`
height: 68px;
display:flex;
justify-content: center;
    .Nav-container{
        padding: 0 40px;
        height: 80px;
        display: flex;
    }

    .Nav-bar{
        max-width: 1100px;
        display: flex;
        align-items: center;
        // flex-grow:1;
        // flex-shrink: 0;
        margin: 0 auto;
        justify-content: center;
        

    }
    .Nav-main{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex: 1 0 610px;
        height: 50px;

    }
    .Nav-login{
        display: flex;
        flex: 1 0 400px;
        justify-content: flex-end;
    }
    .Nav-items{
        display: flex;
    }
    .Nav-item{
        padding: 0 15px;
    }
    img{
        display: block;
        height: inherit;
        margin-right: 20px;
    }
`
