import { Divider, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import FlightDetails from '../Flights/FlightDetails';




function AllReservations() {
const [flights, setFlights] = useState([]);

useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/admin/1/compagnies/all');
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des compagnies :', error);
      }
    };

    fetchCompanies();
  }, []);

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
                {flights.map((item)=>(
                <FlightDetails flight={item}/>
                ))}

            </div>
        </section>
    </div>
  )
}

export default AllReservations
