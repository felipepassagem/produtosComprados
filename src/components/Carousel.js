import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LoadingSpinner from './LoadingSpinner'



function CarouseslTest5({ fotos, onChangeCarosel }) {
    const [arrFotos, setArrFotos] = useState('')
    
    

    useEffect(() => {
        var stringFotos = fotos
        var splitedFotos = fotos.split(";")
        var arrFotos = []
        for (var i = 0; i < splitedFotos.length - 1; i++) {
            arrFotos.push(splitedFotos[i])
        }
        console.log(arrFotos)
        setArrFotos(arrFotos)
    }, [])

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
    };

    return (
        <Slider {...settings}
            afterChange={(index) => {
                onChangeCarosel(index)
            }}
            draggable={true}
            swipeToSlide={true}
            key={1}
            vertical={true}
            verticalSwiping={true}
        >
            {arrFotos ? arrFotos.map((fotos, i) => {
                return (
                    <Swiper
                        key={i*55}
                        speed={550}
                        spaceBetween={100}
                        navigation={true}
                        modules={[Navigation]}
                        /* direction="vertical" */
                        className="mySwiper"
                    >
                       
                            
                            
                                <SwiperSlide key={i*555}>
                                    <img
                                    
                                        className="d-block w-100 visible card-img-asd"
                                        src={`https://server.sistemaagely.com.br/${fotos}`}
                                    />
                                </SwiperSlide>
                            
                        
                    </Swiper>
                )
            }) : <LoadingSpinner></LoadingSpinner>}

        </Slider>
    );
}

export default CarouseslTest5