import React from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'
import "../static/style.css";

function ErrorScreen() {
  return (
    <Container>
      <Row>
      <Col md={3}></Col>
      <Col md={6} className='justify-content-center' align='center'>
        <Card style={{ width: '22rem' }} className="border-0">
          <Card.Title>Erro inesperado</Card.Title>
          <Card.Img className='card-img-test pb-1' variant="top" />
        </Card>
      </Col>
      <Col md={3}></Col>
      </Row>
    </Container>
  )
}

export default ErrorScreen