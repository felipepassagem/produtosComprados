import React, { Fragment, useState, useEffect } from 'react'
import { Container, Card, Button, Col, Row, Form, Carousel } from "react-bootstrap";
import "../static/style.css";

function Carosel({ fotos, onChangeCarosel }) {
    var firstLen = []
    const [index, setIndex] = useState(0);
    const [nFotos, setNFotos] = useState(0)
    const [n, setN] = useState(0)
    

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
        onChangeCarosel(selectedIndex);
        setN(0)
        setNFotos(fotos[selectedIndex]['fotos'].length)
        console.log(nFotos)
        
    };

    useEffect(()=>{
        setNFotos(fotos[0]['fotos'].length)
        
    }, [])

    const handleClickAdd = async () => {
        var t = []
        var ele = document.getElementsByClassName('d-block w-100 visible')
        t.push(ele)
        if (n > 0) {
            setN(n - 1)
        }
        for (var i = 0; i < ele.length; i++) {
            ele[i].classList.add("godown");

        }


        await sleep(800);



        var hele = document.getElementsByClassName('d-block w-100')
        for (var i = 0; i < hele.length; i++) {
            hele[i].classList.remove("godown");
        }


    }

    const handleClickRed = async () => {
        var t = []
        var ele = document.getElementsByClassName('d-block w-100 visible')
        t.push(ele)
        
        if (n < nFotos) {
            setN(n + 1)
        }
        for (var i = 0; i < ele.length; i++) {
            ele[i].classList.add("goup");

            /*  ele[i].classList.add("hidden") */

        }
        await sleep(900);

        var hele = document.getElementsByClassName('d-block w-100')

        for (var i = 0; i < hele.length; i++) {
            hele[i].classList.remove("goup");

        }
        
    }

    const handleChange = () => (e) => {
        setIndex(e.target.value)
        onChangeCarosel(e);
    };

    return (
        <Fragment>
            <Carousel className='carousel' prevIcon={<Button active={false} id='btn-up' className='btn btn-light up shadow-none btn-prev' style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-left" style={{ color: 'white' }}></i></Button>} nextIcon={<Button active={true} id='btn-up' className='btn btn-light up shadow-none btn-next' style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-right" style={{ color: 'white' }}></i></Button>} interval={null} activeIndex={index} onSelect={handleSelect} /* fade={true} */ indicators={false} onSlid={(e) => { handleChange(e) }} onSlide={() => { handleSlide() }}>

                {fotos.map((foto, i) => {
                    return (
                        <Carousel.Item key={i} className="car-img img-fluid"
                            id={i}

                        >
                            {foto['fotos'].map((f, ind,x) => {
                                
                                /* console.log(ind) */
                                /* firstLen.push(foto['fotos'].length) */


                                /* console.log(firstLen[0]) */
                                return (
                                    <div key={ind}/* style={{ position: 'relative' }} */>
                                        <img style={{ width: "100%", height: "100%", minHeight: '30rem', borderRadius: "15px" }}
                                            className="d-block w-100 visible"
                                            src={`https://server.sistemaagely.com.br/${foto['fotos'][n]}`}
                                            id={ind}
                                        />
                                    </div>
                                )
                            }
                            )}
                            <Carousel.Caption style={{ alignContent: "center", display: 'block' }}>
                                {
                                    n == 0 ?
                                        <div style={{ maxWidth: '3rem', paddingLeft: "130%" }}>
                                            <p style={{ paddingBottom: "1rem" }}></p>
                                            <p style={{ paddingBottom: "19rem" }}><Button onClick={() => handleClickAdd()} active={false} id='btn-up' className='btn btn-light up shadow-none btn-up' hidden style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-up"></i></Button></p>
                                            <p style={{ marginTop: "4rem", marginBottom: "0px" }}><Button onClick={() => handleClickRed()} id="btn-down" className='btn btn-light down shadow-none btn-down' style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-down"></i></Button></p>
                                        </div> :
                                        n == nFotos - 1 ?
                                            <div style={{ maxWidth: '3rem', paddingLeft: "130%" }}>
                                                <p style={{ paddingBottom: "19rem" }}><Button onClick={() => handleClickAdd()} active={false} id='btn-up' className='btn btn-light up shadow-none btn-up' style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-up"></i></Button></p>
                                                <p style={{ marginTop: "4rem", marginBottom: "0px" }}><Button onClick={() => handleClickRed()} id="btn-down" className='btn btn-light down shadow-none btn-down' hidden style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-down"></i></Button></p>
                                                <p style={{ marginTop: "4rem", marginBottom: "0px" }}></p>
                                            </div> :
                                            <div style={{ maxWidth: '3rem', paddingLeft: "130%" }}>
                                                <p style={{ paddingBottom: "19rem" }}><Button onClick={() => handleClickAdd()} active={false} id='btn-up' className='btn btn-light up shadow-none btn-up' style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-up"></i></Button></p>
                                                <p style={{ marginTop: "4rem", marginBottom: "0px" }}><Button onClick={() => handleClickRed()} id="btn-down" className='btn btn-light down shadow-none btn-down' style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-down"></i></Button></p>
                                            </div>



                                }

                                {/* <div style={{ maxWidth: '3rem', paddingLeft: "130%" }}>
                                    <p style={{ paddingBottom: "19rem" }}><Button onClick={() => handleClickAdd()} active={false} id='btn-up' className='btn btn-light up shadow-none btn-up' style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-up"></i></Button></p>
                                    <p style={{ marginTop: "4rem", marginBottom: "0px" }}><Button onClick={() => handleClickRed()} id="btn-down" className='btn btn-light down shadow-none btn-down' style={{ borderRadius: '50%' }}><i class="fa-solid fa-chevron-down"></i></Button></p>
                                </div> */}
                            </Carousel.Caption>

                        </Carousel.Item>

                    )

                })}


            </Carousel>
        </Fragment>
    )
}

export default Carosel