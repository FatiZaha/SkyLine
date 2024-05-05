import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';


export default function FlightsTable() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/admin/1/vols/allVols'); // Remplacez '/api/reservations' par l'URL de votre endpoint pour récupérer les réservations
        const data = await response.json();
        setFlights(data); // Mettez à jour les données de réservation dans le state
      } catch (error) {
        console.error('Erreur lors de la récupération des vols :', error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Ville départ</TableCell>
            <TableCell>Ville destination</TableCell>
            <TableCell>Date départ</TableCell>
            <TableCell>Date arrivée</TableCell>
            <TableCell>Durée</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Prix</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map((Flight) => (
            <TableRow key={Flight.id}>
              <TableCell component="th" scope="row">
                {Flight.date}
              </TableCell>
              <TableCell align="left">{Flight.logo}</TableCell>
              <TableCell align="left">{Flight.villedepart}</TableCell>
              <TableCell align="left">{Flight.destination}</TableCell>
              <TableCell align="left">{Flight.datedepart}</TableCell>
              <TableCell align="left">{Flight.datearrivee}</TableCell>
              <TableCell align="left">{Flight.status}</TableCell>
              <TableCell align="left">{Flight.prix}</TableCell>
              <TableCell align="left">
                  <IconButton>
                      <ModeEditIcon />
                  </IconButton>
                  <IconButton>
                      <DeleteIcon />
                  </IconButton>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}