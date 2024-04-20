import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import { topFlight } from './TopFlight';
import CarouselItem from './CarouselItem';

const MultitemCarousel = () => {
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      }

  return (
    <div>
        <Slider {...settings}>
            {topFlight.map((item)=>(
            <CarouselItem image={item.image} title={item.title}/>
            ))}
        </Slider>
    </div>
  )
}

export default MultitemCarousel