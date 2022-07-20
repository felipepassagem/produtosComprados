import React, { Fragment, useState, useEffect } from 'react'
import { Container, Card, Button, Col, Row, Form, CarouselItem } from "react-bootstrap";
import "../static/style.css";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Navigation } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Carousel } from 'react-responsive-carousel';
/* import Carousel from 'react-multi-carousel'; */
import 'react-multi-carousel/lib/styles.css';

function CarouselTest3({ fotos, onChangeCarosel }) {
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
        console.log(arrFotos.length)
    }, [])

   


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };



    return (
       
        <Carousel 
        infiniteLoop={true}
        swipeScrollTolerance={30}
        showIndicators={false}
        onChange={(selectedItem)=>{
            console.log(selectedItem)
        }}
        showThumbs={false}
        
          >
            {arrFotos ? arrFotos.map((fotos, index) => { 
                
                return (
                    <div >
                        <p></p><p></p>
                        <p></p>
                        <p></p>
                        
                        {/* <Swiper
                            id={index}
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

                        </Swiper> */}
                    </div>
                )

            }

            ) : <h1>Loading</h1>}
        </Carousel>

    )
   

}

export default CarouselTest3


