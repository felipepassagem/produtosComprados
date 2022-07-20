import React, { Fragment, useEffect, useState } from 'react'
import { Container, Card, Button, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../static/style.css";
import { useParams } from "react-router-dom";
import TableProduto from './TableProduto';
import { useNavigate } from "react-router-dom";
import Tabletwo from './Tabletwo';
import ColorBall from './ColorBall';
import ColorImg from './ColorImg';
import CarouseslTest5 from './CarouseslTest5';

function CardProduto({ data }) {
    const [index, setIndex] = useState(0);
    const [cores, setCores] = useState({
        cor1: '',
        cor2: '',
        cor3: ''
    })
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [produto, setProduto] = useState("")
    const [turl, setTurl] = useState('')
    const [fotoss, setFotoss] = useState('')
    const [tabletwodata, setTabletwodata] = useState('')
    const widControl = '2rem'
    const heigControl = '3rem'
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
        var localData = JSON.parse(localStorage.getItem('localData'))
        if (loading == true && data) {
            for (var i in data) {
                if (id == data[i]['idproduto']) {
                    setProduto(data[i]['produto'])
                    setTabletwodata(data[i]['produto']['tabela'])
                    setFotoss(data[i]['produto']['grades'])
                    setCores({
                        cor1: data[i]['produto']['grades'][index]['cor'].split(";")[0],
                        cor2: data[i]['produto']['grades'][index]['cor'].split(";")[1],
                        cor3: data[i]['produto']['grades'][index]['cor'].split(";")[2],
                    })
                    console.log(cores)
                    setTurl(data[i]['produto']['url_guia_tamanho'])
                }
            }
        } else if (localData) {
            for (var i in localData) {
                if (id == localData[i]['idproduto']) {
                    setProduto(localData[i]['produto'])
                    setTabletwodata(localData[i]['produto']['tabela'])
                    setFotoss(localData[i]['produto']['grades'])
                    setCores({
                        cor1: localData[i]['produto']['grades'][index]['cor'].split(";")[0],
                        cor2: localData[i]['produto']['grades'][index]['cor'].split(";")[1],
                        cor3: localData[i]['produto']['grades'][index]['cor'].split(";")[2],
                    })
                    setTurl(localData[i]['produto']['url_guia_tamanho'])   
                }

            }

        }
        window.scrollTo(0, 0)
        setLoading(false)
    }, [index, id])

    const onChangeCarosel = (e) => {
        setIndex(parseInt(e));
    };

    return (
        <Fragment>
            {loading == false ?
                <Container fluid>
                    <Row> <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Voltar</Tooltip>}>
                        <span className="d-inline-block position-fixed" style={{ width: `${widControl}`, height: `${heigControl}` }}>
                            <Button onClick={() => navigate(-1)} id='btn-voltar' type='button' className='btn-light m-1' style={{ width: `${widControl}`, height: `${heigControl}` }}><i className="fa-solid fa-angle-left"></i></Button>
                        </span>
                    </OverlayTrigger></Row>
                    <Row className="justify-content-center pt-5" >
                        <Col className='d-flex justify-content-center' md={6}>
                            <Card className="text-start pb-5 mb-5 card-produto " style={{ width: '23rem' }}>
                                <Card.Body>
                                    <Card.Title className="prouto-card-title text-muted fw-bold pb-1 justify-content-center">{produto ? produto['descricao'].slice(0, 1).toUpperCase() + produto['descricao'].substring(1).toLowerCase() : <span></span>}</Card.Title>
                                    <Card.Text className='card-text-carousel'>
                                        <CarouseslTest5 fotos={fotoss} onChangeCarosel={onChangeCarosel}></CarouseslTest5>
                                    </Card.Text>
                                    <Card.Subtitle className=" text-muted text-center footer-text pt-1">Arraste para o lado para outras cores</Card.Subtitle>
                                    <Card.Subtitle className=" text-muted pt-3 fs-4">Ref.: {produto['referencia']}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-muted pt-2 fw-bold fs-4">Cor: {cores['cor1'] != 'null' ? <div className="div-cor"><ColorImg imgUrl={cores['cor1']} /><span>{produto['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + produto['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase()}</span>  </div> : cores['cor2'] != 'null' ? <div className="div-cor"><ColorBall cor={cores['cor2']} /><span>{produto['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + produto['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase()}</span>  </div> : produto['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + produto['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase()} </Card.Subtitle>
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
                </Container> : <h1>Loading</h1>}
        </Fragment>
    )
}

