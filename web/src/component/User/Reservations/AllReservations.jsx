import { Divider, Grid } from '@mui/material'
import React from 'react';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import Reservation from './Reservation';




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

                <Reservation/>

        </section>
    </div>
  )
}

export default AllReservations
