import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import { Flights } from './Flights';

import FlightCard from '../Flights/FlightsCard';

const FlightCardsCarousel = () => {
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }

  return (
    <div>
        <Slider {...settings} className='flex flex-wrap items-center justify-around gap-5'>
            {Flights.map((item)=>(
            <FlightCard image={item.image} title={item.title} subtitle={item.subtitle} price={item.price} airline={item.airline}/>
            ))}
        </Slider>
    </div>
  )
}

export default FlightCardsCarousel