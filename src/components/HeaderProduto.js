import React from 'react'
import { useParams } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import "../static/style.css";
import '../static/logo.png'
import { Container, Button } from "react-bootstrap";
import "../static/style.css";
import { useNavigate } from "react-router-dom";

function HeaderTest() {
    const {idpessoa, idpedidoVenda} = useParams();
    const navigate = useNavigate();
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    const logo = require('../static/logo.png');

    return (
        <Navbar fixed="top" className='p1' style={{ height: '100px' }}>
            <Container className='nav-container'>
                <Navbar.Brand className='m-0'><Button onClick={() => navigate(`/${idpessoa}/${idpedidoVenda}`, { replace: true })} id='btn-voltar' type='button' className='btn-light m-1'><i className="fa-solid fa-angle-left"></i></Button> </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text className='fixed'>
                        <a href="#login"><img
                            style={screenWidth > screenHeight ? { width: '8rem', heigth: '8rem' } : { width: '8rem', heigth: '8rem' }}
                            src={logo}
                            className="d-inline-block align-top header-img"
                        /></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderTest;