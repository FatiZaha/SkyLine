import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary,AccordionDetails, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicTable({client}) {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Effectuez une requête à votre base de données pour récupérer les données de réservation
    // Utilisez les méthodes appropriées pour accéder à votre base de données (par exemple, une API REST ou un ORM)

    // Exemple de requête fictive
    const fetchReservations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/clients/${client.id}/reservations`); // Remplacez '/api/reservations' par l'URL de votre endpoint pour récupérer les réservations
        const data = await response.json();
        setReservations(data); // Mettez à jour les données de réservation dans le state
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations :', error);
      }
    };

    fetchReservations();
  }, []);

 

  return (

      <div className='space-y-5 lg:w-[100%] filter'>
      {reservations.map((reservation)=>(
        
      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        <div className='lg:flex justify-between'>
          
          <div className='lg:flex items-center lg:gap-5'>
            <img src={'https://source.unsplash.com/random?'+reservation.vol.aeroportDestination.ville.nom} alt="" className='w-[7rem] h-[7rem] object-cover' />
            <div className='space-y-1 lg:space-y-1 lg:max-w-2xl'>
              <p className='text-xl'>{reservation.vol.aeroportDestination.ville.nom}</p>
              <p className='text-gray-300 text-lg'>Class : {reservation.place.siege.type === 'Classe1' ? 'Business Class' : 'Eco Class'} </p>
              <p className='text-gray-300 text-lg'>Place Number : {reservation.place.numplace}</p>
              <p className='text-gray-300 text-sm'>Price : ${reservation.prixTotal}</p>
              
            </div>
            <Avatar sx={{bgcolor:"white",color:"#158a88"}}>
              <img src={reservation.vol.avionVol.compagnie.logo} alt="airlineLogo" />
            </Avatar>
          
          </div>
          
          
        </div>
      </AccordionSummary>
      <AccordionDetails>
      <p><span className='text-gray-300 text-lg'>Departure Aeroport  </span> {reservation.vol.aeroportDepart.nom}</p>
      <p><span className='text-gray-300 text-lg'>Departure date  </span> {reservation.vol.dateDepart.toString()}</p><br />
      <p><span className='text-gray-300 text-lg'>Destination Aeroport  </span> {reservation.vol.aeroportDestination.nom}</p>
      <p><span className='text-gray-300 text-lg'>Destination date  </span> {reservation.vol.dateArrive.toString()}</p>
      </AccordionDetails>
    </Accordion>
    ))}
    </div>
  )
}