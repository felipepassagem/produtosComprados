import React, { Fragment, useState, useEffect } from "react";
import { Container, Card, Button, Col, Row, Form, Input } from "react-bootstrap";
import Cards from "./Cards";
import CardList from "./CardList";
import Slider from "./Slider";
import Carosel from "./Carosel";
import "../static/style.css";
import { createUseStyles } from 'react-jss'
import CardGroup from 'react-bootstrap/CardGroup'

function Index({ data }) {
  const [rangeValue, setRangeValue] = useState(2);
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  const onChangeSlider = (e) => {
    setRangeValue(parseInt(e.target.value));
    /* if(screenHeight > screenWidth && e.target.value > 0){
      setRangeValue(1)
    } */
  };

  /* useEffect(()=>{
    if(screenHeight > screenWidth && rangeValue > 1){
      setRangeValue(1)
    }
  }, [rangeValue]) */



  return (
    <Fragment>
      <Container fluid className="pb-2 pr-2 pl-2 rounded">
        {/* <Container className="" style={{maxHeight: "40px"}}> */}
        <Row className="slider-row justify-content-center ">
          <Col md={2} style={{ backgroundColor: "black" }}></Col>
          <Col md={8} className='d-flex justify-content-center p-0'>

            <Slider
              style={{
                alignItems: "center",
                justifyContent: "center",
              }

              }
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


          </Col>

          <Col md={2}></Col>
        </Row>

        {/* </Container> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Row xs={1} md={2} className="g-4">
          {data.map((data, index) => (
            <Col className='justify-content-center d-flex p-1'
              xs={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
              sm={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
              md={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
              lg={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
              xl={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
              xxl={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}

              key={index * 11}
              style={{

                /* alignItems: "center",
                justifyContent: "center", */
              }}
            >
              <CardList data={data} key={index} value={rangeValue}></CardList>
            </Col>
          ))}
        </Row>
        {/* <Row className="g-3 p-1 pt-2 teste"   >
          <CardGroup md={3}>
            {data.map((data, index) => {
              return (

                

                  <CardsTest data={data} key={index} value={rangeValue}></CardsTest>

                

              );
            })}
          </CardGroup>
        </Row> */}

      </Container>
    </Fragment>
  );
}

export default Index;

{/* <Col

className='justify-content-center d-flex'
xs={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
sm={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
md={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
lg={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
xl={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}
xxl={rangeValue == 1 ? 6 : rangeValue == 0 ? 12 : 4}

key={index * 11}
style={{
  
  alignItems: "center",
  justifyContent: "center",
}}
> */}

/* </Col> */
