import React, { Fragment, useEffect, useState } from "react";
import { Container, Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function CardList({ data, value }) {
    const navigate = useNavigate();
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    /* var len = data['descricao'].length

    var str = data['descricao'].slice(0,1).toUpperCase()
    var str2 = data['descricao'].substring(1).toLowerCase()

    console.log(str) */



    return (
        <Fragment>
            <Card className="text-start" 
            style={{borderWidth: '0px', borderRadius: '15%', width: '18rem'}}
            >
                <Card.Img className="img-fluid cards-img" variant="top" 
                src={`https://server.sistemaagely.com.br/${data['link']}`}
                onClick={() => navigate(`/car/${data['idproduto']}`)}
                style={ screenHeight > screenWidth && value == 1 ? { height: "170px", borderRadius: "15px", borderWidth: "0px" } : 
                screenHeight > screenWidth && value == 2 ? { height: "130px", borderRadius: "15px", borderWidth: "0px" } : { borderWidth: '0px' }}
                />
                <Card.Body>
                    <Card.Text className={screenHeight > screenWidth && value == 2 ? "b-0 p-0 m-0 grid3-font text-muted fw-bold teste" : "b-0  p-0 m-0 fs-5 text-muted fw-bold"} style={{ maxWidth:"100%", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>
                        {data['descricao'].slice(0,1).toUpperCase() + data['descricao'].substring(1).toLowerCase()}
                    </Card.Text>
                    <Card.Text className={screenHeight > screenWidth && value == 2 ? "p-0 m-0 text-muted grid3-font" : "p-0 m-0 text-muted fs-5"}>Ref.: {data['referencia']}</Card.Text>
                    <Card.Text className={screenHeight > screenWidth && value == 2 ? "p-0 m-0 text-muted grid3-font" : "p-0 m-0 text-muted fs-5"}>R$ {parseFloat(data['valormax']).toLocaleString('pt-br', {minimumFractionDigits: 2})}</Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default CardList;