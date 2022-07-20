import React, { Fragment, useState, useEffect } from 'react'
import { Container, Card, Button, Col, Row, Form, CarouselItem } from "react-bootstrap";
import "../static/style.css";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
        console.log(arrFotos.length -1)
    }, [])

    /* const handleChange = (index) => (e) => {
        setIndex(e.target.value)
        onChangeCarosel(index);
    }; */


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

     /* const handleChange = () => (e) => {
        setIndex(e.target.value)
        onChangeCarosel(e);
        
    }; */



    return (
       /*  <Swiper navigation={true} modules={[Navigation]}  onSwiper={setSwiper} slidesPerView={1} onSlideChange={() => {
            console.log(swiper)
            onChangeCarosel(swiper['activeIndex'])
        }}
         loop={true}
        loopedSlides={2}
        > */
        <Carousel responsive={responsive} infinite={true} containerClass="carousel-container" beforeChange={(nextSlide, { currentSlide, onMove }) => {
            if(currentSlide -1 < nextSlide -1 && currentSlide -1 <= arrFotos.length){
                setIndex(index + 1)
                console.log(`nextSlide: ${nextSlide -1}`)
                onChangeCarosel(index+1);
            } else {
                setIndex(index -1)
                console.log(index)
                
            }

            /* if(nextSlide -1 < currentSlide -1 && currentSlide -1 > 0){
                setIndex(index -1)
                onChangeCarosel(index);
            }
            if(index + 1 == arrFotos.length ){
                setIndex(0)
            } */

            
            

            console.log(index)
            
          }}
         
          >
            {arrFotos ? arrFotos.map((fotos, index) => {   
                return (
                    <div >

                        {/* <Carousel indicators={false} className="carousel slide vertical" id="carousel-vertical" interval={null}> */}
                        <Swiper
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

                        </Swiper>
                    </div>
                )

            }

            ) : "aqui"}
        </Carousel>

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