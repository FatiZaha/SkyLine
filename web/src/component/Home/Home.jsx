import React from 'react'
import "./Home.css";
import MultitemCarousel from './MultitemCarousel';
import FlightCardsCarousel from '../Flights/FlightCardsCarousel';
const Home = () => {
  
  return (
    <div className='pb-10'>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>

            <div className='w-[50vw] z-10 text-center'>
                <p className='title text-6xl lg:text-6xl z-10 py-5'>SkyLink</p>
                <p className='z-10 text-gray-300 text-xl lg:text-3xl'>Where Journeys Begin and Connections Flourish</p>

            </div>

            <div className='cover absolute top-0 left-0 right-0'>


            </div>

            <div className='fadout'>

            </div>
        </section>
        <section className='p-10 lg:py-10 lg:px-20'>
          <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Flight Destinations</p>
          <MultitemCarousel/>
        </section>
        <section className='px-5 lg:px-20 pt-10'>
          <h1 className='text-2xl font-semibold text-gray-400 pb-8'>
            Flights
          </h1>
          <div>
          <FlightCardsCarousel/>
          </div>
        </section>

    </div>
  )
}

export default Home