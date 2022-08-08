import React from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import { Container, Card, Button, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";

function LoadingScreen() {
  return (
    <Container>
        <Col></Col>
        <Col align='center' className="spinner-col">
            <LoadingSpinner></LoadingSpinner>
        </Col>
        <Col></Col>
    </Container>
   
  )
}

export default LoadingScreen