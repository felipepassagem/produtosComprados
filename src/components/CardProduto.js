import React, { Fragment, useEffect, useState } from 'react'
import { Container, Card, Button, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";

import Carosel from './Carosel';
import "../static/style.css";
import { useParams } from "react-router-dom";
import TableProduto from './TableProduto';
import { useNavigate } from "react-router-dom";
import Tabletwo from './Tabletwo';

function CardProduto({ data }) {
    const { id } = useParams();
    const [produto, setProduto] = useState("")
    const widControl = '2rem'
    const heigControl = '3rem'
    const navigate = useNavigate();

    /* var dataTest1 = {"situacao":"ok","obj":{"idproduto":197748,"descricao":"VERNIZ RESTAURADOR PREMIUM","referencia":"006","urlfotocapa":"getImagem?file\u003dfotoGrade_0_1654620599943.png","descricao_detalhada":"","url_guia_tamanho":"","grades":[{"cor":"getImagem?file\u003dfotoCor1654622665631.png;#FFFFFF;Unico","tamanhos":[{"tamanho":"10L","preco":157.8,"estoque":99.0,"nome":"VERNIZ RESTAURADOR PREMIUM","idprodutograde":2318864,"grade":"Único | 10L","quantidadeSelecionada":0.0}],"fotos":["getImagem?file\u003dfotoGrade_0_1654620599943.png","getImagem?file\u003dfotoGrade_2_1654620599947.png","getImagem?file\u003dfotoGrade_1_1654620599944.png","getImagem?file\u003dfotoGrade_3_1654620599948.png"]}],"tabela":{"titulos":["","10L"],"linhas":[{"nome":"getImagem?file\u003dfotoCor1654622665631.png;#FFFFFF;Unico","colunas":[{"nome":"10L","celula":{"nome":"0","idprodutograde":2318864,"saldo":99.0,"quantidadeSelecionada":0.0,"preco":157.8,"foto":"getImagem?file\u003dfotoGrade_0_1654620599943.png","idVitrineCategoria":"223"}}]}]}}} */
    var dataTest1 = { "situacao": "ok", "obj": { "idproduto": 197755, "descricao": "Suvinil Lousa \u0026 Cor ", "referencia": "013", "urlfotocapa": "getImagem?file\u003dfotoGrade_0_1654625941682.png", "descricao_detalhada": "Suvinil Lousa \u0026 Cor ", "url_guia_tamanho": "", "grades": [{ "cor": "null;#000000;Preto", "tamanhos": [{ "tamanho": "800ML", "preco": 170.0, "estoque": 96.0, "nome": "Suvinil Lousa \u0026 Cor ", "idprodutograde": 2318879, "grade": "PRETO | 800ML", "quantidadeSelecionada": 0.0 }], "fotos": ["getImagem?file\u003dfotoGrade_0_1654625941682.png"] }], "tabela": { "titulos": ["", "800ML"], "linhas": [{ "nome": ";#000000;Preto", "colunas": [{ "nome": "800ML", "celula": { "nome": "0", "idprodutograde": 2318879, "saldo": 96.0, "quantidadeSelecionada": 0.0, "preco": 170.0, "foto": "getImagem?file\u003dfotoGrade_0_1654625941682.png", "idVitrineCategoria": "223" } }] }] } } }
    var dataTest2 = { "situacao": "ok", "obj": { "idproduto": 138890, "descricao": "CONJUNTO BOJO GOTA", "referencia": "202219", "urlfotocapa": "getImagem?file\u003dfotoGrade_0_1652837342442.jpg", "descricao_detalhada": "CONJUNTO COM BOJO GOTA SEM ARO EM LIGANETE E DETALHES EM RENDA COM CALCINHA FIO DUPLO E PALA EM RENDA", "url_guia_tamanho": "getImagem?file\u003dguiaTamanho1652207295842.jpg", "grades": [{ "cor": "getImagem?file\u003dfotoCor1652836878084.png;estampa;EST. 9075", "tamanhos": [{ "tamanho": "G", "preco": 149.7, "estoque": 5.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310151, "grade": "EST. 9075 | G", "quantidadeSelecionada": 0.0 }, { "tamanho": "GG", "preco": 149.7, "estoque": 5.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310152, "grade": "EST. 9075 | GG", "quantidadeSelecionada": 0.0 }, { "tamanho": "M", "preco": 149.7, "estoque": 5.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310153, "grade": "EST. 9075 | M", "quantidadeSelecionada": 0.0 }, { "tamanho": "P", "preco": 149.7, "estoque": 5.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310154, "grade": "EST. 9075 | P", "quantidadeSelecionada": 0.0 }], "fotos": ["getImagem?file\u003dfotoGrade_0_1652837342442.jpg"] }, { "cor": "getImagem?file\u003dfotoCor1652837165504.png;estampa;EST. 9076", "tamanhos": [{ "tamanho": "G", "preco": 149.7, "estoque": 5.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310155, "grade": "EST. 9076 | G", "quantidadeSelecionada": 0.0 }, { "tamanho": "GG", "preco": 149.7, "estoque": 5.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310156, "grade": "EST. 9076 | GG", "quantidadeSelecionada": 0.0 }, { "tamanho": "M", "preco": 149.7, "estoque": 5.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310157, "grade": "EST. 9076 | M", "quantidadeSelecionada": 0.0 }, { "tamanho": "P", "preco": 149.7, "estoque": 5.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310158, "grade": "EST. 9076 | P", "quantidadeSelecionada": 0.0 }], "fotos": ["getImagem?file\u003dfotoGrade_0_1652837368943.jpg"] }, { "cor": "getImagem?file\u003dfotoCor1652837120761.png;estampa;EST. 9078", "tamanhos": [{ "tamanho": "G", "preco": 149.7, "estoque": 4.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310159, "grade": "EST. 9078 | G", "quantidadeSelecionada": 0.0 }, { "tamanho": "GG", "preco": 149.7, "estoque": 4.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310160, "grade": "EST. 9078 | GG", "quantidadeSelecionada": 0.0 }, { "tamanho": "M", "preco": 149.7, "estoque": 4.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310161, "grade": "EST. 9078 | M", "quantidadeSelecionada": 0.0 }, { "tamanho": "P", "preco": 149.7, "estoque": 4.0, "nome": "CONJUNTO BOJO GOTA", "idprodutograde": 2310162, "grade": "EST. 9078 | P", "quantidadeSelecionada": 0.0 }], "fotos": ["getImagem?file\u003dfotoGrade_0_1652837449823.jpg", "getImagem?file\u003dfotoGrade_0_1652837488411.jpg"] }], "tabela": { "titulos": ["", "G", "GG", "M", "P"], "linhas": [{ "nome": "getImagem?file\u003dfotoCor1652836878084.png;estampa;EST. 9075", "colunas": [{ "nome": "G", "celula": { "nome": "0", "idprodutograde": 2310151, "saldo": 5.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837342442.jpg", "idVitrineCategoria": "2288" } }, { "nome": "GG", "celula": { "nome": "0", "idprodutograde": 2310152, "saldo": 5.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837342442.jpg", "idVitrineCategoria": "2288" } }, { "nome": "M", "celula": { "nome": "0", "idprodutograde": 2310153, "saldo": 5.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837342442.jpg", "idVitrineCategoria": "2288" } }, { "nome": "P", "celula": { "nome": "0", "idprodutograde": 2310154, "saldo": 5.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837342442.jpg", "idVitrineCategoria": "2288" } }] }, { "nome": "getImagem?file\u003dfotoCor1652837165504.png;estampa;EST. 9076", "colunas": [{ "nome": "G", "celula": { "nome": "0", "idprodutograde": 2310155, "saldo": 5.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837368943.jpg", "idVitrineCategoria": "2288" } }, { "nome": "GG", "celula": { "nome": "0", "idprodutograde": 2310156, "saldo": 5.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837368943.jpg", "idVitrineCategoria": "2288" } }, { "nome": "M", "celula": { "nome": "0", "idprodutograde": 2310157, "saldo": 5.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837368943.jpg", "idVitrineCategoria": "2288" } }, { "nome": "P", "celula": { "nome": "0", "idprodutograde": 2310158, "saldo": 5.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837368943.jpg", "idVitrineCategoria": "2288" } }] }, { "nome": "getImagem?file\u003dfotoCor1652837120761.png;estampa;EST. 9078", "colunas": [{ "nome": "G", "celula": { "nome": "0", "idprodutograde": 2310159, "saldo": 4.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837449823.jpg", "idVitrineCategoria": "2288" } }, { "nome": "GG", "celula": { "nome": "0", "idprodutograde": 2310160, "saldo": 4.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837449823.jpg", "idVitrineCategoria": "2288" } }, { "nome": "M", "celula": { "nome": "0", "idprodutograde": 2310161, "saldo": 4.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837449823.jpg", "idVitrineCategoria": "2288" } }, { "nome": "P", "celula": { "nome": "0", "idprodutograde": 2310162, "saldo": 4.0, "quantidadeSelecionada": 0.0, "preco": 149.7, "foto": "getImagem?file\u003dfotoGrade_0_1652837449823.jpg", "idVitrineCategoria": "2288" } }] }] } } }
    var dataTest3 = {
        "situacao": "ok",
        "obj": {
            "idproduto": 146283,
            "descricao": "12025 CONJ SINTONIA REND C/ ELAST DALLAS PROMOCIONAL SEM TROCAS",
            "referencia": "12025",
            "urlfotocapa": "getImagem?file\u003d12025_e.jpg",
            "descricao_detalhada": "Conjunto todo em renda sem bojo e sem aro, com elástico dourado. \nSofisticado, lindo e extremamente confortável. ",
            "url_guia_tamanho": "",
            "grades": [
                {
                    "cor": "null;null;PINK OLINDA C/ PRATA",
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
                        "getImagem?file\u003d1_teste.jpg"
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
                        "getImagem?file\u003d12025_1__e.jpg"
                    ]
                },
                {
                    "cor": "null;null;RUBI C/ DOURADO",
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
                        "getImagem?file\u003d2_teste.jpg"
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
                        "nome": ";;azul alexand c/ dour",
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
                        "nome": ";;PRETO C/ DOURADO",
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
    var tabletwo = dataTest['tabela']

    const [index, setIndex] = useState(0);
    const [nFotos, setNFotos] = useState(0)
    const [n, setN] = useState(0)

    useEffect(() => {
        var upList = []
        var downList = []
        upList.push(document.getElementsByClassName('btn btn-light up'))
        downList.push(document.getElementsByClassName('btn btn-light down'))
        var upBtns = upList[0]
        var downBtns = downList[0]
        if (nFotos == 0) {
            upBtns[index].setAttribute('hidden', true)
            downBtns[index].setAttribute('hidden', true)
        }
    }, [])

    return (
        <Fragment>
            {produto != undefined ?
                <Container fluid>
                    <Row> <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Voltar</Tooltip>}>
                        <span className="d-inline-block position-fixed" style={{ width: `${widControl}`, height: `${heigControl}` }}>
                            <Button onClick={() => navigate(-1)} type='button' className='btn-light m-1' style={{ width: `${widControl}`, height: `${heigControl}` }}><i className="fa-solid fa-angle-left"></i></Button>
                        </span>
                    </OverlayTrigger></Row>
                    <Row className="justify-content-center pt-5" >
                        <Col className='d-flex justify-content-center' md={6}>
                            <Card className="text-start mb-5 card-produto " style={{ width: '23rem' }}>
                                <Card.Body>
                                    <Card.Title className="prouto-card-title text-muted pb-1">{dataTest['descricao'].slice(0, 1).toUpperCase() + dataTest['descricao'].substring(1).toLowerCase()}</Card.Title>
                                    <Card.Text>
                                        <Carosel fotos={fotos}></Carosel>
                                    </Card.Text>
                                    <Card.Subtitle className=" text-muted pt-2">Ref.: {dataTest['referencia']}</Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-muted pt-2 fw-bold">Cor: {dataTest['grades'][index]['cor'].split(";")[2].slice(0, 1).toUpperCase() + dataTest['grades'][index]['cor'].split(";")[2].substring(1).toLowerCase()}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 card-subtitle card-subtitle fw-bold">Descrição</Card.Subtitle>
                                    <Card.Text className=' card-subtitle fs-5'>
                                        {dataTest['descricao_detalhada']}
                                    </Card.Text>
                                    <TableProduto produto={dataTest['grades']} index={index} />
                                    <Tabletwo data={tabletwo}></Tabletwo>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container> : <h1>Loading</h1>}
        </Fragment>
    )
}

export default CardProduto