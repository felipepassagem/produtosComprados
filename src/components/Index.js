import React, { Fragment, useState } from "react";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";
import Cards from "./Cards";
import Slider from "./Slider";
import "../static/style.css";
import {createUseStyles} from 'react-jss'

function Index({ data }) {
  const [rangeValue, setRangeValue] = useState(1);

  const onChangeSlider = (e) => {
    setRangeValue(parseInt(e.target.value));
  };
  
  console.log(rangeValue)
  return (
    <Fragment>
      <Container fluid className="p-2 rounded">
        <Container className="pr-5 pl-5 pt-3">
          <Slider
            min={0}
            max={2}
            step={1}
            defaultLength={rangeValue}
            value={rangeValue}
            onChangeValue={onChangeSlider}
            linearGradientcolor="black"
            rangeBackgrondColor="red"
            sliderThumbColor="red"
          ></Slider>
        </Container>

        <Row className="">
          {data.map((data, index) => {
            return (
              <Col key={index*11}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Cards data={data} key={index} value={rangeValue}></Cards>
              </Col>
            );
          })}
          {/* <Col md={4}>
          <Cards data={data}></Cards>
        </Col> */}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Index;
