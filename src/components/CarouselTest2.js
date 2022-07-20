import React, { Fragment, useState, useEffect } from 'react'
import { Container, Card, Button, Col, Row, Form, Carousel, CarouselItem } from "react-bootstrap";
import "../static/style.css";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CarouselTest2({ fotos, onChangeCarosel }) {
    const [arrFotos, setArrFotos] = useState('')
    const [swiper, setSwiper] = useState(null);
    const [index, setIndex] = useState(0)
    const [car, setCar] = useState(0)

    const slideTo = (index) => {
        if (swiper)
            swiper.slideTo(index)
    };

    useEffect(() => {
        var arrFotos = []
        for (var i = 0; i < fotos.length; i++) {
            arrFotos.push(fotos[i]['fotos'])
        }

        setArrFotos(arrFotos)
        console.log(arrFotos)
    }, [])

    /* const handleChange = (index) => (e) => {
        setIndex(e.target.value)
        onChangeCarosel(index);
    }; */




    return (
        <Swiper navigation={true} modules={[Navigation]}  onSwiper={setSwiper} slidesPerView={1} onSlideChange={() => {
            console.log(swiper)
            onChangeCarosel(swiper['activeIndex'])
        }}
        /* loop={true}
        loopedSlides={2} */
        
        loop={true}
        
        initialSlide={0}
        >
            {arrFotos ? arrFotos.map((fotos, index) => {
                
                return (
                    <SwiperSlide >

                        {/* <Carousel indicators={false} className="carousel slide vertical" id="carousel-vertical" interval={null}> */}
                        <Swiper

                            navigation={true}
                            modules={[Navigation]}
                            direction="vertical"
                            className="mySwiper"
                        >
                            {fotos.map((f, i) => {
                                return (
                                    <SwiperSlide>
                                        <img
                                            className="d-block w-100 visible card-img-asd"
                                            src={`https://server.sistemaagely.com.br/${f}`}
                                        />
                                    </SwiperSlide>

                                )

                            })}

                        </Swiper>
                    </SwiperSlide>
                )

            }

            ) : "aqui"}
        </Swiper>

    )
    /*   <Swiper>
          {arrFotos.map((fotos, index)=>{
              console.log(fotos)
              return(
                  <SwiperSlide>
  
                      <Carousel indicators={false} interval={null}>
                          <CarouselItem></CarouselItem>
                      </Carousel> 
                  </SwiperSlide>
              )
          })}
          
          
      </Swiper> */

}

export default CarouselTest2


/* <Carousel.Item className="carousel-inner">
                                        <img style={{ width: "100%", height: "100%", minHeight: '30rem', borderRadius: "15px" }}
                                            className="d-block w-100 visible"
                                            src={`https://server.sistemaagely.com.br/${f}`}
                                            
                                        />
                                    </Carousel.Item> */