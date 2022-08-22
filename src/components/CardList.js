import React, { Fragment } from "react";
import {Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function CardList({ data, value, idpessoa, idpedidoVenda }) {
    
    const navigate = useNavigate();
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    return (
        <Fragment>
            <Card className={screenWidth > screenHeight && value == 1 ? 'text-start m-5' : 'text-start'}
            style={{borderWidth: '0px', borderRadius: '15%', width: '18rem'}}
            >
                <div className='card-img-div' style={
                    value == 0 && screenWidth < screenHeight ? 
                    {backgroundImage: "url(" + `https://server.sistemaagely.com.br/${data.fotos.split(',')[0]}` + ")", borderRadius: '10px' ,backgroundSize: 'cover',backgroundPositionX: 'center', backgroundPositionY: 'center', height: '20rem'} :
                    value == 1 && screenWidth < screenHeight && parseFloat(screenHeight / screenWidth) > 1.6 ?
                    {backgroundImage: "url(" + `https://server.sistemaagely.com.br/${data.fotos.split(',')[0]}` + ")", borderRadius: '10px' , backgroundPositionX: 'center', backgroundPositionY: 'center',backgroundSize: 'cover', height: '11rem'} :
                    value == 1 && parseFloat(screenHeight / screenWidth) < 1.6 && screenWidth < screenHeight  ?
                    {backgroundImage: "url(" + `https://server.sistemaagely.com.br/${data.fotos.split(',')[0]}` + ")", borderRadius: '10px' , backgroundPositionX: 'center', backgroundPositionY: 'center',backgroundSize: 'cover', height: '18rem'} :
                    value == 2 && screenWidth < screenHeight && parseFloat(screenHeight / screenWidth) < 1.6 ? 
                    {backgroundImage: "url(" + `https://server.sistemaagely.com.br/${data.fotos.split(',')[0]}` + ")", borderRadius: '10px'  , backgroundPositionX: 'center', backgroundPositionY: 'center',backgroundSize: 'cover', height: '16rem'} :
                    value == 2 && screenWidth < screenHeight && parseFloat(screenHeight / screenWidth) > 1.6 ? 
                    {backgroundImage: "url(" + `https://server.sistemaagely.com.br/${data.fotos.split(',')[0]}` + ")", borderRadius: '10px'  , backgroundPositionX: 'center', backgroundPositionY: 'center',backgroundSize: 'cover', height: '8rem'} :
                    {backgroundImage: "url(" + `https://server.sistemaagely.com.br/${data.fotos.split(',')[0]}` + ")", borderRadius: '10px'  , backgroundPositionX: 'center', backgroundPositionY: 'center',backgroundSize: 'cover', height: '20rem'}
                    }
                    onClick={() => navigate(`/${idpessoa}/${idpedidoVenda}/${data['idproduto']}/${data['idprodutograde']}/${data.preco}/${data.descricao}/${data.tamanho}/${data.cor}/${data.url_img != null ?  data.url_img.split('?')[0]: undefined}/${data.url_img != null ? data.url_img.split('?')[1] : undefined}`)}
                    ></div>
                <Card.Body className="p-1">
                    <Card.Text className={screenHeight > screenWidth && value == 2 ? "b-0 p-0 m-0 text-muted fw-bold " : screenHeight > screenWidth && value == 1 ? "b-0 p-0 m-0 text-muted fw-bold fs-6 " : "b-0  p-0 m-0 fs-5 text-muted fw-bold"} style={{ maxWidth:"100%", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>
                        {data['descricao'].slice(0,1).toUpperCase() + data['descricao'].substring(1).toLowerCase()}
                    </Card.Text>
                    <Card.Text className={screenHeight > screenWidth && value == 2 ? "p-0 m-0 text-muted grid3-font" : screenHeight > screenWidth && value == 1 ? "p-0 m-0 text-muted fs-7" : "p-0 m-0 text-muted fs-7"}>Ref.: {data['referencia']}</Card.Text>
                    <Card.Text className={screenHeight > screenWidth && value == 2 ? "p-0 m-0 text-muted grid3-font" : screenHeight > screenWidth && value == 1 ? "p-0 m-0 text-muted fs-7" : "p-0 m-0 text-muted fs-7"}>R$ {parseFloat(data['preco']).toLocaleString('pt-br', {minimumFractionDigits: 2})}</Card.Text>
                    <Card.Text className={screenHeight > screenWidth && value == 2 ? "p-0 m-0 text-muted grid3-font" : screenHeight > screenWidth && value == 1 ? "p-0 m-0 text-muted fs-7" : "p-0 m-0 text-muted fs-7"}>Tamanho: {data.tamanho}</Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default CardList;