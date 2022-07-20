import React from 'react'
import "../static/style.css";
import '../static/logo.png'
import { Container, Navbar } from "react-bootstrap";

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

function Header() {
    const logo = require('../static/logo.png');
    return (
        <div>
            <Container fluid fixed="top">
                <Navbar className='navbar' expand="lg" /* variant="light" */ bg="white" fixed="top">
                    <Container className='justify-content-center'>
                        <Navbar.Brand >
                            <img
                                style={screenWidth > screenHeight ? {width: '8rem', heigth: '8rem'} : {width: '4rem', heigth: '4rem'}}
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

export default Header