export default CardProduto




/* {dataTest['grades'][index]['cor'].split(";")[1] != null ? dataTest['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + dataTest['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase(): <span>asd</span>} */

/* var dataTest3 = {
    "situacao": "ok",
    "obj": {
        "idproduto": 146283,
        "descricao": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
        "referencia": "12025",
        "urlfotocapa": "getImagem?file\u003d12025_e.jpg",
        "descricao_detalhada": "Conjunto todo em renda sem bojo e sem aro, com elástico dourado. \nSofisticado, lindo e extremamente confortável. ",
        "url_guia_tamanho": "getImagem?file\u003dguiaTamanho1652207295842.jpg ",
        "grades": [
            {
                "cor": "getImagem?file\u003d1_teste.jpg;#483D8B;PINK OLINDA C/ PRATA",
                "tamanhos": [
                    {
                        "tamanho": "44",
                        "preco": 107.7,
                        "estoque": 19.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2439929,
                        "grade": "PINK OLINDA C/ PRATA | 44",
                        "quantidadeSelecionada": 0.0
                    }
                ],
                "fotos": [
                    "getImagem?file\u003d1_teste.jpg",
                    "getImagem?file\u003d12025_preto_c_dourado.jpg"
                ]
            },
            {
                "cor": "null;null;AZ MARINHO C/ DOURADO",
                "tamanhos": [
                    {
                        "tamanho": "42",
                        "preco": 107.7,
                        "estoque": 0.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2433758,
                        "grade": "AZ MARINHO C/ DOURADO | 42",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "44",
                        "preco": 107.7,
                        "estoque": 0.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2433759,
                        "grade": "AZ MARINHO C/ DOURADO | 44",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "46",
                        "preco": 107.7,
                        "estoque": 0.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2433760,
                        "grade": "AZ MARINHO C/ DOURADO | 46",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "48",
                        "preco": 107.7,
                        "estoque": 4.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2433761,
                        "grade": "AZ MARINHO C/ DOURADO | 48",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "40",
                        "preco": 107.7,
                        "estoque": 0.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2433757,
                        "grade": "AZ MARINHO C/ DOURADO | 40",
                        "quantidadeSelecionada": 0.0
                    }
                ],
                "fotos": [
                    "getImagem?file\u003d12025_e.jpg",
                    "getImagem?file\u003d12025_1__e.jpg",
                    "getImagem?file\u003d12025_preto_c_dourado.jpg",
                    "getImagem?file\u003d12025_rubi_com_dourado_e.jpg",


                ]
            },
            {
                "cor": "null;#CD5C5C;RUBI C/ DOURADO",
                "tamanhos": [
                    {
                        "tamanho": "40",
                        "preco": 107.7,
                        "estoque": 2.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2434239,
                        "grade": "RUBI C/ DOURADO | 40",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "42",
                        "preco": 107.7,
                        "estoque": 0.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2434240,
                        "grade": "RUBI C/ DOURADO | 42",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "46",
                        "preco": 107.7,
                        "estoque": 3.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2434242,
                        "grade": "RUBI C/ DOURADO | 46",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "48",
                        "preco": 107.7,
                        "estoque": 6.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2434243,
                        "grade": "RUBI C/ DOURADO | 48",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "44",
                        "preco": 107.7,
                        "estoque": 1.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2434241,
                        "grade": "RUBI C/ DOURADO | 44",
                        "quantidadeSelecionada": 0.0
                    }
                ],
                "fotos": [
                    "getImagem?file\u003d12025_rubi_com_dourado_e.jpg",
                    "getImagem?file\u003d12025_rubi_com_dourado_e.jpg",

                ]
            },
            {
                "cor": "null;null;azul alexand c/ dour",
                "tamanhos": [
                    {
                        "tamanho": "40",
                        "preco": 107.7,
                        "estoque": 4.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2434543,
                        "grade": "az alexandria c/ dourado | 40",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "42",
                        "preco": 107.7,
                        "estoque": 1.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2434544,
                        "grade": "az alexandria c/ dourado | 42",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "44",
                        "preco": 107.7,
                        "estoque": 1.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2434545,
                        "grade": "az alexandria c/ dourado | 44",
                        "quantidadeSelecionada": 0.0
                    },
                    {
                        "tamanho": "46",
                        "preco": 107.7,
                        "estoque": 0.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2434546,
                        "grade": "az alexandria c/ dourado | 46",
                        "quantidadeSelecionada": 0.0
                    }
                ],
                "fotos": [
                    "getImagem?file\u003d12025_frente_e.jpg",
                    "getImagem?file\u003d12025_preto_c_dourado.jpg",
                    "getImagem?file\u003d12025_costas_e.jpg"
                ]
            },
            {
                "cor": "null;null;PRETO C/ DOURADO",
                "tamanhos": [
                    {
                        "tamanho": "44",
                        "preco": 107.7,
                        "estoque": 4.0,
                        "nome": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
                        "idprodutograde": 2434565,
                        "grade": "PRETO C/ DOURADO | 44",
                        "quantidadeSelecionada": 0.0
                    }
                ],
                "fotos": [
                    "getImagem?file\u003d12025_preto_c_dourado.jpg",
                    "getImagem?file\u003d12025_preto_c_dourado.jpg",
                    "getImagem?file\u003d12025_preto_c_dourado.jpg",
                    "getImagem?file\u003d12025_preto_c_dourado.jpg",
                    "getImagem?file\u003d12025_preto_c_dourado.jpg",
                    "getImagem?file\u003d12025_preto_c_dourado.jpg"
                ]
            }
        ],
        "tabela": {
            "titulos": [
                "",
                "44",
                "42",
                "46",
                "48",
                "40"
            ],
            "linhas": [
                {
                    "nome": ";;PINK OLINDA C/ PRATA",
                    "colunas": [
                        {
                            "nome": "44",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2439929,
                                "saldo": 19.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d1_teste.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "42",
                            "celula": {}
                        },
                        {
                            "nome": "46",
                            "celula": {}
                        },
                        {
                            "nome": "48",
                            "celula": {}
                        },
                        {
                            "nome": "40",
                            "celula": {}
                        }
                    ]
                },
                {
                    "nome": ";;AZ MARINHO C/ DOURADO",
                    "colunas": [
                        {
                            "nome": "44",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2433759,
                                "saldo": 0.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "42",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2433758,
                                "saldo": 0.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "46",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2433760,
                                "saldo": 0.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "48",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2433761,
                                "saldo": 4.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "40",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2433757,
                                "saldo": 0.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        }
                    ]
                },
                {
                    "nome": ";;RUBI C/ DOURADO",
                    "colunas": [
                        {
                            "nome": "44",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2434241,
                                "saldo": 1.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d2_teste.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "42",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2434240,
                                "saldo": 0.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_rubi_com_dourado_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "46",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2434242,
                                "saldo": 3.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_rubi_com_dourado_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "48",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2434243,
                                "saldo": 6.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_rubi_com_dourado_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "40",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2434239,
                                "saldo": 2.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_rubi_com_dourado_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        }
                    ]
                },
                {
                    "nome": "getImagem?file\u003d12025_frente_e.jpg;;azul alexand c/ dour",
                    "colunas": [
                        {
                            "nome": "44",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2434545,
                                "saldo": 1.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_frente_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "42",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2434544,
                                "saldo": 1.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_frente_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "46",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2434546,
                                "saldo": 0.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_frente_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "48",
                            "celula": {}
                        },
                        {
                            "nome": "40",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2434543,
                                "saldo": 4.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_frente_e.jpg",
                                "idVitrineCategoria": "295"
                            }
                        }
                    ]
                },
                {
                    "nome": ";#FF7F50;PRETO C/ DOURADO",
                    "colunas": [
                        {
                            "nome": "44",
                            "celula": {
                                "nome": "0",
                                "idprodutograde": 2434565,
                                "saldo": 4.0,
                                "quantidadeSelecionada": 0.0,
                                "preco": 107.7,
                                "foto": "getImagem?file\u003d12025_preto_c_dourado.jpg",
                                "idVitrineCategoria": "295"
                            }
                        },
                        {
                            "nome": "42",
                            "celula": {}
                        },
                        {
                            "nome": "46",
                            "celula": {}
                        },
                        {
                            "nome": "48",
                            "celula": {}
                        },
                        {
                            "nome": "40",
                            "celula": {}
                        }
                    ]
                }
            ]
        }
    }
}
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var dataTest = dataTest3['obj']
var fotos = dataTest['grades']
var tabletwo = dataTest['tabela'] */
