import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

import FlightCard from './FlightsCard';

const FlightCardsCarousel = ({client}) => {
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
      const [Flights, setFlights] = React.useState([]);

      React.useEffect(() => {
          const fetchFlights = async () => {
            try {
              const response = await fetch(`http://localhost:8080/api/clients/${client.id}/vols/allVols`);
              const data = await response.json();
              setFlights(data);
            } catch (error) {
              console.error('Erreur lors de la récupération des compagnies :', error);
            }
          };
      
          fetchFlights();
        }, []);

  return (
    <div>
        <Slider {...settings} className='flex flex-wrap items-center justify-around gap-5'>
            {Flights.map((item)=>(
            <FlightCard image={item.aeroportDestination.ville.image} title={item.aeroportDestination.ville.nom} subtitle={item.aeroportDestination.nom} priceClass1={item.prixClass1} priceClass2={item.prixClass2} airline={item.avionVol.compagnie.logo} status={item.status}/>
            ))}
        </Slider>
    </div>
  )
}

export default FlightCardsCarousel