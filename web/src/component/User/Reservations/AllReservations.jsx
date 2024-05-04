import { Divider, Grid } from '@mui/material'
import React from 'react'
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import { Flights } from '../Flights/Flights';
import FlightDetails from '../Flights/FlightDetails';

function AllReservations() {
  return (
    <div className='px-5 lg:px-12'>
        <section>
            <br />
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={50}>
                        <img className='w-full h-[75vh] object-cover'
                        src='https://source.unsplash.com/random?airline' alt="" />

                    </Grid>
                    
                </Grid>
            </div>
            <h3 className='text-gray-500 text-4xl lg:text-4xl z-10 py-2'><AirplaneTicketOutlinedIcon sx={{ fontSize: 50 }}/> All your reservations</h3>
        </section>
        <Divider/>
        <section className='pt-[1rem]  space-y-5 lg:flex relative'>
        <div className='space-y-5 lg:w-[100%] filter '>
                {Flights.map((item)=>(
                <FlightDetails image={item.image} title={item.title} subtitle={item.subtitle} price={item.price} airline={item.airline} depart_date={item.depart_date} arrive_date={item.arrive_date}/>
                ))}

            </div>
        </section>
    </div>
  )
}

export default AllReservations
