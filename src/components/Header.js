import React from 'react'
import "../static/style.css";
import '../static/logo.png'
import { Container, Navbar, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../static/style.css";

function Header() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    const widControl = '2rem'
    const heigControl = '3rem'
    const navigate = useNavigate();
    const logo = require('../static/logo.png');
    return (
        <div>
            <Container fluid fixed="top">
                <Row>
                <Navbar className='navbar' expand="lg" bg="white" fixed="top">
                    <Navbar.Brand href="#home">
                    </Navbar.Brand>
                    <Container className='justify-content-center'>
                    <Button onClick={() => navigate(-1)} id='btn-voltar' type='button' className='btn-light m-1' style={{ width: `${widControl}`, height: `${heigControl}` }}><i className="fa-solid fa-angle-left"></i></Button>
                        <Navbar.Brand >
                            <img
                                style={screenWidth > screenHeight ? { width: '8rem', heigth: '8rem' } : { width: '4rem', heigth: '4rem' }}
                                src={logo}
                                className="d-inline-block align-top header-img"
                            />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                </Row>
            </Container>
        </div>
    )
}

export default Header