import React, { Fragment, useEffect, useState } from 'react'
import { Container, Card, Button, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../static/style.css";
import { useParams } from "react-router-dom";
import TableProduto from './TableProduto';
import { useNavigate } from "react-router-dom";
import Tabletwo from './Tabletwo';
import ColorBall from './ColorBall';
import ColorImg from './ColorImg';
import Carousel from './Carousel';
import axios from 'axios'
import HeaderProduto from './HeaderProduto';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import LoadingScreen from '../screens/LoadingScreen';


function CardProduto() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    const errToast = () => toast.error("Ops, erro ao carregar o conteúdo.")
    const [index, setIndex] = useState(0);
    /* const [cores, setCores] = useState({
        cor1: '',
        cor2: '',
        cor3: ''
    }) */
    const { hashParam, id, preco,descricao,grade, tamanho, cor, img_url, teste } = useParams();
    const [loading, setLoading] = useState(true)
    const [produto, setProduto] = useState("")
    const [turl, setTurl] = useState('')
    const [show, setShow] = useState(false)
    const [fotoss, setFotoss] = useState('')
    const [tabletwodata, setTabletwodata] = useState('')
    const [img, setImg] = useState('')
    const widControl = '2rem'
    const heigControl = '3rem'
    const navigate = useNavigate();
    var urlTest = 'https://sistemaagely.com.br/ajax?tela=GetVersaoMobileTeste&linkCompleto=true';
    var ulrReal = 'https://sistemaagely.com.br/ajax?tela=GetVersaoMobile&linkCompleto=true';


    useEffect(() => {
        console.log(hashParam, id,grade, preco,descricao, tamanho, cor, img_url, teste )
        if (img_url == "undefined" || teste == "undefined" ){
            setShow(false)
        } else {
            setShow(true)
        }

        var img = img_url + "?" +teste
        setImg(img)
        
        console.log(img)
        setLoading(true)
        /* document.body.style.backgroundColor = "gray" */

        axios({
            method: 'get',
            url: ulrReal, //mudar essa variavel para teste/nao teste -- urlTest ou urlReal
        })
            .then(function (response) {
                axios({
                    method: 'post',
                    url: /* 'http://127.0.0.1:8888/serverIntimaPassion?service=getListaLink' */    'http://127.0.0.1:8888/serverIntimaPassion?service=getProdutoPedido'  /* response.data + '/serverBaseAgely?service=getListaLink' */   /* 'https://teste.sistemaagely.com.br:8145/agely190722/serverIntimaPassion?service=getListaLink' */    /* 'http://127.0.0.1:8888/serverIntimaPassion?service=getListaLink'  */  /* response.data + '/serverIntimaPassion?service=getListaLink' */,
                    data: {
                        idprodutograde: grade,
                        idproduto: id
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    timeout: 400000,
                })
                    .then(function (response) {

                        var data = response
                        console.log(data.data.obj)
                        setProduto(data.data.obj)
                        /*
                        for (var i in data) {
                            if (id == data[i]['idproduto']) {
                                setProduto(data[i]['produto'])
                                setTabletwodata(data[i]['produto']['tabela'])
                                setFotoss(data[i]['produto']['grades'])
                                setTurl(data[i]['produto']['url_guia_tamanho']) 
                            }
                        }
                        */
                        /* document.body.style.backgroundColor = "white" */
                        setLoading(false)
                    })
                    .catch(function (error) {
                        console.log(error);
                        errToast()
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
        window.scrollTo(0, 0)

    }, [])

    const onChangeCarosel = (e) => {

        setIndex(parseInt(e));
        /* console.log(produto['grades'][index]['cor'].split[";"][0]) */
    };

    return (
        <Fragment>
            {loading == false ?
                <Container fluid>
                    <Row className='pb-5' style={{ backgroundColor: 'white' }}>
                        <HeaderProduto></HeaderProduto>
                    </Row>
                    <Row className="justify-content-center pt-5" >
                        <Col className='d-flex justify-content-center' md={6}>
                            <Card className="text-start pb-5 mb-5 card-produto " style={{ width: '23rem' }}>
                                <Card.Body>
                                    <Card.Title className="prouto-card-title text-muted fw-bold pb-1 p-1 justify-content-start">{descricao.slice(0, 1).toUpperCase() + descricao.substring(1).toLowerCase() /* produto ? produto['breve_descricao'] .slice(0, 1).toUpperCase() + produto['nome'].substring(1).toLowerCase() : <span></span> */}</Card.Title>
                                    <Card.Text className='card-text-carousel'>
                                        { <Carousel fotos={produto['fotosProduto']} onChangeCarosel={onChangeCarosel}></Carousel> }
                                    </Card.Text>
                                    {/* <Card.Subtitle className=" text-muted text-center footer-text pt-1">Arraste para o lado para outras cores</Card.Subtitle> */}
                                    <Card.Subtitle className=" text-muted pt-3 fs-4">Ref.: { produto['referencia'] }</Card.Subtitle>
                                    <Card.Subtitle className=" text-muted pt-3 fs-4">Cor.: {show ? <span><ColorImg imgUrl={img}></ColorImg>{ cor }</span> : <span> {cor} </span>}</Card.Subtitle>
                                    <Card.Subtitle className=" text-muted pt-3 fs-4"> Tamanho.: {tamanho}</Card.Subtitle>
                                    <Card.Subtitle className=" text-muted pt-3 fs-4"> R$.: {parseFloat(preco).toLocaleString('pt-br', {minimumFractionDigits: 2})}</Card.Subtitle>
                                    {/* <Card.Subtitle className="mb-3 text-muted pt-2 fw-bold fs-4">Cor: {produto['grades'][index]['cor'].split(";")[0] != 'null'
                                        ? <div className="div-cor"><ColorImg imgUrl={produto['grades'][index]['cor'].split(";")[0]} /><span>{produto['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + produto['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase()}</span>  </div>
                                        : produto['grades'][index]['cor'].split(";")[1] != 'null'
                                            ? <div className="div-cor"><ColorBall cor={produto['grades'][index]['cor'].split(";")[1]} /><span>{produto['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + produto['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase()}</span>  </div>
                                            : produto['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + produto['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase()
                                    }

                                        
                                    </Card.Subtitle> */}
                                    <Card.Subtitle className="mb-3 mt-2 card-subtitle card-subtitle fw-bold">Descrição</Card.Subtitle>
                                    <Card.Text className=' card-subtitle fs-6'>
                                        {produto['descricao']}
                                    </Card.Text>
                                    {/* <div>
                                        <TableProduto produto={fotoss} index={index} />
                                    </div> */}
                                    {/* <div>
                                        <Tabletwo data={tabletwodata}></Tabletwo>
                                    </div> */}
                                    <div >

                                        {
                                            turl ? <img
                                                className="d-block w-100 visible timg thumbnail"
                                                src={`https://server.sistemaagely.com.br/${turl}`}
                                            /> : <span></span>
                                        }

                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container> : <LoadingScreen></LoadingScreen>}
        </Fragment>
    )
}

export default CardProduto


//Código doc ard produto funcionando do agely01 listaProdutos



{/* <Fragment>
            {loading == false ?
                <Container fluid>
                    <Row className='pb-5' style={{ backgroundColor: 'white' }}>
                        <HeaderProduto></HeaderProduto>
                    </Row>
                    <Row className="justify-content-center pt-5" >
                        <Col className='d-flex justify-content-center' md={6}>
                            <Card className="text-start pb-5 mb-5 card-produto " style={{ width: '23rem' }}>
                                <Card.Body>
                                    <Card.Title className="prouto-card-title text-muted fw-bold pb-1 p-1 justify-content-start">{produto ? produto['descricao'].slice(0, 1).toUpperCase() + produto['descricao'].substring(1).toLowerCase() : <span></span>}</Card.Title>
                                    <Card.Text className='card-text-carousel'>
                                        <Carousel fotos={fotoss} onChangeCarosel={onChangeCarosel}></Carousel>
                                    </Card.Text>
                                    <Card.Subtitle className=" text-muted text-center footer-text pt-1">Arraste para o lado para outras cores</Card.Subtitle>
                                    <Card.Subtitle className=" text-muted pt-3 fs-4">Ref.: {produto['referencia']}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-muted pt-2 fw-bold fs-4">Cor: {produto['grades'][index]['cor'].split(";")[0] != 'null'
                                        ? <div className="div-cor"><ColorImg imgUrl={produto['grades'][index]['cor'].split(";")[0]} /><span>{produto['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + produto['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase()}</span>  </div>
                                        : produto['grades'][index]['cor'].split(";")[1] != 'null'
                                            ? <div className="div-cor"><ColorBall cor={produto['grades'][index]['cor'].split(";")[1]} /><span>{produto['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + produto['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase()}</span>  </div>
                                            : produto['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + produto['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase()
                                    }

                                        
                                            </Card.Subtitle>
                                            <Card.Subtitle className="mb-3 mt-2 card-subtitle card-subtitle fw-bold">Descrição</Card.Subtitle>
                                            <Card.Text className=' card-subtitle fs-6'>
                                                {produto['descricao_detalhada']}
                                            </Card.Text>
                                            <div>
                                                <TableProduto produto={fotoss} index={index} />
                                            </div>
                                            <div>
                                                <Tabletwo data={tabletwodata}></Tabletwo>
                                            </div>
                                            <div >
        
                                                {
                                                    turl ? <img
                                                        className="d-block w-100 visible timg thumbnail"
                                                        src={`https://server.sistemaagely.com.br/${turl}`}
                                                    /> : <span></span>
                                                }
        
                                            </div>
        
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container> : <LoadingScreen></LoadingScreen>}
                </Fragment> */}



                