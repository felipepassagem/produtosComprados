import React, {Fragment} from 'react'
import { Container, Card, Button, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";

function Orientation({ message }) {
  return (
    <Fragment>
        <Container>
        <Col></Col>
        <Col align='center' className="spinner-col">
            <Card>
                <Card.Body align='center'>
                    Esta página não funciona bem em modo paisagem... =(
                </Card.Body>
            </Card>
        </Col>
        <Col></Col>
    </Container>
    </Fragment>
  )
}

export default Orientation