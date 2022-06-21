import React, { Fragment } from "react";
import { Container, Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cards({ data, value }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Card
        style={
          value == 0
            ? { width: "42rem" }
            : value == 1
            ? { width: "25rem" }
            : { width: "18rem" }
        }
        className="rounded border-0 square border-0 p-5"
      >
        <Card.Img
          onClick={() => navigate("/teste")}
          variant="top"
          src="https://previews.123rf.com/images/captblack76/captblack761210/captblack76121000063/15975743-vertical-view-of-eiffel-tower-and-cityscape-paris-france.jpg"
          style={{ borderRadius: "10px" }}
          className="card-img"
        />

        <Card.Body className="p-0 text-start">
          <Card.Text className="b-0">
            <span
              style={{ color: "GrayText", fontSize: 16, fontWeight: "bold" }}
            >
              {data[0]}
            </span>
            <br></br>
            <span>Ref.: {data[1]}</span>
            <br></br>
            <span>R$ {data[2]}</span>
            <br></br>
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default Cards;
