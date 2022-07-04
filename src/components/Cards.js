import React, { Fragment, useEffect, useState } from "react";
import { Container, Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { OpenCvProvider, OpenCvConsumer, useOpenCv } from 'opencv-react'


function Cards({ data, value }) {
  const navigate = useNavigate();
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;



  return (
    <Fragment>
      <Card
        /* style={window.innerHeight > window.innerWidth && value == 0 
          ? { width: '30rem', height: '30rem', fontSize: "1.2em",} : window.innerHeight > window.innerWidth && value == 1 
          ? { width: '20rem', height: '15rem', fontSize: ".7em" } : window.innerHeight > window.innerWidth && value == 2 
          ? { width: '15rem', height: '12rem', fontSize: ".7em" } : window.innerWidth > window.innerHeight && value == 0 
          ? { width: '30rem', height: 'rem' } : window.innerWidth > window.innerHeight && value == 1 
          ? { width: '25rem', height: '30rem' } : window.innerWidth > window.innerHeight && value == 2 
          ? { width: '30rem', height: '35rem' }: 0} */
        /* style={
            value == 0
              ? { height: "50%"  }
              : value == 1
              ? { width: "25rem"  }
              : { width: "18rem" }
          } */
        /* className="rounded border-0 square border-0 " */
        className='cards pb-3 mt-5 text-start' /* {value == 0 ? "card-0 text-wrap" : value == 1 ? "card-1 text-wrap" : "card-2 text-wrap"} */
      >
        {/* /CONTINUAR AQUI */}
        <Card.Img
        style={window.innerHeight > window.innerWidth && value == 0 
          ? { width: '17rem'/* , minWidth:"80vw", maxWidth:"80vw",minHeight:"40vh", maxHeight:"40vh" */,  height: '17rem', /*fontSize: "1.5em", */ borderRadius: "15px"} : window.innerHeight > window.innerWidth && value == 1 
          ? { width: '10rem'/* ,minWidth:"40vw", maxWidth:"40vw",minHeight:"20vh", maxHeight:"20vh" */,  height: '160px', /*fontSize: ".7em", */borderRadius: "15px" } : window.innerHeight > window.innerWidth && value == 2 
          ? { width: '7rem'/* minWidth:"28vw", maxWidth:"268w",minHeight:"15vh", maxHeight:"15vh" */,  height: '7rem',/* fontSize: ".7em" ,*/borderRadius: "15px" } : window.innerWidth > window.innerHeight && value == 0 
          ? { width: '25rem',/* maxWidth: "100vw", minwidth:"100vw",*/ height: '25rem',/*minHeight:"47vh", maxHeight:"47vh", */borderRadius: "15px" } : window.innerWidth > window.innerHeight && value == 1 
          ? { width: '25rem', /* maxWidth: "",*/ height: '26rem',  borderRadius: "15px" } : window.innerWidth > window.innerHeight && value == 2 
          ? { width: '25rem',/*  maxWidth: "",*/ height: '25rem',  borderRadius: "15px" }: 0}
          onClick={() => navigate(`/car/${data['idproduto']}`)}
          variant="top"
          src={`https://server.sistemaagely.com.br/${data['link']}`}
          className='cards-img'
        />

        <Card.Body className="p-0" style={{background: "",}}>
          <Card.Text className="b-0 ">
            <Card.Text className="b-0  p-0 m-0 fs-4 text-muted fw-bold">
              {data['descricao']}
            </Card.Text>

            <Card.Text className="p-0 m-0 text-muted fs-4">Ref.: {data['referencia']}</Card.Text>

            <Card.Text className='p-0 m-0 text-muted fs-4'>R$ {data['valormax']}</Card.Text>

          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default Cards;

/* fontSize: 16, */



/* style={{ maxWidth:"80%", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}} */
