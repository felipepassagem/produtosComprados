import React from 'react'
import "../static/style.css";
import '../static/logo.png'
import { Container, Navbar, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

function IndexHeader() {
    const widControl = '2rem'
    const heigControl = '3rem'
    const navigate = useNavigate();
    const logo = require('../static/logo.png');
    return (
        <div>
            <Container fluid fixed="top">
                <Navbar className='navbar' expand="lg" /* variant="light" */ bg="white" fixed="top">
                    <Container className='justify-content-center'>
                        <Navbar.Brand >
                            <img
                                style={screenWidth > screenHeight ? {width: '8rem', heigth: '8rem'} : {width: '8rem', heigth: '8rem'}}
                                src={logo}
                                className="d-inline-block align-top header-img"
                            />
                            </Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </div>
    )
}

export default IndexHeader