import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Avatar from  '@mui/material/Avatar';

const FlightDetails = ({title,image,subtitle,price,airline,depart_date,arrive_date}) => {
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel3-content"
      id="panel3-header"
    >
      <div className='lg:flex items-center justify-between'>
        <div className='lg:flex items-center lg:gap-5'>
          <img src={image} alt="" className='w-[7rem] h-[7rem] object-cover' />
          <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
            <p className='text-xl'>{title}</p>
            <p className='text-gray-300 text-lg'>Price : ${price}/person</p>
            <p className='text-gray-300 text-sm'>{subtitle}</p>
            
          </div>
          <Avatar sx={{bgcolor:"white",color:"#158a88"}}>
                    <img src={airline} alt="airlineLogo" />
                </Avatar>
        </div>

      </div>
    </AccordionSummary>
    <AccordionDetails>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
    <AccordionActions>
      <Button>Reserve a Seat</Button>
      <Button>Book Now</Button>
    </AccordionActions>
  </Accordion>
  )
}

export default FlightDetails