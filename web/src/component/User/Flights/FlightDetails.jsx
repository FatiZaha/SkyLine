import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Avatar from  '@mui/material/Avatar';
import "./FlightDetails.css"
import { useNavigate } from 'react-router-dom';

const FlightDetails = ({client,setFlight}) => {
  const navigate = useNavigate();
  
  const handleBookingClick = () => {
    navigate('/reservationprocess');
  };
  
  const [flights, setFlights] = useState([]);

  useEffect(() => {
      const fetchFlights = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/clients/${client.id}/vols/allVols`);
          const data = await response.json();
          setFlights(data);
        } catch (error) {
          console.error('Erreur lors de la récupération des vols :', error);
        }
      };
  
      fetchFlights();
    }, []);

  return (
    <div className='space-y-5 lg:w-[65%] filter lg:pl-10'>
    {flights.map((flight)=>(
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel3-content"
      id="panel3-header"
    >
      <div className='lg:flex justify-between'>
        
        <div className='lg:flex items-center lg:gap-5'>
          <img src={'https://source.unsplash.com/random?'+flight.aeroportDestination.ville.nom} alt="" className='w-[7rem] h-[7rem] object-cover' />
          <div className='space-y-1 lg:space-y-1 lg:max-w-2xl'>
            <p className='text-xl'>{flight.aeroportDestination.ville.nom}</p>
            <p className='text-gray-300 text-lg'>Business Class Price : ${flight.prixClass1}/person</p>
            <p className='text-gray-300 text-lg'>Eco Class Price : ${flight.prixClass2}/person</p>
            <p className='text-gray-300 text-sm'>Aeroport : {flight.aeroportDestination.nom}</p>
            
          </div>
          <Avatar sx={{bgcolor:"white",color:"#158a88"}}>
            <img src={flight.avionVol.compagnie.logo} alt="airlineLogo" />
          </Avatar>
        
        </div>
        
        
      </div>
    </AccordionSummary>
    <AccordionDetails>
    <p><span className='text-gray-300 text-lg'>Departure Aeroport  </span> {flight.aeroportDepart.nom}</p>
    <p><span className='text-gray-300 text-lg'>Departure date  </span> {flight.dateDepart.toString()}</p><br />
    <p><span className='text-gray-300 text-lg'>Destination Aeroport  </span> {flight.aeroportDestination.nom}</p>
    <p><span className='text-gray-300 text-lg'>Destination date  </span> {flight.dateArrive.toString()}</p>
    </AccordionDetails>
    <AccordionActions>
      
      <Button onClick={()=>{setFlight(flight);handleBookingClick();}}>Book Now</Button>
    </AccordionActions>
  </Accordion>
  ))}
  </div>
  )
}

export default FlightDetails