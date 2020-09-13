import React from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components'

export default function Nav(){
    return (
        <NavStyle>
            <div className="Nav-container">
                <div className="Nav-bar">
                    <div className="Nav-main">
                        <a className="w-img" href="https://www.tiny.cloud/">
                            <img className="img_default" src="https://about.tiny.cloud/wp-content/uploads/2018/07/tiny-color-onlight-rgb.svg" alt=""/>
                            <img className="img_transparant" src="https://about.tiny.cloud/wp-content/uploads/2018/07/tiny-color-ondark-rgb.svg" alt=""/>
                        </a>
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
display:flex;
// background-color: transparant;
background: linear-gradient(rgba(0,0,0,.5),transparent) repeat-x;
min-width: 0!important;
justify-content: center;
height: 68px;
    .Nav-container{
        padding: 0 40px;
        display: flex;
        background-color: transparent;
        height: 80px;
        align-items: center;
        align-content:center;
    }

    .Nav-bar{
        max-width: 1100px;
        align-items: center;
        align-content: center;
        // margin: 0 auto;
        display: flex;
        justify-content: center;
        color:#d3e3f3;
        height: inherit;
        position: relative;
        margin: 0 auto;

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
    w-img{
        display: block;
        height: inherit;
        width: auto;
    }
    img{
        height: 30px;
        margin-right: 20px;
        display: block;
        
    }
    .img_default{
        display: none;
    }
    .Nav-login-items{
        display: flex;
        span{
            margin-right: 20px;
        }
    }
`
