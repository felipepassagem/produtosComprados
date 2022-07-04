import React, { Fragment, useState, useEffect } from 'react'
import { Container, Card, Button, Col, Row, Form, Carousel } from "react-bootstrap";
import "../static/style.css";

function Carosel({ fotos }) {
    const [index, setIndex] = useState(0);
    const [nFotos, setNFotos] = useState(0)
    const [n, setN] = useState(0)

    console.log(fotos)

    /* var fotos = data['grades'][0]['fotos'] */
    /* var fotos = []
    fotos.push(data['grades'][0])
    var arrFotos = [] */



    /*  for (var x in fotos){
         for (var z in fotos[x]){
             console.log(fotos[x][z]['fotos'])
             arrFotos.push(fotos[x][z]['fotos'])
         }
     }
     console.log(fotos) */
    /* var arrFotos = arrFotos.concat.apply([], arrFotos) */
    var len = fotos.length




    /* if (len <= 1){
         if(prev != undefined){
            prev[0].style.visibility = "hidden";
        } 
         if(next){
            
        } 
        
        
    } */

    useEffect(() => {
        var prev = document.getElementsByClassName('carousel-control-prev-icon');
        var next = document.getElementsByClassName('carousel-control-next-icon');
        if (len <= 1) {
            prev[0].style.visibility = 'hidden'
            next[0].style.visibility = "hidden";
        }
    }
    )

    const handleSlide = () => {
        var upList = []
        var downList = []
        upList.push(document.getElementsByClassName('btn btn-light up'))
        downList.push(document.getElementsByClassName('btn btn-light down'))
        var upBtns = upList[0]
        var downBtns = downList[0]

        var test = document.getElementsByClassName('d-block w-100')

        if (nFotos == 1) {
            upBtns[index].setAttribute('hidden', true)
            downBtns[index].setAttribute('hidden', true)
        }
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setN(0)
        setNFotos(fotos[selectedIndex]['fotos'].length)
    };

    const handleClickAdd = async () => {
        var t = []
        var ele = document.getElementsByClassName('d-block w-100 visible')
        t.push(ele)
        for (var i = 0; i < ele.length; i++){
            ele[i].classList.add("hidden");
        }
        await sleep(200);
        var hele = document.getElementsByClassName('d-block w-100')
        for (var i = 0; i < hele.length; i++){
            hele[i].classList.remove("hidden");
        }
        if (n < nFotos - 1) {
            setN(n + 1)
        } else {
            setN(0)
        }
    }

    const handleClickRed =  async () => {
        var t = []
        var ele = document.getElementsByClassName('d-block w-100 visible')
        t.push(ele)
        for (var i = 0; i < ele.length; i++){
            ele[i].classList.add("hidden");
        }
        await sleep(200);
        
        var hele = document.getElementsByClassName('d-block w-100')
        
        for (var i = 0; i < hele.length; i++){
            hele[i].classList.remove("hidden");
        }
        if (n == 0) {
            setN(nFotos - 1)
        } else {
            setN(n - 1)
        }
    }

    return (
        <Fragment>
            <Carousel className='carousel' interval={null} activeIndex={index} onSelect={handleSelect} /* fade={true} */ indicators={false} /* onSlid={(e) => { handleSlide() }} */ onSlide={() => { handleSlide() }}>
                {fotos.map((foto, i) => {
                    return (
                        <Carousel.Item key={i} className="car-img img-fluid"
                            id={i}

                        >
                            {foto['fotos'].map((f, ind) => {
                                return (
                                    <div key={ind}/* style={{ position: 'relative' }} */>
                                        <img style={{ width: "100%", height: "100%", minHeight: '30rem', borderRadius: "15px" }}
                                            className="d-block w-100 visible"
                                            src={`https://server.sistemaagely.com.br/${foto['fotos'][n]}`}
                                            id={ind}
                                        />
                                    </div>
                                )
                            })}
                            <Carousel.Caption style={{ alignContent: "center", display: 'block' }}>
                                <div style={{ maxWidth: '3rem', paddingLeft: "130%" }}>
                                    <p style={{ paddingBottom: "19rem" }}><Button onClick={() => handleClickAdd()} active={false} id='btn-up' className='btn btn-light up shadow-none' style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-up"></i></Button></p>
                                    <p style={{ marginTop: "4rem", marginBottom: "0px" }}><Button onClick={() => handleClickRed()} id="btn-down" className='btn btn-light down shadow-none' style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-down"></i></Button></p>
                                </div>
                            </Carousel.Caption>

                        </Carousel.Item>

                    )

                })}


            </Carousel>
        </Fragment>
    )
}

export default Carosel