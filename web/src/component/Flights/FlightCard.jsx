import React from 'react'
import { Card,Chip,Avatar } from '@mui/material'
import './FlightCard.css'

const FlightCard = ({image,title,subtitle,price,airline}) => {
  return (
    <Card className='m-5 w-[20rem] card-container'>
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover'
            src={image} alt={title}/>
            <Chip
            size='small'
            className='absolute top-2 left-2'
            color={true?"success":"error"}
            label={true? "Available":"Booked"}
            />
        </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg'>
                    {title}
                </p>
                <p className='text-gray-500 text-sm'>
                    {subtitle}
                </p>
                <p className='text-gray-500 text-sm'>
                    {price}
                </p>
            </div>
            <div>
                <Avatar sx={{bgcolor:"white",color:"#158a88"}}>
                    <img src={airline} alt="airlineLogo" />
                </Avatar>
            
            </div>
            
        </div>
    </Card>
  )
}

export default FlightCard