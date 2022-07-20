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
    var key = 0
    var key1 = 55

    useEffect(() => {
        var arrFotos = []
        for (var i = 0; i < fotos.length; i++) {
            arrFotos.push(fotos[i]['fotos'])
        }
        setArrFotos(arrFotos)
    }, [])

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}
            afterChange={(index) => {
                onChangeCarosel(index)
            }}
            draggable={true}
            swipeToSlide={true}
        >
            {arrFotos ? arrFotos.map((fotos, i) => {
                
                return (
                    <Swiper
                    key={fotos}
                        speed={550}
                        spaceBetween={100}
                        navigation={true}
                        modules={[Navigation]}
                        direction="vertical"
                        className="mySwiper"
                    >
                        {fotos.map((f, i) => {
                            console.log(f)
                            return (
                                <SwiperSlide>
                                    <img
                                    key={f}
                                        className="d-block w-100 visible card-img-asd"
                                        src={`https://server.sistemaagely.com.br/${f}`}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                )
            }) : <LoadingSpinner></LoadingSpinner>}

        </Slider>
    );
}

export default CarouseslTest5